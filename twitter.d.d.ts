type CardType = "summary" | "summary_large_image" | "app" | "player";

declare interface TwitterProps {
  site?: string;
  handle?: string;
  cardType?: CardType;
}

export { TwitterProps };
