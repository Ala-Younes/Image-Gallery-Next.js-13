import { ImagesResult, ImagesSchemaWithPhotos } from "../models/Images";
import env from "./env";

const fetchImages = async (url: string): Promise<ImagesResult | undefined> => {
  const options: RequestInit | undefined = {
    headers: {
      Authorization: env.PEXELS_API_KEY,
    },
  };

  try {
    const res = await fetch(url, options);

    if (!res.ok) throw new Error("Fetch Images Error!\n");

    const imagesResults: ImagesResult = await res.json();
    // console.log(imagesResults);

    // Parse Data with Zod Schema
    const parsedData = ImagesSchemaWithPhotos.parse(imagesResults);
    if (parsedData.total_results === 0) return undefined;
    return parsedData;
  } catch (e) {
    // ! Will show in terminal (NextJs server rendering xD)
    if (e instanceof Error) console.log(e.stack);
  }
};
export default fetchImages;
