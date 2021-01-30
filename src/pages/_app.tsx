import { Container } from 'components/Container'
import { Header } from 'components/Header'
import { Logo } from 'components/Logo'
import { darkTheme, lightTheme } from 'components/Styles/constants'
import { GlobalStyles } from 'components/Styles/GlobalStyles'
import { ThemeSwitch } from 'components/ThemeSwitch/ThemeSwitch'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const isClient = typeof window !== 'undefined'
  const isDarkOS =
    isClient && window.matchMedia('(prefers-color-scheme: dark)').matches

  const [isDarkTheme, setDarkTheme] = useState(isDarkOS)
  const theme = isDarkTheme ? darkTheme : lightTheme

  const handleChangeTheme = () => setDarkTheme((isDarkTheme) => !isDarkTheme)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Container>
        <Head>
          <title>World Ranks</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header>
          <Logo />
          <ThemeSwitch isDarkTheme={isDarkTheme} onClick={handleChangeTheme} />
        </Header>

        {/* Check if we are in the browser, so the theme (dark/light) works properly because of SSR and hydration */}
        {isClient && <Component {...pageProps} />}
      </Container>
    </ThemeProvider>
  )
}

export default MyApp
