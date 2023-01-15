# Next SEO

Simple SEO managment that makes managing SEO easier in NextJS v13+ projects.

This project was based to [garmeeh/next-seo](https://github.com/garmeeh/next-seo).

## Install

With npm

```
npm install --save @meluiz/next-seo
```

Or yarn

```
yarn add --save @meluiz/next-seo
```

## Usage

```jsx
// app/head.jsx

import React from "react";
import { seo } from "@meluiz/next-seo";

export default function Head() {
  return <React.Fragment>{seo.render()}</React.Fragment>;
}
```

### Default SEO

```jsx
// app/head.jsx

import React from "react";
import { seo } from "@meluiz/next-seo";

export default function Head() {
  seo.default({ ...SEOProps });

  return <React.Fragment>{seo.render()}</React.Fragment>;
}
```

### Make SEO

```jsx
// app/page.jsx

import React from "react";
import { seo } from "@meluiz/next-seo";

export default function Page({ children }) {
  seo.make({ ...SEOProps });

  return <div>{children}</div>;
}
```

## SEO Props

The `default` and `make` method work with this bollow props:

### Global

| Property      | Type                       |
| ------------- | -------------------------- |
| title         | string                     |
| titleTemplate | string                     |
| noindex       | boolean                    |
| nofollow      | boolean                    |
| robots        | [Robots](#robots)          |
| description   | string                     |
| cononical     | string                     |
| themeColor    | string                     |
| metatag       | Array<[Metatag](#metatag)> |
| linktag       | Array<[Linktag](#linktag)> |
| twitter       | [Twitter](#twitter)        |
| opengraph     | [Opengraph]()              |

### Robots

| Property         | Type                          |
| ---------------- | ----------------------------- |
| nosnippet        | boolean                       |
| maxSnippet       | number                        |
| maxImagePreview  | "none", "standard" or "large" |
| maxVideoPreview  | number                        |
| noarchive        | boolean                       |
| unavailableAfter | string                        |
| noimageindex     | boolean                       |
| notranslate      | boolean                       |

### Book

| Property    | Type           |
| ----------- | -------------- |
| authors     | Array\<string> |
| isbn        | string         |
| releaseDate | string         |
| tags        | Array\<string> |

### Video Actor

| Property | Type   |
| -------- | ------ |
| role     | string |
| profile  | string |

### Video

| Property    | Type                               |
| ----------- | ---------------------------------- |
| actors      | Array\<[VideoActor](#video-actor)> |
| directors   | Array\<string>                     |
| writers     | Array\<string>                     |
| duration    | number                             |
| releaseDate | string                             |
| tags        | Array\<string>                     |
| series      | string                             |

### Article

| Property       | Type           |
| -------------- | -------------- |
| publishedTime  | string         |
| modifiedTime   | string         |
| expirationTime | string         |
| authors        | Array\<string> |
| section        | string         |
| tags           | Array\<string> |

### Profile

| Property  | Type   |
| --------- | ------ |
| firstName | string |
| lastName  | string |
| username  | string |
| gender    | string |

### Media

| Property                    | Type    |
| --------------------------- | ------- |
| url                         | string  |
| type                        | string  |
| title                       | string  |
| description                 | string  |
| siteName                    | string  |
| locale                      | string  |
| book                        | Book    |
| video                       | Video   |
| article                     | Article |
| profile                     | Profile |
| images                      | Media[] |
| videos                      | Media[] |
| audio                       | Media[] |
| defaultImageHeight          | number  |
| defaultImageWidth           | number  |
| defaultOpenGraphVideoWidth  | number  |
| defaultOpenGraphVideoHeight | number  |

### Metatag

| Property | Type |
| --- | --- |
| name | string |
| property | string |
| httpEquiv | "content-security-policy", "content-type", default-style", "x-ua-compatible" or "refresh" |
| content | string |
| keyOverride | string |

### Linktag

| Property    | Type   |
| ----------- | ------ |
| rel         | string |
| href        | string |
| sizes       | string |
| media       | string |
| type        | string |
| color       | string |
| keyOverride | string |
| as          | string |
| crossOrigin | string |

### Twitter

| Property | Type                                                |
| -------- | --------------------------------------------------- |
| site     | string                                              |
| handle   | string                                              |
| cardType | "summary", "summary_large_image", "app" or "player" |

### Opengraph

| Property                    | Type                   |
| --------------------------- | ---------------------- |
| url                         | string                 |
| type                        | string                 |
| title                       | string                 |
| description                 | string                 |
| siteName                    | string                 |
| locale                      | string                 |
| book                        | [Book](#book)          |
| video                       | [Video](#video)        |
| article                     | [Article](#article)    |
| profile                     | [Profile](#profile)    |
| images                      | Array<[Media](#media)> |
| videos                      | Array<[Media](#media)> |
| audio                       | Array<[Media](#media)> |
| defaultImageHeight          | number                 |
| defaultImageWidth           | number                 |
| defaultOpenGraphVideoWidth  | number                 |
| defaultOpenGraphVideoHeight | number                 |
