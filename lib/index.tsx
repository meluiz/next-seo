import type { DefaultProps, Robots } from "./types/default";
import type { LinktagProps } from "./types/linktag";
import type { MakeProps } from "./types/make";
import type { MetatagProps } from "./types/metatag";
import type { OpengraphMedia } from "./types/opengraph";

interface ElementChildren {
  tag: "title";
  children: string;
}

interface ElementProps {
  tag: "meta" | "link";
  props: Record<string, undefined | string | MetatagProps | LinktagProps>;
}

type Element = ElementChildren | ElementProps;

export default class Seo {
  private base: Partial<DefaultProps>;
  private seo: Partial<MakeProps>;

  constructor() {
    this.base = {};
    this.seo = {};
  }

  private buildMediaType(
    type: "image" | "video" | "audio",
    media: Array<OpengraphMedia> = [],
    base?: Record<"width" | "height", number | undefined>
  ) {
    return media.reduce(function (elements, medium) {
      elements.push({
        tag: "meta",
        props: { property: `og:${type}`, content: medium.url }
      });

      if (medium.alt) {
        elements.push({
          tag: "meta",
          props: { property: `og:${type}:alt`, content: medium.alt }
        });
      }

      if (medium.secureUrl) {
        elements.push({
          tag: "meta",
          props: {
            property: `og:${type}:secure_url`,
            content: medium.secureUrl
          }
        });
      }

      if (medium.type) {
        elements.push({
          tag: "meta",
          props: {
            property: `og:${type}:type`,
            content: medium.type.toString()
          }
        });
      }

      if (medium.width) {
        elements.push({
          tag: "meta",
          props: {
            property: `og:${type}:width`,
            content: medium.width.toString()
          }
        });
      } else if (base && base.width) {
        elements.push({
          tag: "meta",
          props: {
            property: `og:${type}:width`,
            content: base.width.toString()
          }
        });
      }

      if (medium.height) {
        elements.push({
          tag: "meta",
          props: {
            property: `og:${type}:height`,
            content: medium.height.toString()
          }
        });
      } else if (base && base.height) {
        elements.push({
          tag: "meta",
          props: {
            property: `og:${type}:height`,
            content: base.height.toString()
          }
        });
      }

      return elements;
    }, [] as Array<Element>);
  }

  private build() {
    const elements = [] as Array<Element>;
    const config = this.seo;

    let title = config.defaultTitle || "";
    if (config.title) {
      title = config.title;
      if (config.titleTemplate) {
        title = config.titleTemplate.replace(/%s/g, () => title);
      }
    }

    elements.push({ tag: "meta", props: { charSet: "utf-8" } });
    elements.push({ tag: "title", children: title });

    const noindex = config.noindex;
    const nofollow = config.nofollow;

    let robots = "";
    const robotsProps = config.robots;
    if (robotsProps) {
      const params = [] as string[];
      for (const key in robotsProps) {
        let prop = key.replace(/([A-Z])+/g, s => `-${s}`.toLowerCase());
        if (prop.includes("unavailable")) prop = prop.replace(/-/g, "_");
        params.push(`${prop}:${robotsProps[key as keyof Robots]}`);
      }

      robots = `,${params.join(", ")}`;
    }

    elements.push({
      tag: "meta",
      props: {
        name: "robots",
        content: `${noindex ? "noindex" : "index"},${
          nofollow ? "nofollow" : "follow"
        }${robots}`
      }
    });

    const description = config.description;
    if (description) {
      elements.push({
        tag: "meta",
        props: { name: "description", content: description }
      });
    }

    const themeColor = config.themeColor;
    if (themeColor) {
      elements.push({
        tag: "meta",
        props: { name: "theme-color", content: themeColor }
      });
    }

    const twitter = config.twitter;
    if (twitter) {
      if (twitter.cardType) {
        elements.push({
          tag: "meta",
          props: { name: "twitter:card", content: twitter.cardType }
        });
      }

      if (twitter.site) {
        elements.push({
          tag: "meta",
          props: { name: "twitter:site", content: twitter.site }
        });
      }

      if (twitter.handle) {
        elements.push({
          tag: "meta",
          props: { name: "twitter:creator", content: twitter.handle }
        });
      }
    }

    const opengraph = config.opengraph;
    if (opengraph) {
      if (opengraph.title) {
        elements.push({
          tag: "meta",
          props: { property: "og:title", content: opengraph.title }
        });
      }

      if (opengraph.description) {
        elements.push({
          tag: "meta",
          props: { property: "og:description", content: opengraph.description }
        });
      }

      const canonical = config.canonical;
      if (opengraph.url || canonical) {
        elements.push({
          tag: "meta",
          props: {
            property: "og:url",
            content: opengraph.url || canonical || ""
          }
        });
      }

      if (opengraph.type) {
        const type = opengraph.type.toLowerCase();

        elements.push({
          tag: "meta",
          props: { property: "og:type", content: type }
        });

        const profile = opengraph.profile;
        const book = opengraph.book;
        const article = opengraph.article;
        const video = opengraph.video;

        if (type === "profile" && profile) {
          if (profile.firstName) {
            elements.push({
              tag: "meta",
              props: {
                property: "profile:first_name",
                content: profile.firstName
              }
            });
          }

          if (profile.lastName) {
            elements.push({
              tag: "meta",
              props: {
                property: "profile:last_name",
                content: profile.lastName
              }
            });
          }

          if (profile.username) {
            elements.push({
              tag: "meta",
              props: { property: "profile:username", content: profile.username }
            });
          }

          if (profile.gender) {
            elements.push({
              tag: "meta",
              props: { property: "profile:gender", content: profile.gender }
            });
          }
        } else if (type === "book" && book) {
          if (book.authors && book.authors.length) {
            for (const author of book.authors) {
              elements.push({
                tag: "meta",
                props: { property: "book:author", content: author }
              });
            }
          }

          if (book.isbn) {
            elements.push({
              tag: "meta",
              props: { property: "book:isbn", content: book.isbn }
            });
          }

          if (book.releaseDate) {
            elements.push({
              tag: "meta",
              props: { property: "book:releaseDate", content: book.releaseDate }
            });
          }

          if (book.tags && book.tags) {
            for (const tag of book.tags) {
              elements.push({
                tag: "meta",
                props: { property: "book:tag", content: tag }
              });
            }
          }
        } else if (type === "article" && article) {
          if (article.publishedTime) {
            elements.push({
              tag: "meta",
              props: {
                property: "article:published_time",
                content: article.publishedTime
              }
            });
          }

          if (article.modifiedTime) {
            elements.push({
              tag: "meta",
              props: {
                property: "article:modified_time",
                content: article.modifiedTime
              }
            });
          }

          if (article.expirationTime) {
            elements.push({
              tag: "meta",
              props: {
                property: "article:expiration_time",
                content: article.expirationTime
              }
            });
          }

          if (article.authors && article.authors.length) {
            for (const author of article.authors) {
              elements.push({
                tag: "meta",
                props: {
                  property: "article:author",
                  content: author
                }
              });
            }
          }

          if (article.section) {
            elements.push({
              tag: "meta",
              props: {
                property: "article:section",
                content: article.section
              }
            });
          }

          if (article.tags && article.tags.length) {
            for (const tag of article.tags) {
              elements.push({
                tag: "meta",
                props: {
                  property: "article:tag",
                  content: tag
                }
              });
            }
          }
        } else if (
          (type === "video.movie" ||
            type === "video.episode" ||
            type === "video.tv_show" ||
            type === "video.other") &&
          video
        ) {
          if (video.actors && video.actors.length) {
            for (const actor of video.actors) {
              if (actor.profile) {
                elements.push({
                  tag: "meta",
                  props: { property: "video:actor", content: actor.profile }
                });
              }

              if (actor.role) {
                elements.push({
                  tag: "meta",
                  props: { property: "video:actor:role", content: actor.role }
                });
              }
            }
          }

          if (video.directors && video.directors.length) {
            for (const director of video.directors) {
              elements.push({
                tag: "meta",
                props: { property: "video:director", content: director }
              });
            }
          }

          if (video.writers && video.writers.length) {
            for (const writer of video.writers) {
              elements.push({
                tag: "meta",
                props: { property: "video:writer", content: writer }
              });
            }
          }

          if (video.duration) {
            elements.push({
              tag: "meta",
              props: {
                property: "video:duration",
                content: video.duration.toString()
              }
            });
          }

          if (video.releaseDate) {
            elements.push({
              tag: "meta",
              props: {
                property: "video:release_date",
                content: video.releaseDate
              }
            });
          }

          if (video.tags && video.tags.length) {
            for (const tag of video.tags) {
              elements.push({
                tag: "meta",
                props: { property: "video:tag", content: tag }
              });
            }
          }

          if (video.series) {
            elements.push({
              tag: "meta",
              props: { property: "video:series", content: video.series }
            });
          }
        }
      }

      if (opengraph.images && opengraph.images.length) {
        elements.push(
          ...this.buildMediaType("image", opengraph.images, {
            width: opengraph.defaultImageWidth,
            height: opengraph.defaultImageHeight
          })
        );
      }

      if (opengraph.videos && opengraph.videos.length) {
        elements.push(
          ...this.buildMediaType("video", opengraph.videos, {
            width: opengraph.defaultOpenGraphVideoWidth,
            height: opengraph.defaultOpenGraphVideoHeight
          })
        );
      }

      if (opengraph.audio) {
        elements.push(...this.buildMediaType("audio", opengraph.audio));
      }

      if (opengraph.locale) {
        elements.push({
          tag: "meta",
          props: { property: "og:locale", content: opengraph.locale }
        });
      }

      if (opengraph.siteName) {
        elements.push({
          tag: "meta",
          props: { property: "og:site_name", content: opengraph.siteName }
        });
      }
    }

    if (config.canonical) {
      elements.push({
        tag: "link",
        props: { rel: "canonical", href: config.canonical }
      });
    }

    if (config.metatag && config.metatag.length) {
      const hasViewport = config.metatag.some(
        tag => tag.name && tag.name === "viewport"
      );

      if (!hasViewport) {
        elements.push({
          tag: "meta",
          props: {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
          }
        });
      }

      for (const meta of config.metatag) {
        elements.push({
          tag: "meta",
          props: { ...meta }
        });
      }
    } else {
      elements.push({
        tag: "meta",
        props: {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        }
      });
    }

    if (config.linktag && config.linktag.length) {
      for (const link of config.linktag) {
        elements.push({
          tag: "link",
          props: { ...link }
        });
      }
    }

    return elements;
  }

  public default(config: Partial<DefaultProps>) {
    this.base = config;
    if (!Object.keys(this.seo).length) {
      this.seo = config;
    }
  }

  public make(props: Partial<MakeProps>) {
    this.seo = { ...this.base, ...props };
  }

  public render() {
    const build = this.build();
    return build.map((el, index) => {
      if (el.tag === "meta") {
        return (
          <meta key={`${el.props.name || "meta"}:${index}`} {...el.props} />
        );
      }

      if (el.tag === "link") {
        return <link key={`${el.props.name}:${index}`} {...el.props} />;
      }

      if (el.tag === "title") {
        return <title key={`${el.tag}:${index}`}>{el.children}</title>;
      }

      return null;
    });
  }
}

export const seo = new Seo();
