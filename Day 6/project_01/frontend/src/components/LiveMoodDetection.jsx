 import React, { useEffect } from "react";

function LiveMoodDetection({ videoRef }) {
  useEffect(() => {
    if (!videoRef) return;

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error("Error accessing webcam: ", err);
      });
  }, [videoRef]);

  return (
    <video
      ref={videoRef}
      autoPlay
      playsInline
      className="w-[700px] h-[400px] rounded-lg border-4 border-gray-300"
    ></video>
  );
}

export default LiveMoodDetection;
