import "./style.css";
// @ts-expect-error TS7016
import App from "./App.vue";
import { ViteSSG } from "vite-ssg";
import routes from "~pages";
import "mdui/mdui.css";
import 'virtual:uno.css'
import { setColorScheme } from 'mdui/functions/setColorScheme.js';

if (typeof window !== 'undefined')
    import('./pwa')

setColorScheme("#811d1f");

export const createApp = ViteSSG(App, { routes });
