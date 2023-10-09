import fetchImages from "../lib/fetchImages";
import { addBlurredDataUrls } from "../lib/getBase64";
import getPrevNextPages from "../lib/getPrevNextPages";
import { ImagesResult } from "../models/Images";
import Footer from "./Footer";
import ImageContainer from "./ImageContainer";

type Props = {
  topic?: string | undefined;
  page?: string | undefined;
};
const Gallery = async ({ topic, page }: Props) => {
  let url;

  if (topic === "curated" && page) {
    // ! Browsing beyond home
    url = `https://api.pexels.com/v1/curated?page=${page}`;
  } else if (topic === "curated") {
    // ! Home page (default)
    url = `https://api.pexels.com/v1/curated`;
  } else if (!page) {
    // ! first page of search results
    url = `https://api.pexels.com/v1/search?query=${topic}`;
  } else {
    url = `https://api.pexels.com/v1/search?query=${topic}&page=${page}`;
  }

  const images: ImagesResult | undefined = await fetchImages(url);

  if (!images || images.per_page === 0)
    return <h2 className="m-4 text-2xl font-bold"> No Images Found </h2>;

  // console.log(images);

  const photosWithBlur = await addBlurredDataUrls(images);

  // calculate pagination
  const { prevPage, nextPage } = getPrevNextPages(images);

  const footerProps = { topic, page, nextPage, prevPage };
  return (
    <>
      <section className="px-1 my-3 grid gap-2 grid-cols-gallery auto-rows[10px]">
        {photosWithBlur.map((photo) => (
          <ImageContainer photo={photo} key={photo.id} />
        ))}
      </section>
      {/* TODO add footer */}
      <Footer {...footerProps} />
    </>
  );
};
export default Gallery;
