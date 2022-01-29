import { Link } from "gatsby";
import { cx, css } from "linaria";

import { Routes } from "../models/Routes";

export const Header = ({ siteTitle }: { siteTitle: string }) => (
  <header
    id="header"
    className="container-fluid bg-primary py-3"
    style={{ borderBottom: "1px solid #0000ff" }}
  >
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark px-0">
        <h1>
          <Link
            to="/"
            className={cx(
              "navbar-brand",
              css`
                text-decoration: "none";
              `
            )}
          >
            {siteTitle}
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
                className="nav-link"
                aria-current="page"
                to={Routes.Home}
                activeStyle={{ color: "#ffffff" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={Routes.About}
                activeStyle={{ color: "#ffffff" }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={Routes.Galleries}
                activeStyle={{ color: "#ffffff" }}
              >
                Galleries
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={Routes.Contact}
                activeStyle={{ color: "#ffffff" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
);
