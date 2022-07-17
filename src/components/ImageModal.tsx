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

interface ImageModalProps {
  // showModal: boolean;
  onClose: () => void;
  selectedImageId: string;
  images: Photo[];
}

export const ImageModal = ({
  // showModal,
  onClose,
  selectedImageId,
  images,
}: ImageModalProps) => {
  const carouselRef = useRef<Slider | null>(null);
  const [isAnimatingSlider, setIsAnimatingSlider] = useState<boolean>(false);

  const showModal = !!selectedImageId

  console.log(selectedImageId)
  const imageIdList = images.map(image => image.file.childImageSharp.id);

  // const initialSlide = selectedImageId
  //   ? imageIdList.findIndex(imageId => imageId === selectedImageId)
  //   : 0;

  const toggleAutoplay = () => {
    const slick = carouselRef.current;
    if (slick) {
      if (isAnimatingSlider) {
        slick.slickPause();
      } else {
        slick.slickPlay();
      }
      return setIsAnimatingSlider(prev => !prev);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    const slick = carouselRef.current;
    if (slick) {
      switch (e.key) {
        case "Escape": return onClose();
        case "ArrowLeft": return slick.slickPrev();
        case "ArrowRight": case " ": return slick.slickNext();
      }
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener("keydown", e => handleKeyDown(e));
      document.querySelector("body")?.classList.add("modal-open");
    } else {
      document.querySelector("body")?.classList.remove("modal-open");
    }

    return () => {
      document.removeEventListener("keydown", e => handleKeyDown(e));
    };
  }, [showModal]);
// console.log(initialSlide)
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
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body gallery-slider p-5">
            <Slider
              ref={carouselRef}
              slidesToShow={1}
              initialSlide={imageIdList.findIndex(
                imageId => imageId === selectedImageId
              )}
              adaptiveHeight
            >
              {images.map(({ file }, idx) => {
                const gatsbyImage = getImage(file as ImageDataLike) || null;

                return gatsbyImage ? (
                  <GatsbyImage
                    key={idx}
                    className="img-fluid"
                    image={gatsbyImage}
                    alt=""
                  />
                ) : null;
              })}
            </Slider>
          </div>
          <div className="modal-footer justify-content-between">
            <button className="btn btn-primary" onClick={toggleAutoplay}>
              Autoplay : {isAnimatingSlider ? "on" : "off"}
            </button>
            <strong className="text-white">{imageIdList.length} images</strong>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
