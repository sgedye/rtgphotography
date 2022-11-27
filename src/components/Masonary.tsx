import {
  GatsbyImage,
  getImage,
  ImageDataLike,
  IGatsbyImageData,
} from "gatsby-plugin-image";
import { Photo } from "~/@types/google-photo";
import { chunk, sum } from "lodash";
import { ImageModal } from "./ImageModal";
import { useState } from "react";
import { css, cx } from "linaria";
import { theme } from "~/theme";
import Gallery from "react-photo-gallery";

interface MasonaryProps {
  images: Photo[];
  itemsPerRow: number;
}


// React-photo gallery looks great... but with basic src/width/height only.
//  - Could add in isViewerOpen (then show thumbs / full images)
//  - Separate arrays for 'thumbs' and big images.
//  - Columns look nice.


// Gatsby-image-galllery is square, but uses gatsby images -- no good.


export const Masonary = ({ images, itemsPerRow }: MasonaryProps) => {
  // const [initialImageId, setInitialImageId] = useState<string | null>(null);

  // const gatsbyImages = images.map(img => {
  //   return getImage(img.file as ImageDataLike)
  // }).filter(img => !!img);
  
  // return (
  //   <section id="popup-gallery">
  //     <Gallery photos={gatsbyImages} />
  //   </section>
  // )

  return (
    <section id="popup-gallery" className="row">
      {images.map(image => {
        const gatsbyImage = getImage(image.file as ImageDataLike);

        if (gatsbyImage) {
          return (
            <div
              className="col-md-6 col-xl-4 mb-3"
              key={image.file.childImageSharp.id}
            >
              <GatsbyImage
                data-fancybox="gallery"
                className="d-inline-block img-fluid"
                image={gatsbyImage}
                alt="r-t-g photo"
              />
            </div>
          );
        }

        return null;
      })}
    </section>
  );

  // return (
  //   <section className="mb-5">
  //     <ImageModal
  //       selectedImageId={initialImageId || ""}
  //       images={images}
  //       onClose={() => setInitialImageId(null)}
  //     />

  //     {chunk(images, itemsPerRow).map(row => {
  //       const rowAspectRatioSum = sum(
  //         row.map(image => {
  //           const { height, width } =
  //             image.file.childImageSharp.gatsbyImageData;
  //           return width / height;
  //         })
  //       );

  //       return row.map((image, idx) => {
  //         const { height, width } = image.file.childImageSharp.gatsbyImageData;
  //         const imageAspectRatio = width / height;
  //         const gatsbyImage = getImage(image.file as ImageDataLike);

  //         if (gatsbyImage) {
  //           return (
  //             <button
  //               key={idx}
  //               type="button"
  //               className={cx(
  //                 "bg-transparent border-0 p-0",
  //                 css`
  //                   &:focus-visible {
  //                     outline: none;
  //                     img {
  //                       box-shadow: 0 0 0 1px ${theme.white},
  //                         0 0 8px ${theme.black};
  //                     }
  //                   }
  //                 `
  //               )}
  //               onClick={() => setInitialImageId(image.file.childImageSharp.id)}
  //               style={{
  //                 width: `${(imageAspectRatio / rowAspectRatioSum) * 100}%`,
  //               }}
  //             >
  //               <GatsbyImage
  //                 className="d-inline-block img-fluid"
  //                 image={gatsbyImage}
  //                 alt=""
  //               />
  //             </button>
  //           );
  //         }
  //       });
  //     })}
  //   </section>
  // );
};
