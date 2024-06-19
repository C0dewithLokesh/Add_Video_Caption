import { Caption } from "@/types/type";
import { useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({
  videoUrl,
  captions,
}: {
  videoUrl: string;
  captions: Caption[];
}) => {
  const [, setCurrentTime] = useState<number>(0);
  const [currentCaption, setCurrentCaption] = useState<string>("");

  function timeToSeconds(time: string): number | null {
    const timeParts = time.split(":").map((part) => parseInt(part, 10));
    if (timeParts.length === 3) {
      const [hours, minutes, seconds] = timeParts;
      return hours * 3600 + minutes * 60 + seconds;
    } else if (timeParts.length === 2) {
      const [minutes, seconds] = timeParts;
      return minutes * 60 + seconds;
    } else {
      // throw new Error("Invalid time format");
      return null;
    }
  }

  const handleProgress = (state: { playedSeconds: number }) => {
    setCurrentTime(state.playedSeconds);

    const current = captions.find((caption) => {
      const captionTime = timeToSeconds(caption.timestamp);
      if (caption && captionTime) {
        return (
          captionTime <= state.playedSeconds &&
          captionTime > state.playedSeconds - 1
        );
      }
    });

    if (current) {
      setCurrentCaption(current.text);
    } else {
      setCurrentCaption("");
    }
  };

  return (
    <div className="video-player-container">
      {videoUrl && (
        <div className="relative">
          <ReactPlayer url={videoUrl} controls onProgress={handleProgress} />
          <div className="absolute bottom-[50px] w-full flex items-center justify-center z-[100]">
            {currentCaption && (
              <div className="bg-black bg-opacity-70 text-white px-3 py-1">
                {" "}
                <p className="text-white">{currentCaption}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
