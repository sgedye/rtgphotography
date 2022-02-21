import { Link } from "gatsby";
import { cx, css } from "linaria";

import { theme } from "~/theme";
import { Routes } from "~/models";

import RtgLogo from "~/images/branding/logo.svg";

export const Header = ({ siteTitle }: { siteTitle: string }) => (
  <header
    id="header"
    className="container-fluid bg-primary py-3"
    style={{ borderBottom: "1px solid #0000ff" }}
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
