import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { Layout, Quote, Seo } from "../components";

export default function About() {
  return (
    <Layout>
      <Seo title="About" />
      <div className="row">
        <div className="col-12 col-md-8 mb-3">
          <h1 className="mb-3">RTG - The man behind the lens</h1>
          <p>
            Richard T. Gedye (RTG) was born in the outer suburbs of Melbourne,
            Australia and has been an avid photographer since he received his
            first camera for his 13th birthday. He describes the sensation of
            peering through the viewfinder and pushing the button; the feeling
            of getting the picture he wanted. By the age of 19, he had built a
            darkroom and had started developing and printing his own photos,
            having an amazing time making 'every mistake possible'.
          </p>
          <p>
            Art school and drawing classes helped him to differentiate between
            just looking and really seeing what is happening in any given
            scenario, which has been invaluable in helping him take beautiful
            photographs. During this time, RTG supported himself by
            photographing; weddings, theatre troupes, dance companies as well as
            some fashion photography. However, due to the repetitive nature of
            the work and the lack of artistic freedom he was given, he shifted
            his focus away from these styles of photography.
          </p>
          <p>
            Although RTG identifies himself as an <i>art photographer</i>
            rather than a <i>travel photographer</i>, many of his photos are
            taken on foreign lands, and he likes that:
          </p>
          <Quote
            quote="Photography forces you to be aware of your surroundings and facilitates an interaction between you and whoever you want to photograph."
            author="RTG"
          />
          <p>
            RTG's passion was fuelled by the desperate situation he encountered
            in Cambodia in 1997 and he felt compelled to photograph it. Since
            then, he has continued travelling and photographing people and
            landscapes from other countries such as; Madagascar, Myanmar
            (Burma), Ethiopia and Cuba.
          </p>
        </div>
        <div className="col-12 col-md-4 mx-auto mb-3">
          <StaticImage
            src="../images/gfx/the-artist.png"
            width={300}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="The artist"
            className="img-fluid"
          />
        </div>
      </div>
    </Layout>
  );
}
