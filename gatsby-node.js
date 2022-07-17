const path = require("path");

exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions;
  const galleryTemplate = path.resolve("./src/templates/gallery.tsx");

  const { data } = await graphql(`
    query {
      allGooglePhotosAlbum {
        nodes {
          title
          photos {
            file {
              childImageSharp {
                id
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, JPG]
                )
              }
            }
          }
        }
      }
    }
  `);

  data.allGooglePhotosAlbum.nodes.forEach(album => {
    createPage({
      path: `/galleries/${album.title}`,
      component: galleryTemplate,
      context: {
        album,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src"),
      },
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
  });
};
