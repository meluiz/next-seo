interface Base {
  content: string;
  keyOverride?: string;
}

export declare interface HTML5Metatag extends Base {
  name: string;
  property?: undefined;
  httpEquiv?: undefined;
}

export declare interface RDFaMetatag extends Base {
  property: string;
  name?: string;
  httpEquiv?: undefined;
}

export declare interface HTTPEquivMetatag extends Base {
  name?: undefined;
  property?: undefined;
  httpEquiv:
    | "content-security-policy"
    | "content-type"
    | "default-style"
    | "x-ua-compatible"
    | "refresh";
}

export declare type MetatagProps =
  | HTML5Metatag
  | RDFaMetatag
  | HTTPEquivMetatag;
