import { defineConfig } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
  presets: [
    presetUno({
      rules: [
        ['m-c', { margin: '0 auto' }],
      ]
    }),
    /* presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Noto Sans SC',
      },
      inlineImports: true,
    }), */
  ],
})