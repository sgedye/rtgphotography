import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Routes } from "../../models/Routes";

import { Layout, Seo } from "../../components";
import { css, cx } from "linaria";

import mad01 from "../../assets/images/galleries/madagascar/Madagascar001.jpg";
import mad02 from "../../assets/images/galleries/madagascar/Madagascar002.jpg";
import mad03 from "../../assets/images/galleries/madagascar/Madagascar003.jpg";

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
          <div
            key={gallery.title}
            className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3"
          >
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
    title: "tet",
    route: Routes.Ethiopia,
    images: [mad02],
  },
  {
    title: "Madassssgascar",
    route: Routes.Ethiopia,
    images: [mad03, mad02],
  },
  {
    title: "Madaasdfgascar",
    route: Routes.Ethiopia,
    images: [mad01, mad02],
  },
  {
    title: "asdff",
    route: Routes.Ethiopia,
    images: [mad03],
  },
  {
    title: "Madagascar",
    route: Routes.Ethiopia,
    images: [mad02],
  },
];
