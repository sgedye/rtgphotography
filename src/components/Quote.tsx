import { css } from "linaria";

import theme from "../assets/styles/jsvariables.scss";

interface QuoteProps {
  quote: string;
  author?: string;
}

export const Quote = ({ quote, author }: QuoteProps): JSX.Element => {
  console.log(theme, "is undefined")
  return (
    <article style={{
      ["--border-color" as string]: "red",
    }}>
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
      {author && <p className="d-block text-end mt-n2">- {author}</p>}
    </article>
  );
};
