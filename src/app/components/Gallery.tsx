import fetchImages from "../lib/fetchImages";
import { addBlurredDataUrls } from "../lib/getBase64";
import { ImagesResult } from "../models/Images";
import ImageContainer from "./ImageContainer";

type Props = {
  topic?: string | undefined;
};
const Gallery = async ({ topic }: Props) => {
  const url = !topic
    ? "https://api.pexels.com/v1/curated"
    : `https://api.pexels.com/v1/search?query=${topic}`;

  const images: ImagesResult | undefined = await fetchImages(url);

  if (!images)
    return <h2 className="m-4 text-2xl font-bold"> No Images Found</h2>;

  console.log(images);

  const photosWithBlur = await addBlurredDataUrls(images);

  return (
    <section className="px-1 my-3 grid gap-2 grid-cols-gallery auto-rows[10px]">
      {photosWithBlur.map((photo) => (
        <ImageContainer photo={photo} key={photo.id} />
      ))}
    </section>
  );
};
export default Gallery;
