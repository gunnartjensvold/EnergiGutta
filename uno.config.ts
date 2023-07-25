import { defineConfig, presetIcons, presetUno, presetAttributify, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Poppins'
      }
    })
  ],
  theme: {
    colors: {
      'primary': '#79ad8c',
      'text-primary': '#262626',
      'text-secondary': '#717672',
      'secondary': '#e2eae5'
    }
  }
})
