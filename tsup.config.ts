import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["lib/index.tsx"],
  minify: true,
  splitting: false,
  sourcemap: true,
  clean: false,
  outDir: "./",
  dts: {
    entry: [
      "lib/types/default.d.ts",
      "lib/types/linktag.d.ts",
      "lib/types/make.d.ts",
      "lib/types/metatag.d.ts",
      "lib/types/opengraph.d.ts",
      "lib/types/twitter.d.ts"
    ]
  }
});
