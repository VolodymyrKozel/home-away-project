import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface ImageInputProps {
  name?: string;
}

const ImageInput = ({ name = "image" }: ImageInputProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Image
      </Label>
      <Input
        id={name}
        name={name}
        type="file"
        required
        accept="image/*"
        className="max-w-xs"
      />
    </div>
  );
};

export default ImageInput;
