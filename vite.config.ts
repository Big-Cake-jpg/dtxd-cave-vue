import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VitePages from "vite-plugin-pages";
import ViteMarkdown from "vite-plugin-md";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import commonjs from "@rollup/plugin-commonjs";
import UnoCSS from "unocss/vite";

export default defineConfig({
  plugins: [
    commonjs(),
    vue({
      include: [/\.vue$/, /\.md$/],
      template: {
        compilerOptions: {
          isCustomElement: (tag) =>
            tag.startsWith("mdui-") || tag.startsWith("meting-"),
        },
      },
    }),

    VitePages({
      extensions: ["vue", "md"],
      exclude: ["**/components/*.vue"],
    }),

    ViteMarkdown(),
    AutoImport({
      imports: ["vue"],
    }),
    Components({
      extensions: ["vue", "md"],
    }),

    UnoCSS(),
  ],
});
