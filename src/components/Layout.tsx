/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { useStaticQuery, graphql } from "gatsby";

import { Footer, Header } from "~/components";

import "~/assets/styles/main.scss";

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}
export const Layout = ({ title, children }: LayoutProps): JSX.Element => {
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
      <main id="main" className={title === "home" ? "" : "container mt-5"}>
        {children}
      </main>
      <Footer />
    </>
  );
};
