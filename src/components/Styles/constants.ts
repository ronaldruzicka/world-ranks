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
    tableRowBg: '#fff',
  },
}

export const darkTheme: DefaultTheme = {
  ...shared,
  palette: {
    ...sharedPalette,
    bg: '#252329',
    text: '#fff',
    inputBg: '#3c393f',
    tableRowBg: '#3c393f',
  },
}

export enum Breakpoints {
  SM = 600,
  MD = 960,
  LG = 1280,
  XL = 1920,
}
