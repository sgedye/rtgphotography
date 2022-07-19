import { Layout } from "gatsby-plugin-image";

export interface GalleryData {
  galleryImages: GalleryImages;
}

interface GalleryImages {
  edges: Edge[];
}

interface Edge {
  node: Node;
}

interface Node {
  id: string;
  base: string;
  childImageSharp: ChildImageSharp;
}

interface ChildImageSharp {
  gatsbyImageData: GatsbyImageData;
}

interface GatsbyImageData {
  layout: Layout;
  placeholder: Placeholder;
  images: Images;
  width: number;
  height: number;
}

interface Images {
  fallback: Fallback;
  sources: Source[];
}

interface Source {
  srcSet: string;
  type: string;
  sizes: string;
}

interface Fallback {
  src: string;
  srcSet: string;
  sizes: string;
}

interface Placeholder {
  fallback: string;
}
