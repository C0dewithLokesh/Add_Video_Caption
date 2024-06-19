import { useEffect, useState } from "react";
import AddCaptionInputs from "./components/shared/AddCaptionInputs";
import AddUrlInput from "./components/shared/AddUrlInput";
import VideoPlayer from "./components/shared/VideoPlayer";
import { Caption } from "./types/type";

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [captions, setCaptions] = useState<Caption[]>([
    { text: "", timestamp: "" },
    { text: "", timestamp: "" },
    { text: "", timestamp: "" },
    { text: "", timestamp: "" },
  ]);

  useEffect(() => {
    if (captions.length > 0) {
      const lastCaption = captions[captions.length - 1];
      if (lastCaption.text !== "" && lastCaption.timestamp !== "") {
        setCaptions((prevCaptions) => [
          ...prevCaptions,
          { text: "", timestamp: "" },
        ]);
      }
    }
  }, [captions]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    key: keyof Caption
  ) => {
    const newCaptions = [...captions];
    newCaptions[index] = {
      ...newCaptions[index],
      [key]: event.target.value,
    };
    setCaptions(newCaptions);
  };

  return (
    <div className="min-h-screen w-screen bg-[#eee] px-6 pb-6">
      <div
        className={`w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center ${
          videoUrl ? "justify-between" : "justify-center"
        } pt-20 gap-20`}
      >
        <VideoPlayer videoUrl={videoUrl} captions={captions} />

        <div className="w-[500px] flex flex-col items-center border gap-5">
          <AddUrlInput videoUrl={videoUrl} setVideoUrl={setVideoUrl} />
          <AddCaptionInputs captions={captions} handleInputChange={handleInputChange} />
        </div>
      </div>
    </div>
  );
}

export default App;
