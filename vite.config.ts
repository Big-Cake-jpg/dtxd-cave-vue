import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VitePages from "vite-plugin-pages";
import ViteMarkdown from "vite-plugin-md";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import UnoCSS from "unocss/vite";
import commonjs from "@rollup/plugin-commonjs";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    commonjs(),
    vue({
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
    UnoCSS(),
    VitePWA({
      registerType: "prompt",
      includeAssets: ["icon.png"],
      manifest: {
        name: "大唐现代回声洞",
        short_name: "大唐现代回声洞",
        description: "大唐现代回声洞，想说什么就说什么！",
        theme_color: "#811d1f",
        dir: "ltr",
        display: "standalone",
        start_url: "/",
        lang: "zh-CN",
      },
      pwaAssets: {
        config: true,
        overrideManifestIcons: true,
        injectThemeColor: true,
      },
      workbox: {
        navigateFallbackDenylist: [/^\/_vercel/],
        globPatterns: ["**/*.{css,js,html,svg,png,ico,txt,woff2}"],
        globIgnores: ["/_vercel/*"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/dtxd-comment\.lihaoyu\.cn\/.*/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "comment-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
});
