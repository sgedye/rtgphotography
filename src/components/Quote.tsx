import { css, cx } from "linaria";

import { theme } from "../theme";

interface QuoteProps {
  quote: string;
  author?: string;
}

export const Quote = ({ quote, author }: QuoteProps): JSX.Element => {
  return (
    <article
      className={cx(
        "mx-3 ps-3",
        css`
          border-left: 0.375rem solid ${theme.danger};
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
