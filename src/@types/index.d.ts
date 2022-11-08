declare module "*.jpg";
declare module "*.png";
declare module "*.webp";

declare module "*.svg" {
  const ReactComponent: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module "*.svg?url" {
  const value: string;
  export default value;
}

declare module "@fancyapps/ui";