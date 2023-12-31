import { defineConfig } from "vite";
import ViteVue from "@vitejs/plugin-vue";
import VitePages from "vite-plugin-pages";
import ViteMarkdown from "vite-plugin-md";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import commonjs from "@rollup/plugin-commonjs";

export default defineConfig({
  plugins: [
    commonjs(),
    ViteVue({
      include: [/\.vue$/, /\.md$/],
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("mdui-"),
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
  ],
});
