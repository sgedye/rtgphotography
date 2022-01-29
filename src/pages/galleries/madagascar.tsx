import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { Layout, Seo } from "../../components";

import mad01 from "../../assets/images/galleries/madagascar/Madagascar001.jpg";
import { Routes } from "../../models/Routes";

export default function Magagascar() {
  return (
    <Layout>
      <Seo title="Magagascar Gallery" />
      <Link className="btn btn-outline-primary mb-4" to={Routes.Galleries}>
        &larr; Back to galleries
      </Link>
      <div className="row">
        {loop.map(x => (
          <div key={x} className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3">
            {x % 3 ? (
              <img src={mad01} alt="test" className="img-fluid" />
            ) : (
              <StaticImage
                src="../images/gatsby-astronaut.png"
                width={300}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="A Gatsby astronaut"
                className="img-fluid"
              />
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
}

const loop = [1, 2, 3, 4, 5, 6, 7];
