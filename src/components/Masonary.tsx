import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import { Photo } from "~/@types/google-photo";
import { chunk, sum } from "lodash";
import { css, cx } from "linaria";

interface MasonaryProps {
  images: Photo[];
  itemsPerRow: number;
}

export const Masonary = ({ images, itemsPerRow }: MasonaryProps) => {
  return (
    <>
      {chunk(images, itemsPerRow).map(row => {
        const rowAspectRatioSum = sum(
          row.map(image => {
            const { height, width } =
              image.file.childImageSharp.gatsbyImageData;
            return width / height;
          })
        );

        return row.map((image, idx) => {
          const { height, width } = image.file.childImageSharp.gatsbyImageData;
          const imageAspectRatio = width / height;
          const gatsbyImage = getImage(image.file as ImageDataLike);

          return gatsbyImage ? (
            <GatsbyImage
              key={idx}
              className={cx(
                "d-inline-block img-fluid",
                css`
                  & .gatsby-image-wrapper img {
                    margin: 0.5rem;
                  }
                `
              )}
              style={{
                width: `${(imageAspectRatio / rowAspectRatioSum) * 100}%`,
              }}
              image={gatsbyImage}
              alt=""
            />
          ) : null;
        });
      })}
    </>
  );
};
