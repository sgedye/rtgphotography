import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import { Photo } from "~/@types/google-photo";
import { chunk, sum } from "lodash";
import { ImageModal } from "./ImageModal";
import { useState } from "react";
import { css, cx } from "linaria";

interface MasonaryProps {
  images: Photo[];
  itemsPerRow: number;
}

export const Masonary = ({ images, itemsPerRow }: MasonaryProps) => {
  // const [showModal, setShowModal] = useState<boolean>(false);
  const [initialImageId, setInitialImageId] = useState<string | null>(null);

  return (
    <section className="mb-5">
      {!!initialImageId && (
        <ImageModal
          // showModal={showModal}
          selectedImageId={initialImageId || ""}
          images={images}
          onClose={() => {
            // setShowModal(false);
            setInitialImageId(null);
          }}
        />
      )}

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

          if (gatsbyImage) {
            return (
              <button
                key={idx}
                type="button"
                className={cx(
                  "bg-transparent border-0 p-0",
                  css`
                    &:focus-visible {
                      outline: none;
                      img {
                        box-shadow: 0 0 0 1px white, 0 0 8px black;
                      }
                    }
                  `
                )}
                onClick={() => setInitialImageId(image.file.childImageSharp.id)}
                style={{
                  width: `${(imageAspectRatio / rowAspectRatioSum) * 100}%`,
                }}
              >
                <GatsbyImage
                  className="d-inline-block img-fluid"
                  image={gatsbyImage}
                  alt=""
                />
              </button>
            );
          }
        });
      })}
    </section>
  );
};
