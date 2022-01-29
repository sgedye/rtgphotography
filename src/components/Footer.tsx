export const Footer = () => {
  return (
    <footer id="footer" className="container-fluid bg-secondary py-3">
      <div className="container text-white">
        © {new Date().getFullYear()}, Built with{" "}
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
