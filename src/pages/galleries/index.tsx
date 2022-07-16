import { graphql, Link } from "gatsby";
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from "gatsby-plugin-image";
import { css, cx } from "linaria";

import { theme } from "~/theme";
import { Layout, Loading, Seo } from "~/components";

import type { AllGooglePhotosData } from "~/@types/google-photo";

import { Routes } from "~/models";

// Cover Images
import blk01 from "~/content/gallery-covers/black-and-white-1.jpg";
import blk02 from "~/content/gallery-covers/black-and-white-2.jpg";
import rtg01 from "~/content/gallery-covers/rtg-01.jpg";
import rtg02 from "~/content/gallery-covers/rtg-02.jpg";
import rtg03 from "~/content/gallery-covers/rtg-03.jpg";
import rtg04 from "~/content/gallery-covers/rtg-04.jpg";
import rtg05 from "~/content/gallery-covers/rtg-05.jpg";
import rtg06 from "~/content/gallery-covers/rtg-06.jpg";
import rtg07 from "~/content/gallery-covers/rtg-07.jpg";
import rtg08 from "~/content/gallery-covers/rtg-08.jpg";
import rtg09 from "~/content/gallery-covers/rtg-09.jpg";
import rtg10 from "~/content/gallery-covers/rtg-10.jpg";
import rtg11 from "~/content/gallery-covers/rtg-11.jpg";
import rtg12 from "~/content/gallery-covers/rtg-12.jpg";

export type GalleryListItem = {
  title: string;
  slug: string;
  coverImage: IGatsbyImageData;
};

const images = [
  rtg01,
  rtg02,
  rtg03,
  rtg04,
  rtg05,
  rtg06,
  rtg07,
  rtg08,
  rtg09,
  rtg10,
  rtg11,
  rtg12,
];

export const GalleryCover = ({ title, slug, coverImage }: GalleryListItem) => {
  const obscuredImageOne = images[Math.floor(Math.random() * images.length)];
  const obscuredImageTwo = images[Math.floor(Math.random() * images.length)];
  return (
    <Link to={`${Routes.Galleries}/${slug}`}>
      <figure
        className={cx(
          "w-100 position-relative figure",
          css`
            & > div {
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
              & > div {
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
        <div>
          <img
            src={title === "black-and-white" ? blk01 : obscuredImageOne}
            alt=""
            width={450}
            height={300}
            className="img-fluid"
          />
        </div>
        <div>
          <img
            src={title === "black-and-white" ? blk02 : obscuredImageTwo}
            alt=""
            width={450}
            height={300}
            className="img-fluid"
          />
        </div>
        <GatsbyImage
          image={coverImage}
          alt={`${title} gallery`}
          className="img-fluid"
        />

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

export default function Index({ data }: { data: AllGooglePhotosData }) {
  return (
    <Layout>
      <Seo title="Galleries" />
      <h1 className="text-uppercase text-center mb-5">Galleries</h1>
      <div className="row">
        {data.allGooglePhotosAlbum.nodes.map(({ id, title: slug, cover }) => {
          const title = slug = "black-and-whites" ? "black & whites" : slug.replace(/-/g, " ");
          const coverImage = getImage(cover.file as ImageDataLike);
          return coverImage ? (
            <div key={id} className="col-12 col-md-6 col-xl-4 mb-3">
              <GalleryCover
                title={title}
                slug={slug}
                coverImage={coverImage}
              />
            </div>
          ) : null;
        })}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allGooglePhotosAlbum {
      nodes {
        id
        title
        cover {
          file {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, JPG])
            }
          }
        }
      }
    }
  }
`;
