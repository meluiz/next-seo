type CardType = "summary" | "summary_large_image" | "app" | "player";

export declare interface TwitterProps {
  site: string;
  handle: string;
  cardType: CardType;
}
