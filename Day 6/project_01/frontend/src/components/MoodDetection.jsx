 import React from "react";
import logo from "../assets/logo.jpg";
import LiveMoodDetection from "./LiveMoodDetection";
import Detect from "./Detect"; // make sure this exists
import Songs from "./Songs";
function MoodDetection({songsData}) {
  const [showMood, setShowMood] = React.useState(false);
  const videoRef = React.useRef(null);
  const [mood, setMood] = React.useState("");

  return (
    <div className="main min-w-full min-h-full bg-white flex flex-col items-center">
      {/* Header */}
      <div className="header flex items-center pt-1 gap-3">
        <img src={logo} alt="logo" className="w-20" />
        <h2 className="text-2xl font-bold font-serif">Moddy Player</h2>
      </div>
      {/* Line */}
      <div className="line w-full bg-black h-[1px] mb-5"></div>

      {/* Body */}
      <div className="body bg-gray-100 w-[80%] min-h-screen rounded-2xl p-4">
        <h1 className="text-3xl font-bold mb-10 pt-5">Live Mood Detection</h1>

        <div className="box flex gap-6">
          {/* Camera */}
          <div className="camare h-48 flex flex-col items-center">
            <LiveMoodDetection videoRef={videoRef} />
          </div>

          {/* Info */}
          <div className="info flex flex-col">
            <h2 className="text-2xl font-semibold mb-4 ml-1">Live Mood Detection</h2>
            <p className="text-xl text-gray-500 mb-6 ml-1">
              Your current mood is being analyzed in real-time. Enjoy music tailored to your feeling.
            </p>
            <button
              className="bg-blue-600 w-[150px] h-10 font-semibold rounded-2xl text-amber-50 ml-1"
              onClick={() => setShowMood(true)}
            >
              Start Listening
            </button>

            {showMood && <Detect videoRef={videoRef} onMoodDetected={setMood}/>}
             {showMood && (
              <p className="mt-4 text-xl font-semibold">
                Detected Mood: {mood || "Analyzing..."}
              </p>
            )}
          </div>
        </div>
        <Songs songData = {songsData}/>
      </div>
    </div>
  );
}

export default MoodDetection;
