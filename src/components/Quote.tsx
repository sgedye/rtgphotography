import { css, cx } from "linaria";

import { theme } from "~/theme";

interface QuoteProps {
  quote: string;
  author?: string;
}

export const Quote = ({ quote, author }: QuoteProps): JSX.Element => {
  return (
    <article
      className={cx(
        "mx-3 mb-3 ps-3",
        css`
          color: ${theme.secondary};
          border-left: 0.375rem solid ${theme.secondary};
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
              margin: -2rem 2rem 0 0;
            `
          )}
        >
          - {author}
        </cite>
      )}
    </article>
  );
};
