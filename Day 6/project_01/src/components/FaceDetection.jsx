 import React, { useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";

const moodEmojis = {
  happy: "😊",
  sad: "😢",
  angry: "😠",
  fearful: "😨",
  disgusted: "🤢",
  surprised: "😲",
  neutral: "😐",
};

const FaceDetection = () => {
  const videoRef = useRef();
  const canvasRef = useRef();
  const [mood, setMood] = useState("");
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState("");

  // Start webcam
  const startVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    } catch (err) {
      console.error("Webcam error:", err);
    }
  };

  // Load models
  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = "/models"; // public/models folder
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        faceapi.nets.ageGenderNet.loadFromUri(MODEL_URL),
      ]);
      startVideo();
    };
    loadModels();
  }, []);

  // Detection
  useEffect(() => {
    const interval = setInterval(async () => {
      if (
        videoRef.current &&
        videoRef.current.readyState === 4
      ) {
        const displaySize = {
          width: videoRef.current.videoWidth,
          height: videoRef.current.videoHeight,
        };
        canvasRef.current.width = displaySize.width;
        canvasRef.current.height = displaySize.height;

        const detections = await faceapi
          .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
          .withFaceExpressions()
          .withAgeAndGender();

        const resized = faceapi.resizeResults(detections, displaySize);
        const ctx = canvasRef.current.getContext("2d");
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        faceapi.draw.drawDetections(canvasRef.current, resized);
        faceapi.draw.drawFaceExpressions(canvasRef.current, resized);

        if (detections[0]) {
          const expressions = detections[0].expressions;
          const topMood = Object.entries(expressions).reduce((a, b) =>
            a[1] > b[1] ? a : b
          );
          setMood(topMood[0]);

          setAge(Math.round(detections[0].age));
          setGender(detections[0].gender);
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "720px",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        }}
      >
        <video
          ref={videoRef}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
        <canvas
          ref={canvasRef}
          style={{ position: "absolute", top: 0, left: 0 }}
        />
        {/* Overlay for Mood, Age, Gender */}
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "rgba(0,0,0,0.6)",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "20px",
            fontSize: "18px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span style={{ fontSize: "22px" }}>{moodEmojis[mood] || "😐"}</span>
          <span>{mood.toUpperCase() || "NEUTRAL"}</span>
          <span>| Age: {age || "-"}</span>
          <span>| Gender: {gender || "-"}</span>
        </div>
      </div>
    </div>
  );
};

export default FaceDetection;
