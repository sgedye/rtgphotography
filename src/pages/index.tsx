import { cx } from "linaria";
import { Layout, Seo } from "../components";

import slide1 from "../assets/images/galleries/madagascar/Madagascar001.jpg";
import slide2 from "../assets/images/galleries/madagascar/Madagascar002.jpg";
import slide3 from "../assets/images/galleries/madagascar/Madagascar003.jpg";
import slide4 from "../assets/images/galleries/madagascar/Madagascar004.jpg";
import slide5 from "../assets/images/galleries/madagascar/Madagascar005.jpg";

export default function Index() {
  return (
    <Layout title="home">
      <Seo title="Home" />

      <div
        id="carousel-homepage"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {slides.map((slide, idx) => (
            <button
              key={idx}
              type="button"
              data-bs-target="#carousel-homepage"
              data-bs-slide-to={`${idx}`}
              className="active"
              aria-current="true"
              aria-label={`Slide ${idx + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={cx("carousel-item", idx === 0 && "active")}
            >
              <img src={slide} className="d-block w-100" alt="..." />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel-homepage"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel-homepage"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Layout>
  );
}

const slides = [slide1, slide2, slide3, slide4, slide5];
