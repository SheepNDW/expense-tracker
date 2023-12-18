import {
  defineConfig,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  rules: [
    [
      'box-shadow',
      { 'box-shadow': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)' },
    ],
  ],
  shortcuts: {
    'money-plus': 'text-[#2ecc71]',
    'money-minus': 'text-[#c0392b]',
    'border-plus': 'border-[#2ecc71] border-r-5px',
    'border-minus': 'border-[#c0392b] border-r-5px',
    money: 'text-20px tracking-1px',
    btn: 'cursor-pointer bg-[#9c88ff] box-shadow text-white block text-base border-0 p10px mt10px mb0 mx-auto w-full',
  },
  presets: [
    presetUno(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        lato: [
          {
            name: 'Lato',
            weights: ['400', '700'],
            italic: true,
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
