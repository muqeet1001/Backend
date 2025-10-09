 import React, { useEffect } from "react";
import * as faceapi from "face-api.js";

function Detect({ videoRef, onMoodDetected }) {
  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.faceExpressionNet.loadFromUri("/models");
      console.log("FaceAPI models loaded");
    };

    loadModels();
  }, []);

  // Detect mood continuously
  useEffect(() => {
    if (!videoRef.current) return;

    const interval = setInterval(async () => {
      const video = videoRef.current;
      if (video.readyState === 4) {
        const detections = await faceapi
          .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceExpressions();

        if (detections.length > 0) {
          const expressions = detections[0].expressions;
          const detectedMood = Object.keys(expressions).reduce((a, b) =>
            expressions[a] > expressions[b] ? a : b
          );
            console.log("Detected Mood:", detectedMood)
          if (onMoodDetected) onMoodDetected(detectedMood);
        }
      }
    }, 2000); // detect every 0.5s

    return () => clearInterval(interval);
  }, [videoRef, onMoodDetected]);

  return null;
 // No UI needed
}

export default Detect;
