export namespace Opengraph {
  export interface Media {
    url: string;
    width: number;
    height: number;
    alt: string;
    type: string;
    secureUrl: string;
  }

  export interface VideoActor {
    role: string;
    profile: string;
  }

  export interface Profile {
    firstName: string;
    lastName: string;
    username: string;
    gender: string;
  }

  export interface Book {
    authors: string[];
    isbn: string;
    releaseDate: string;
    tags: string[];
  }

  export interface Article {
    publishedTime: string;
    modifiedTime: string;
    expirationTime: string;
    authors: string[];
    section: string;
    tags: string[];
  }

  export interface Video {
    actors: VideoActor[];
    directors: string[];
    writers: string[];
    duration: number;
    releaseDate: string;
    tags: string[];
    series: string;
  }

  export interface Audio {
    url: string;
    secureUrl: string;
    audio: string;
    type: string;
  }

  export interface Props {
    url: string;
    type: string;
    title: string;
    description: string;
    siteName: string;
    locale: string;
    book: Book;
    video: Video;
    article: Article;
    profile: Profile;
    images: Media[];
    videos: Media[];
    audio: Media[];
    defaultImageHeight: number;
    defaultImageWidth: number;
    defaultOpenGraphVideoWidth: number;
    defaultOpenGraphVideoHeight: number;
  }
}

export namespace Metatag {
  interface Base {
    content: string;
    keyOverride?: string;
  }

  export interface HTML5Metatag extends Base {
    name: string;
    property?: undefined;
    httpEquiv?: undefined;
  }

  export interface RDFaMetatag extends Base {
    property: string;
    name?: string;
    httpEquiv?: undefined;
  }

  export interface HTTPEquivMetatag extends Base {
    name?: undefined;
    property?: undefined;
    httpEquiv:
      | "content-security-policy"
      | "content-type"
      | "default-style"
      | "x-ua-compatible"
      | "refresh";
  }

  export type Props = HTML5Metatag | RDFaMetatag | HTTPEquivMetatag;
}

export namespace Linktag {
  export interface Props {
    rel: string;
    href: string;
    sizes?: string;
    media?: string;
    type?: string;
    color?: string;
    keyOverride?: string;
    as?: string;
    crossOrigin?: string;
  }
}

export namespace Twitter {
  type CardType = "summary" | "summary_large_image" | "app" | "player";

  export interface Props {
    site: `@${string}`;
    handle: `@${string}`;
    cardType: CardType;
  }
}

export namespace Default {
  export type ImagePrevSize = "none" | "standard" | "large";
  export interface Robots {
    nosnippet: boolean;
    maxSnippet: number;
    maxImagePreview: ImagePrevSize;
    maxVideoPreview: number;
    noarchive: boolean;
    unavailableAfter: string;
    noimageindex: boolean;
    notranslate: boolean;
  }

  export interface Props {
    title: string;
    titleTemplate: string;
    defaultTitle: string;

    noindex: boolean;
    nofollow: boolean;
    robots: Robots;

    description: string;
    canonical: string;
    themeColor: string;

    metatag: Metatag.Props[];
    linktag: Linktag.Props[];

    twitter: Partial<Twitter.Props>;
    opengraph: Partial<Opengraph.Props>;
  }
}

export namespace Make {
  export type ImagePrevSize = "none" | "standard" | "large";
  export interface Robots {
    nosnippet: boolean;
    maxSnippet: number;
    maxImagePreview: ImagePrevSize;
    maxVideoPreview: number;
    noarchive: boolean;
    unavailableAfter: string;
    noimageindex: boolean;
    notranslate: boolean;
  }

  export interface Props {
    title: string;
    titleTemplate: string;
    defaultTitle: string;

    noindex: boolean;
    nofollow: boolean;
    robots: Robots;

    description: string;
    canonical: string;
    themeColor: string;

    metatag: Metatag.Props[];
    linktag: Linktag.Props[];

    twitter: Partial<Twitter.Props>;
    opengraph: Partial<Opengraph.Props>;
  }
}
