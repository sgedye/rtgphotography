import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Routes } from "../../models/Routes";

import { Layout, Seo } from "../../components";
import { css, cx } from "linaria";

import mad01 from "../../images/galleries/madagascar/Madagascar001.jpg";
import mad02 from "../../images/galleries/madagascar/Madagascar002.jpg";
import mad03 from "../../images/galleries/madagascar/Madagascar003.jpg";

type GalleryListItem = {
  title: string;
  route: string;
  images: string[];
};

const GalleryCover = ({ title, route, images }: GalleryListItem) => {
  return (
    <div className="">
      <Link to={`${Routes.Galleries}${route}`}>
        {/* TODO - Have three images in images array and rotate on hover */}
        <figure className="position-relative figure">
          <img
            src={images[0]}
            alt=""
            className="figure-img img-fluid rounded"
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
                "text-white text-uppercase px-3 py-2",
                css`
                  border: 0.1875rem solid #ffffff;
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
    </div>
  );
};

export default function Index() {
  // TODO - Hit an API to return the galleryIndex images
  return (
    <Layout>
      <Seo title="Galleries" />
      <div className="row">
        {GalleryList.map(gallery => (
          <div key={gallery.title} className="col-12 col-md-6 col-xl-4 mb-3">
            <GalleryCover {...gallery} />
          </div>
        ))}
        {/* <div className="col-12 col-md-4 mb-3">
          <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            className="img-fluid"
          />
        </div> */}
      </div>
    </Layout>
  );
}

const GalleryList: GalleryListItem[] = [
  {
    title: "Madagascar",
    route: Routes.Madagascar,
    images: [mad01, mad02],
  },
  {
    title: "Ethiopia",
    route: Routes.Ethiopia,
    images: [mad02],
  },
  {
    title: "Cuba",
    route: Routes.Cuba,
    images: [mad03, mad02],
  },
  {
    title: "Landscapes",
    route: Routes.Landscapes,
    images: [mad01, mad02],
  },
  {
    title: "Portraits",
    route: Routes.Portraits,
    images: [mad03],
  },
  {
    title: "Myanmar Portraits",
    route: Routes.MyanmarPortraits,
    images: [mad02],
  },
  {
    title: "Black & Whites",
    route: Routes.BlackAndWhites,
    images: [mad02],
  },
];
