import { css, cx } from "linaria";
import RtgLogo from "../images/branding/logo.svg";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className={cx(
        "container-fluid py-3",
        css`
          border-top: 1px solid black;
          background-color: #111111dd;
        `
      )}
    >
      <div className="container text-white">
        <ul className="list-unstyled d-flex flex-column flex-sm-row align-items-center justify-content-between mb-0">
          <li className="">© {new Date().getFullYear()}</li>
          <li className="">
            <RtgLogo width={35} height={35} className="mb-2 mb-sm-0 me-2" />
            <span>RTG Photography</span>
          </li>
        </ul>
      </div>
    </footer>
  );
};
