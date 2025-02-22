import Image from "next/image";

interface ImageContainerProps {
  mainImage: string;
  name: string;
}

const ImageContainer = ({ mainImage, name }: ImageContainerProps) => {
  return (
    <section className="h-[300px] md:h-[500px] relative mt-8">
      <Image
        src={mainImage}
        fill
        sizes="100vw"
        alt={name}
        className="object-cover  rounded-md"
        priority
      />
    </section>
  );
};
export default ImageContainer;
