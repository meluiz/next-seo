import type { Robots } from "./default";
import type { MetatagProps } from "./metatag";
import type { OpengraphProps } from "./opengraph";
import type { LinktagProps } from "./linktag";
import type { TwitterProps } from "./twitter";

export declare interface MakeProps {
  title: string;
  titleTemplate: string;
  defaultTitle: string;

  noindex: boolean;
  nofollow: boolean;
  robots: Robots;

  description: string;
  canonical: string;
  themeColor: string;

  metatag: MetatagProps[];
  linktag: LinktagProps[];

  twitter: Partial<TwitterProps>;
  opengraph: Partial<OpengraphProps>;
}
