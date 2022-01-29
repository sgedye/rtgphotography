import { css, cx } from "linaria";

import theme from "../assets/styles/exports.scss";

interface QuoteProps {
  quote: string;
  author?: string;
}

export const Quote = ({ quote, author }: QuoteProps): JSX.Element => {
  console.log(theme, "is undefined");
  return (
    <article
      className={cx(
        "mx-3 ps-3",
        css`
          border-left: 0.375rem solid red;
        `
      )}
    >
      <blockquote
        className={css`
          font-weight: 800;
        `}
      >
        {quote}
      </blockquote>
      {author && (
        <cite
          className={cx(
            "d-block text-end",
            css`
              margin-top: -1rem;
              margin-bottom: 1rem;
            `
          )}
        >
          - {author}
        </cite>
      )}
    </article>
  );
};
