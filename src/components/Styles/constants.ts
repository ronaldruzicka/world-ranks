import { DefaultTheme } from 'styled-components'

const shared = {
  spacer: 8,
}

const sharedPalette = {
  accent: '#21b6b7',
  textAlt: '#b3c5cd',
}

export const lightTheme: DefaultTheme = {
  ...shared,
  palette: {
    ...sharedPalette,
    bg: '#f7f7f7',
    text: '#124a63',
    inputBg: '#eef3f6',
    cardBg: '#fff',
    title: '#333',
  },
}

export const darkTheme: DefaultTheme = {
  ...shared,
  palette: {
    ...sharedPalette,
    bg: '#252329',
    text: '#fff',
    inputBg: '#3c393f',
    cardBg: '#3c393f',
    title: '#fff',
  },
}

export enum Breakpoints {
  SM = 600,
  MD = 960,
  LG = 1280,
  XL = 1920,
}
