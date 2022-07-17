import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from "gatsby-plugin-image";
import { cx } from "linaria";
import { useEffect, useRef, useState } from "react";
import { Photo } from "~/@types/google-photo";
import Slider from "react-slick";
import { ImageCarousel } from "./ImageCarousel";

interface ImageModalProps {
  onClose: () => void;
  selectedImageId: string;
  images: Photo[];
}

export const ImageModal = (props: ImageModalProps) => {
  const { selectedImageId, images } = props;
         
  const showModal = !!selectedImageId
  const imageIdList = images.map(image => image.file.childImageSharp.id);

  useEffect(() => {
    if (showModal) {
      document.querySelector("body")?.classList.add("modal-open");
    } else {
      document.querySelector("body")?.classList.remove("modal-open");
    }
  }, [showModal]);

  return (
    <div
      className={cx(
        "d-block modal fade",
        showModal ? "visible show" : "invisible"
      )}
      id="galleryImageModal"
      tabIndex={-1}
      aria-labelledby="galleryImageModalLabel"
      aria-modal={showModal ? "true" : "false"}
      role="dialog"
    >
      <div className="modal-dialog modal-fullscreen">
        {(() => {
          if (showModal) {
            const slide = imageIdList.findIndex(imageId => imageId === selectedImageId) || 0;
            return <ImageCarousel {...props} initialSlide={slide} numberSlides={imageIdList.length} />;
          }
        })()}
      </div>
    </div>
  );
};
