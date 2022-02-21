import { cx } from "linaria";
import { Layout, Seo } from "~/components";

import mobileImage1 from "~/images/gfx/hero-carousel/rtgphoto-001-mobile.jpg";
import mobileImage2 from "~/images/gfx/hero-carousel/rtgphoto-002-mobile.jpg";
import mobileImage3 from "~/images/gfx/hero-carousel/rtgphoto-003-mobile.jpg";
import mobileImage4 from "~/images/gfx/hero-carousel/rtgphoto-004-mobile.jpg";
import mobileImage5 from "~/images/gfx/hero-carousel/rtgphoto-005-mobile.jpg";

import desktopImage1 from "~/images/gfx/hero-carousel/rtgphoto-001.jpg";
import desktopImage2 from "~/images/gfx/hero-carousel/rtgphoto-002.jpg";
import desktopImage3 from "~/images/gfx/hero-carousel/rtgphoto-003.jpg";
import desktopImage4 from "~/images/gfx/hero-carousel/rtgphoto-004.jpg";
import desktopImage5 from "~/images/gfx/hero-carousel/rtgphoto-005.jpg";

import extraWideImage1 from "~/images/gfx/hero-carousel/rtgphoto-001-wide.jpg";
import extraWideImage2 from "~/images/gfx/hero-carousel/rtgphoto-002-wide.jpg";
import extraWideImage3 from "~/images/gfx/hero-carousel/rtgphoto-003-wide.jpg";
import extraWideImage4 from "~/images/gfx/hero-carousel/rtgphoto-004-wide.jpg";
import extraWideImage5 from "~/images/gfx/hero-carousel/rtgphoto-005-wide.jpg";

import eth01 from "~/images/galleries/covers/Ethiopia001.jpg";
import eth02 from "~/images/galleries/covers/Ethiopia002.jpg";
import eth03 from "~/images/galleries/covers/Ethiopia003.jpg";
import portI01 from "~/images/galleries/covers/PortraitsI001.jpg";
import portI02 from "~/images/galleries/covers/PortraitsI002.jpg";
import portI03 from "~/images/galleries/covers/PortraitsI003.jpg";
import cub01 from "~/images/galleries/covers/Cuba001.jpg";
import cub02 from "~/images/galleries/covers/Cuba002.jpg";
import cub03 from "~/images/galleries/covers/Cuba003.jpg";

import { GalleryCover, GalleryListItem } from "./galleries";
import { Routes } from "~/models";

export default function Index() {
  return (
    <Layout title="home">
      <Seo title="Home" />

      <div
        id="carousel-homepage"
        className="carousel slide mb-4"
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
                  <source srcSet={desktopImage} media="(min-width: 768px" />
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

      <section className="container">
        <div className="row mb-4 px-4">
          {GalleryList.map(gallery => (
            <div
              key={gallery.title}
              className="col-12 col-md-6 col-xl-4 p-4 mb-3"
            >
              <GalleryCover {...gallery} />
            </div>
          ))}
        </div>
      </section>
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

const GalleryList: GalleryListItem[] = [
  {
    title: "Ethiopia",
    route: Routes.Ethiopia,
    images: [eth03, eth02, eth01],
  },
  {
    title: "Portraits",
    route: Routes.Portraits,
    images: [portI03, portI02, portI01],
  },
  {
    title: "Cuba",
    route: Routes.Cuba,
    images: [cub03, cub02, cub01],
  },
];
