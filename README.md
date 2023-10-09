## Image Optimization using Next.js Image Component:

- **External API (Pexels) Integration**

  - Add the Pexels API to the `remotePatterns` in your `next.config.js` file:

    ```javascript
    /** @type {import('next').NextConfig} */
    const nextConfig = {
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "images.pexels.com",
            port: "",
            pathname: "/photos/**",
          },
        ],
      },
    };

    module.exports = nextConfig;
    ```

- **Using the `fill` Property (When Width and Height are Unknown)**

  - Set the parent element's styles to ensure proper rendering:
    ```css
    parent {
      position: relative;
      overflow: hidden;
    }
    ```

- **Using `object-fit: contain` for Proper Scaling**

  - Apply `object-fit: contain;` to the image for proper scaling within its parent container.

- **Dynamic Image Sizing with `sizes` Property**

  - Utilize the `sizes` attribute with a special extension like [respimagelint](https://ausi.github.io/respimagelint/) to automatically calculate the optimal image size for different devices.

- **Blurring Effect for Dynamic Images**

  - For dynamic images, provide the `blurDataURL` property. Tools like Plaiceholder can assist in generating the base64 image data.

  ```JS
  blurredDataUrl: z.string().optional(),
  ```

  - Learn more: [Next.js Image Component - Placeholder Property](https://nextjs.org/docs/pages/api-reference/components/image#placeholder)

- **Specifying Width and Height**

  - Calculate image dimensions based on specific width and height values:

  ```Javascript
  const widthHeightRatio = photo.height / photo.width;
  const galleryHeight = Math.ceil(250 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;
  ```

### 📚 References

- 🔗 [Next.js Official Site](https://nextjs.org/)
- 🔗 [Pexels API Documentation](https://www.pexels.com/api/)
- 🔗 [Tailwind CSS Official Site](https://tailwindcss.com/)
- 🔗 [TypeScript Official Site](https://www.typescriptlang.org/)
- 🔗 [Zod Official Site](https://zod.dev/)
- 🔗 [Plaiceholder Documentation](https://plaiceholder.co/docs)
- 🔗 [Envalid Package](https://www.npmjs.com/package/envalid)
