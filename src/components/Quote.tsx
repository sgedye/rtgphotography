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
      style={{
        ["--border-color" as string]: "red",
      }}
    >
      <blockquote
        className={css`
          font-weight: 800;
          border-left: 0.375rem solid var(--border-color);
          padding-left: 1rem;
          margin-left: 1rem;
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
            `
          )}
        >
          - {author}
        </cite>
      )}
    </article>
  );
};
