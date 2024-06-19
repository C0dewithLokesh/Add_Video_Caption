import { Caption } from "@/types/type";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface AddCaptionInputProps {
  captions: Caption[];
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number, key: keyof Caption) => void;
}

const AddCaptionInputs: React.FC<AddCaptionInputProps>  = ({ captions, handleInputChange }) => {
  return (
    <div className="flex flex-col items-center w-full gap-4">
      <Label className="w-full">Add Caption</Label>
      <div className="flex flex-col gap-4 items-center w-full">
        {captions.map((caption: Caption, index: number) => (
          <div
            key={index}
            className="flex items-center justify-between w-full gap-3"
          >
            <Input
              value={caption.timestamp}
              placeholder="hh:mm:ss"
              className="w-[30%]"
              onChange={(e) => handleInputChange(e, index, "timestamp")}
            />
            <Textarea
              value={caption.text}
              placeholder="Caption"
              className="h-auto"
              rows={1}
              onChange={(e) => handleInputChange(e, index, "text")}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddCaptionInputs;
