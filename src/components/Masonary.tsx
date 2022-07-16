import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import { Photo } from "~/@types/google-photo";
import { chunk, sum } from "lodash";
import { ImageModal } from "./ImageModal";
import { useState } from "react";

interface MasonaryProps {
  images: Photo[];
  itemsPerRow: number;
}

export const Masonary = ({ images, itemsPerRow }: MasonaryProps) => {
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);

  return (
    <div>

      <ImageModal
        image={selectedImage}
        onClose={() => {
          setSelectedImage(null);
        }}
      />
      
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
                className="bg-transparent border-0 p-0"
                onClick={() => setSelectedImage(image)}
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
    </div>
  );
};
