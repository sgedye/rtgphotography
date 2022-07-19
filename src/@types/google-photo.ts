export interface AllGooglePhotosData {
  allGooglePhotosAlbum: AllGooglePhotosAlbum;
}

export interface GalleryProps {
  album: Album;
}

interface AllGooglePhotosAlbum {
  nodes: Node[];
}

interface Album {
  title: string;
  photos: Photo[];
}

interface Node {
  id: string;
  title: string;
  cover: Photo;
}

export interface Photo {
  file: File;
}

interface File {
  childImageSharp: ChildImageSharp;
}

interface ChildImageSharp {
  id: string;
  gatsbyImageData: GatsbyImageData;
}

interface GatsbyImageData {
  layout: string;
  backgroundColor: string;
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
