import Image from "next/image";
import { Photo } from "../models/Images";

type Props = {
  photo: Photo;
};

const ImageContainer = ({ photo }: Props) => {
  return (
    <div className="h-64 bg-gray-200 rounded-xl">
      <Image src={photo.src.large} alt={photo.alt} width={250} height={250} />
    </div>
  );
};
export default ImageContainer;
