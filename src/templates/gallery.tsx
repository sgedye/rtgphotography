import { Link } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import { css, cx } from "linaria";

import { Layout, Loading, Seo } from "~/components";

import type { GalleryProps } from "~/@types/google-photo";
import { Routes } from "~/models";

export default function Gallery({
  pageContext,
}: {
  pageContext: GalleryProps;
}) {
  const { photos, title } = pageContext.album;
  return (
    <Layout>
      <Seo title={`${title} gallery`} />
      <div className="position-relative mb-5">
        <Link
          to={Routes.Galleries}
          className="position-absolute btn btn-outline-primary"
        >
          <span className="d-md-none">&larr;</span>
          <span className="d-block d-md-none visually-hidden">Galleries</span>
          <span className="d-none d-md-block">&larr;&nbsp;Galleries</span>
        </Link>
        <h1 className="text-center text-uppercase">{title}</h1>
      </div>
      <div className="row">
        {photos.map(({ file }, idx) => {
          const image = getImage(file as ImageDataLike);
          return image ? (
            <div key={idx} className="col-12 col-md-6 col-xl-4 mb-3">
              <GatsbyImage image={image} alt="test cover" />
            </div>
          ) : null;
        })}
      </div>
    </Layout>
  );
}
