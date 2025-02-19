import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Prisma } from "@prisma/client";

const name = Prisma.PropertyScalarFieldEnum.price;
// const name = 'price';

interface PriceInputProps {
  defaultValue?: number;
}

function PriceInput({ defaultValue }: PriceInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor="price" className="capitalize">
        Price ($)
      </Label>
      <Input
        id={name}
        type="number"
        name={name}
        min={0}
        defaultValue={defaultValue || 100}
        required
      />
    </div>
  );
}

export default PriceInput;
