import Image from "next/image";
import { Photo } from "../models/Images";
import Link from "next/link";

type Props = {
  photo: Photo;
};

const ImageContainer = ({ photo }: Props) => {
  const widthHeightRatio = photo.height / photo.width;
  const galleryHeight = Math.ceil(250 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;

  return (
    <div
      className="w-[250px] justify-self-center"
      style={{ gridRow: `span ${photoSpans}` }}
    >
      <Link
        href={photo.url}
        target="_blank"
        className="grid place-content-center"
      >
        <div className="rounded-xl overflow-hidden group">
          <Image
            src={photo.src.large}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes={"250px"}
            // ! When using specified value we don't need the fill and sizes
            // sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
            // fill={true}
            // className="object-cover roup-hover:opacity-75"
            className="group-hover:opacity-75"
            priority={true}
            placeholder="blur"
            blurDataURL={photo.blurredDataUrl}
          />
        </div>
      </Link>
    </div>
  );
};
export default ImageContainer;
