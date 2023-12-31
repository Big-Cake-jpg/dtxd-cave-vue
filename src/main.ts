import './style.css'
import App from './App.vue'
import { ViteSSG } from 'vite-ssg'
import routes from '~pages'

export const createApp = ViteSSG(
    App,
    { routes }
);