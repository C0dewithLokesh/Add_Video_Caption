import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface AddUrlInputProps {
  videoUrl: string;
  setVideoUrl: React.Dispatch<React.SetStateAction<string>>;
}

const AddUrlInput: React.FC<AddUrlInputProps> = ({ videoUrl, setVideoUrl }) => {
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <Label>Add Video Url</Label>
      <Input
        value={videoUrl}
        placeholder="Video Url"
        onChange={(e) => setVideoUrl(e.currentTarget.value)}
      />
    </div>
  );
};

export default AddUrlInput;
