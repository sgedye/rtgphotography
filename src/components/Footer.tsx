import { css, cx } from "linaria";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className={cx(
        "container-fluid py-3",
        css`
          border-top: 1px solid black;
          background-color: #555555;
        `
      )}
    >
      <div className="container text-white">
        © {new Date().getFullYear()} - RTG Photography - built with{" "}
        <a
          href="https://www.gatsbyjs.com"
          className="text-reset text-underline"
        >
          Gatsby
        </a>
      </div>
    </footer>
  );
};
