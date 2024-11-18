import type { Config } from 'tailwindcss';

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#182def', // 白天主颜色
          dark: '#ffffff', // 晚上主颜色
        },
        highlight: {
          light: '#ea3378', // 白天选中颜色
          dark: '#ea3378', // 晚上选中颜色
        },
        background: {
          light: '#fafafa', // 白天背景颜色
          dark: '#1f1f1f', // 晚上背景颜色
        },
        btnbg: '#182def',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark'], // 配置亮暗主题
  },
};
