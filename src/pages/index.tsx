import { cx } from "linaria";
import { Layout, Seo } from "../components";

import slide1 from "../images/galleries/madagascar/Madagascar001.jpg";
import slide2 from "../images/galleries/madagascar/Madagascar002.jpg";
import slide3 from "../images/galleries/madagascar/Madagascar003.jpg";
import slide4 from "../images/galleries/madagascar/Madagascar004.jpg";
import slide5 from "../images/galleries/madagascar/Madagascar005.jpg";

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
          {slides.map(({ slide, id }) => (
            <button
              key={id}
              type="button"
              data-bs-target="#carousel-homepage"
              data-bs-slide-to={`${id}`}
              className={id === 0 ? "active" : ""}
              aria-current="true"
              aria-label={`Slide ${id + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {/* TODO - Create mobile versions of these images and use a picture element to choose */}
          {slides.map(({ slide, id }) => (
            <div key={id} className={cx("carousel-item", id === 0 && "active")}>
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

const slides = [
  {
    id: 0,
    slide: slide1,
  },
  {
    id: 1,
    slide: slide2,
  },
  {
    id: 2,
    slide: slide3,
  },
  {
    id: 3,
    slide: slide4,
  },
  {
    id: 4,
    slide: slide5,
  },
];
