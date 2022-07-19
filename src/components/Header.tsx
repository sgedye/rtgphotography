import { Link } from "gatsby";
import { cx, css } from "linaria";

import { theme } from "~/theme";
import { Routes } from "~/models";

import RtgLogo from "~/content/branding/logo.svg";

export const Header = ({ siteTitle }: { siteTitle: string }) => (
  <header
    id="header"
    className="container-fluid bg-primary py-3"
    style={{
      borderBottom: "1px solid #0000ff",
      boxShadow: `
        0 0 8px 0 #333,
        inset 0 4px 6px 0 rgb(255 255 255 / 25%),
        inset 0 -4px 6px 0 rgb(255 255 255 / 25%)`,
    }}
  >
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark px-0">
        <h1 className="mb-0">
          <Link
            to="/"
            className={cx(
              "d-flex align-items-center navbar-brand py-0",
              css`
                text-decoration: "none";
                &:focus-visible {
                  outline-offset: 0.5rem;
                }
              `
            )}
          >
            <RtgLogo width={80} height={80} />
            <span className="d-none d-sm-block ms-3">{siteTitle}</span>
          </Link>
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mt-3 mt-lg-0 gap-lg-3">
            <li className="nav-item">
              <Link
                className="lead nav-link"
                aria-current="page"
                to={Routes.Home}
                activeStyle={{ color: theme.white }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="lead nav-link"
                to={Routes.About}
                activeStyle={{ color: theme.white }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="lead nav-link"
                to={Routes.Galleries}
                activeStyle={{ color: theme.white }}
              >
                Galleries
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
);
