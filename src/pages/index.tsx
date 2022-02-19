import { cx } from "linaria";
import { Layout, Seo } from "../components";

import mobileImage1 from "../images/gfx/hero-carousel/rtgphoto-001-mobile.jpg";
import mobileImage2 from "../images/gfx/hero-carousel/rtgphoto-002-mobile.jpg";
import mobileImage3 from "../images/gfx/hero-carousel/rtgphoto-003-mobile.jpg";
import mobileImage4 from "../images/gfx/hero-carousel/rtgphoto-004-mobile.jpg";
import mobileImage5 from "../images/gfx/hero-carousel/rtgphoto-005-mobile.jpg";

import desktopImage1 from "../images/gfx/hero-carousel/rtgphoto-001.jpg";
import desktopImage2 from "../images/gfx/hero-carousel/rtgphoto-002.jpg";
import desktopImage3 from "../images/gfx/hero-carousel/rtgphoto-003.jpg";
import desktopImage4 from "../images/gfx/hero-carousel/rtgphoto-004.jpg";
import desktopImage5 from "../images/gfx/hero-carousel/rtgphoto-005.jpg";

import extraWideImage1 from "../images/gfx/hero-carousel/rtgphoto-001-wide.jpg";
import extraWideImage2 from "../images/gfx/hero-carousel/rtgphoto-002-wide.jpg";
import extraWideImage3 from "../images/gfx/hero-carousel/rtgphoto-003-wide.jpg";
import extraWideImage4 from "../images/gfx/hero-carousel/rtgphoto-004-wide.jpg";
import extraWideImage5 from "../images/gfx/hero-carousel/rtgphoto-005-wide.jpg";

export default function Index() {
  return (
    <Layout title="home">
      <Seo title="Home" />

      <div
        id="carousel-homepage"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              type="button"
              data-bs-target="#carousel-homepage"
              data-bs-slide-to={`${idx}`}
              className={idx === 0 ? "active" : ""}
              aria-current="true"
              aria-label={`Slide ${idx + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {carouselImages.map(
            ({ id, alt, mobileImage, desktopImage, extraWideImage }) => (
              <div
                key={id}
                className={cx("carousel-item", id === 0 && "active")}
              >
                <picture>
                  <source srcSet={extraWideImage} media="(min-width: 1200px" />
                  <source srcSet={desktopImage} media="(min-width: 600px" />
                  <img
                    src={mobileImage}
                    className="w-100 img-fluid mx-auto"
                    alt={alt}
                  />
                </picture>
              </div>
            )
          )}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel-homepage"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel-homepage"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Layout>
  );
}

const carouselImages = [
  {
    id: 0,
    alt: "Trees by the water",
    mobileImage: mobileImage1,
    desktopImage: desktopImage1,
    extraWideImage: extraWideImage1,
  },
  {
    id: 1,
    alt: "Young Burmese girl",
    mobileImage: mobileImage2,
    desktopImage: desktopImage2,
    extraWideImage: extraWideImage2,
  },
  {
    id: 2,
    alt: "Women and girls in the street",
    mobileImage: mobileImage3,
    desktopImage: desktopImage3,
    extraWideImage: extraWideImage3,
  },
  {
    id: 3,
    alt: "Young monks",
    mobileImage: mobileImage4,
    desktopImage: desktopImage4,
    extraWideImage: extraWideImage4,
  },
  {
    id: 4,
    alt: "Cuban street scene",
    mobileImage: mobileImage5,
    desktopImage: desktopImage5,
    extraWideImage: extraWideImage5,
  },
];
