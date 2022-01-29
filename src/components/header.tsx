import { Link } from "gatsby";
import { cx, css } from "linaria";

export const Header = ({ siteTitle }: { siteTitle: string }) => (
  <header id="header" className="container-fluid bg-primary py-3 mb-5">
    <div className="container">
      <h1>
        <Link
          to="/"
          className={cx(
            "text-white",
            css`
              text-decoration: "none";
            `
          )}
          style={{}}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);
