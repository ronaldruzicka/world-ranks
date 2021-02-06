import 'styled-components'

// Extend for IntelliSense within Styled Components we need to extend DefaultTheme
declare module 'styled-components' {
  export interface DefaultTheme {
    spacer: number
    palette: {
      accent: string
      textAlt: string
      bg: string
      text: string
      inputBg: string
      cardBg: string
      title: string
    }
  }
}
