import type { LinktagProps } from "./linktag";
import type { MetatagProps } from "./metatag";
import type { OpengraphProps } from "./opengraph";
import type { TwitterProps } from "./twitter";

export declare type ImagePrevSize = "none" | "standard" | "large";
export declare interface Robots {
  nosnippet?: boolean;
  maxSnippet?: number;
  maxImagePreview?: ImagePrevSize;
  maxVideoPreview?: number;
  noarchive?: boolean;
  unavailableAfter?: string;
  noimageindex?: boolean;
  notranslate?: boolean;
}

export declare interface DefaultProps {
  title?: string;
  titleTemplate?: string;
  defaultTitle?: string;

  noindex?: boolean;
  nofollow?: boolean;
  robots?: Robots;

  description?: string;
  canonical?: string;
  themeColor?: string;

  metatag?: MetatagProps[];
  linktag?: LinktagProps[];

  twitter?: TwitterProps;
  opengraph?: OpengraphProps;
}
