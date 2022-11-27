import { Link } from "gatsby";
import ReactGallery from "react-photo-gallery";

import { Fancybox, Layout, Seo } from "~/components";

import type { GalleryProps } from "~/@types/google-photo";
import { Routes } from "~/models";

export default function Gallery({
  pageContext,
}: {
  pageContext: GalleryProps;
}) {
  const { photos, title } = pageContext.album;
  const titleWithSpaces = title.replace(/-/g, " ");
  const reactPhotos = photos.map(({ file }) => {
    const { height, images, width } = file.childImageSharp.gatsbyImageData;

    return {
      src: images.fallback.src,
      srcSet: images.sources[0].srcSet,
      sizes: images.sources[0].sizes,
      width,
      height,
      alt: "r-t-g photo",
    };
  });

  return (
    <Layout>
      <Seo title={`${titleWithSpaces} gallery`} />
      <div className="position-relative mb-5">
        <Link
          to={Routes.Galleries}
          className="position-absolute btn btn-outline-primary"
        >
          <span className="d-md-none">&larr;</span>
          <span className="d-block d-md-none visually-hidden">Galleries</span>
          <span className="d-none d-md-block">&larr;&nbsp;Galleries</span>
        </Link>
        <h1 className="text-center text-uppercase">{titleWithSpaces}</h1>
      </div>

      <Fancybox options={{ infinite: true }}>
        <ReactGallery photos={reactPhotos} direction="column" margin={8} />
      </Fancybox>
    </Layout>
  );
}
