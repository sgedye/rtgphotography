import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Layout, Loading, Seo } from "../../components";
import type { GalleryData } from "./types";

import { Routes } from "../../models/Routes";

export default function Magagascar({ data }: { data: GalleryData }) {
  return (
    <Layout>
      <Seo title="Magagascar Gallery" />
      <Link className="btn btn-outline-primary mb-4" to={Routes.Galleries}>
        &larr; Back to galleries
      </Link>
      {(() => {
        if (data?.galleryImages?.edges?.length) {
          return (
            <div className="row">
              {data.galleryImages.edges.map(edge => {
                const image = getImage(
                  edge.node.childImageSharp.gatsbyImageData
                );
                if (image) {
                  return (
                    <div
                      key={edge.node.id}
                      className="col-12 col-md-6 col-xl-4 mb-3"
                    >
                      <GatsbyImage
                        image={image}
                        alt={edge.node.base.split(".")[0]}
                      />
                    </div>
                  );
                }
              })}
            </div>
          );
        } else {
          return <Loading />;
        }
      })()}
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    galleryImages: allFile(
      filter: {
        extension: { regex: "/jpg|png|jpeg/" }
        relativeDirectory: { eq: "galleries/madagascar" }
      }
      sort: { fields: base, order: ASC }
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, JPG])
          }
        }
      }
    }
  }
`;
