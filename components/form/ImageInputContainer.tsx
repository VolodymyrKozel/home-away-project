"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FormContainer from "@/components/form/FormContainer";
import ImageInput from "@/components/form/ImageInput";
import { SubmitButton } from "@/components/form/Buttons";
import { type actionFunction } from "@/utils/types";
import { LuUser2 } from "react-icons/lu";

interface ImageInputContainerProps {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
}

const ImageInputContainer = ({
  image,
  name,
  action,
  text,
  children,
}: ImageInputContainerProps) => {
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);

  const userIcon = (
    <LuUser2 className="w-24 h-24 bg-primary rounded-md text-white mb-4" />
  );
  return (
    <div>
      {image ? (
        <Image
          src={image}
          width={100}
          height={100}
          className="rounded-md object-cover mb-4 w-24 h-24"
          alt={name}
        />
      ) : (
        userIcon
      )}

      <Button
        variant="outline"
        size="sm"
        onClick={() => setUpdateFormVisible((prev) => !prev)}>
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div className="max-w-lg mt-4">
          <FormContainer action={action}>
            {children}
            <ImageInput />
            <SubmitButton size="sm" />
          </FormContainer>
        </div>
      )}
    </div>
  );
};

export default ImageInputContainer;
