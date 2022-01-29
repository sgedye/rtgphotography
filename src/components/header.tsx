import { Link } from "gatsby";
import { cx, css } from "linaria";

import { Routes } from "../models/Routes";

export const Header = ({ siteTitle }: { siteTitle: string }) => (
  <header id="header" className="container-fluid bg-primary py-3 mb-5">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light px-0">
        <h1>
          <Link
            to="/"
            className={cx(
              "navbar-brand text-white",
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
                className="nav-link active"
                aria-current="page"
                to={Routes.Home}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={Routes.About}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={Routes.Galleries}>
                Galleries
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={Routes.Contact}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
);
