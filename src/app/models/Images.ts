import { z } from "zod";

const BasicImageSchema = z.object({
  total_results: z.number(),
  page: z.number(),
  per_page: z.number(),
  prev_page: z.string().optional(),
  next_page: z.string().optional(),
});

const PhotoSchema = z.object({
  id: z.number(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  src: z.object({
    large: z.string(),
  }),
  alt: z.string(),
  // ! NextJs properties
  blurredDataUrl: z.string().optional(),
});

const ImagesSchemaWithPhotos = BasicImageSchema.extend({
  photos: z.array(PhotoSchema),
});

type Photo = z.infer<typeof PhotoSchema>;
type ImagesResult = z.infer<typeof ImagesSchemaWithPhotos>;

export { type Photo, type ImagesResult, ImagesSchemaWithPhotos };
