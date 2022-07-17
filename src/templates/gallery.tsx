import { Link } from "gatsby";

import { Layout, Masonary, Seo } from "~/components";

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
        <h1 className="text-center text-uppercase">
          {title.replace(/-/g, " ")}
        </h1>
      </div>
      <Masonary images={photos} itemsPerRow={3} />
    </Layout>
  );
}
