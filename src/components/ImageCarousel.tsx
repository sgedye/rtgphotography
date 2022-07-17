import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";

import { Photo } from "~/@types/google-photo";

interface ImageCarouselProps {
  onClose: () => void;
  initialSlide: number;
  numberSlides: number;
  images: Photo[];
}

export const ImageCarousel = (props: ImageCarouselProps) => {
  const { onClose, initialSlide, numberSlides, images } = props;
  const carouselRef = useRef<Slider | null>(null);
  const [isAnimatingSlider, setIsAnimatingSlider] = useState<boolean>(false);

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
        case "Escape":
          return onClose();
        case "ArrowLeft":
          return slick.slickPrev();
        case "ArrowRight":
        case " ":
          return slick.slickNext();
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", e => handleKeyDown(e));

    return () => {
      document.removeEventListener("keydown", e => handleKeyDown(e));
    };
  }, []);

  return (
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
          initialSlide={initialSlide}
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
        <strong className="text-white">{numberSlides} images</strong>
        <button type="button" className="btn btn-secondary" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};
