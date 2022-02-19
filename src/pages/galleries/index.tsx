import { Link } from "gatsby";
import { Routes } from "../../models";
import { theme } from "../../theme";

import { Layout, Seo } from "../../components";
import { css, cx } from "linaria";

// Cover Images
import mad01 from "../../images/galleries/covers/Madagascar001.jpg";
import mad02 from "../../images/galleries/covers/Madagascar002.jpg";
import mad03 from "../../images/galleries/covers/Madagascar003.jpg";

import eth01 from "../../images/galleries/covers/Ethiopia001.jpg";
import eth02 from "../../images/galleries/covers/Ethiopia002.jpg";
import eth03 from "../../images/galleries/covers/Ethiopia003.jpg";

import cub01 from "../../images/galleries/covers/Cuba001.jpg";
import cub02 from "../../images/galleries/covers/Cuba002.jpg";
import cub03 from "../../images/galleries/covers/Cuba003.jpg";

import lan01 from "../../images/galleries/covers/Landscapes001.jpg";
import lan02 from "../../images/galleries/covers/Landscapes002.jpg";
import lan03 from "../../images/galleries/covers/Landscapes003.jpg";

import portI01 from "../../images/galleries/covers/PortraitsI001.jpg";
import portI02 from "../../images/galleries/covers/PortraitsI002.jpg";
import portI03 from "../../images/galleries/covers/PortraitsI003.jpg";

import portII01 from "../../images/galleries/covers/PortraitsII001.jpg";
import portII02 from "../../images/galleries/covers/PortraitsII002.jpg";
import portII03 from "../../images/galleries/covers/PortraitsII003.jpg";

import blk01 from "../../images/galleries/covers/BlackAndWhite001.jpg";
import blk02 from "../../images/galleries/covers/BlackAndWhite002.jpg";
import blk03 from "../../images/galleries/covers/BlackAndWhite003.jpg";

type GalleryListItem = {
  title: string;
  route: string;
  images: string[];
};

const GalleryCover = ({ title, route, images }: GalleryListItem) => {
  return (
    <Link to={`${Routes.Galleries}${route}`}>
      <figure
        className={cx(
          "w-100 position-relative figure",
          css`
            & img {
              transition: all ease-out 250ms;

              &:not(:first-of-type) {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
              }

              &:nth-of-type(2) {
                transform: rotateZ(-3deg);
              }
              &:nth-of-type(3) {
                transform: rotateZ(2deg);
              }
            }

            & figcaption {
              transition: all ease-in-out 250ms;
              color: ${theme.white};
              border: ${theme.white};
            }

            &:hover {
              img {
                transform: rotateZ(0deg);
                box-shadow: 2px 2px 6px 0px #666;

                &:nth-of-type(1) {
                  transform: translate(4px, 4px);
                }
                &:nth-of-type(2) {
                  transform: translate(2px, 2px);
                }
              }

              figcaption {
                color: ${theme.info};
                border: ${theme.info};
              }
            }
          `
        )}
      >
        {images.map((imgSrc, idx) => (
          <img key={idx} src={imgSrc} alt="" className="figure-img img-fluid" />
        ))}

        <figcaption
          className={cx(
            "text-center",
            css`
              position: absolute;
              bottom: 15%;
              left: 0;
              right: 0;
            `
          )}
        >
          <span
            className={cx(
              "text-uppercase px-3 py-2",
              css`
                border: 0.1875rem solid;
                background-color: #333333ee;
                border-radius: 0 1rem;
                font-weight: 700;
              `
            )}
          >
            {title}
          </span>
        </figcaption>
      </figure>
    </Link>
  );
};

export default function Index() {
  return (
    <Layout>
      <Seo title="Galleries" />
      <div className="row">
        {GalleryList.map(gallery => (
          <div key={gallery.title} className="col-12 col-md-6 col-xl-4 mb-3">
            <GalleryCover {...gallery} />
          </div>
        ))}
      </div>
    </Layout>
  );
}

const GalleryList: GalleryListItem[] = [
  {
    title: "Madagascar",
    route: Routes.Madagascar,
    images: [mad03, mad02, mad01],
  },
  {
    title: "Ethiopia",
    route: Routes.Ethiopia,
    images: [eth03, eth02, eth01],
  },
  {
    title: "Cuba",
    route: Routes.Cuba,
    images: [cub03, cub02, cub01],
  },
  {
    title: "Landscapes",
    route: Routes.Landscapes,
    images: [lan03, lan02, lan01],
  },
  {
    title: "Portraits",
    route: Routes.Portraits,
    images: [portI03, portI02, portI01],
  },
  {
    title: "Myanmar Portraits",
    route: Routes.MyanmarPortraits,
    images: [portII03, portII02, portII01],
  },
  {
    title: "Black & Whites",
    route: Routes.BlackAndWhites,
    images: [blk03, blk02, blk01],
  },
];
