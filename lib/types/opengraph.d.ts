export declare interface OpengraphMedia {
  url: string;
  width: number;
  height: number;
  alt: string;
  type: string;
  secureUrl: string;
}

export declare interface OpengraphVideoActor {
  role: string;
  profile: string;
}

export declare interface OpengraphProfile {
  firstName: string;
  lastName: string;
  username: string;
  gender: string;
}

export declare interface OpengraphBook {
  authors: string[];
  isbn: string;
  releaseDate: string;
  tags: string[];
}

export declare interface OpengraphArticle {
  publishedTime: string;
  modifiedTime: string;
  expirationTime: string;
  authors: string[];
  section: string;
  tags: string[];
}

export declare interface OpengraphVideo {
  actors: OpengraphVideoActor[];
  directors: string[];
  writers: string[];
  duration: number;
  releaseDate: string;
  tags: string[];
  series: string;
}

export declare interface OpengraphAudio {
  url: string;
  secureUrl: string;
  audio: string;
  type: string;
}

export declare interface OpengraphProps {
  url: string;
  type: string;
  title: string;
  description: string;
  siteName: string;
  locale: string;
  book: OpengraphBook;
  video: OpengraphVideo;
  article: OpengraphArticle;
  profile: OpengraphProfile;
  images: OpengraphMedia[];
  videos: OpengraphMedia[];
  audio: OpengraphMedia[];
  defaultImageHeight: number;
  defaultImageWidth: number;
  defaultOpenGraphVideoWidth: number;
  defaultOpenGraphVideoHeight: number;
}
