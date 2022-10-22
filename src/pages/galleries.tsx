import { graphql } from "gatsby";
import { getImage, ImageDataLike } from "gatsby-plugin-image";

import { GalleryAlbum, Layout, Seo } from "~/components";

import type { AllGooglePhotosData } from "~/@types/google-photo";

export default function Galleries({ data }: { data: AllGooglePhotosData }) {
  return (
    <Layout>
      <Seo title="Galleries" />
      <h1 className="text-uppercase text-center mb-5">Galleries</h1>
      <div className="row">
        {data.allGooglePhotosAlbum.nodes.map(({ id, title: slug, cover }) => {
          const coverImage = getImage(cover?.file as ImageDataLike);
          return coverImage ? (
            <div key={id} className="col-12 col-md-6 col-xl-4 mb-3">
              <GalleryAlbum slug={slug} coverImage={coverImage} />
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
