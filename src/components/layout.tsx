/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { useStaticQuery, graphql } from "gatsby";

import { Footer, Header } from ".";

import "../assets/styles/main.scss";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || "RTG Photography"} />
      <main id="main" className="container">
        {children}
      </main>
      <Footer />
    </>
  );
};
