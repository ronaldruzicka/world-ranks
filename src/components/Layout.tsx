import Head from 'next/head'
import { ReactNode, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Header } from '../components/Header'
import { Logo } from '../components/Logo'
import { Container } from './Container'
import { darkTheme, lightTheme } from './Styles/constants'
import { GlobalStyles } from './Styles/GlobalStyles'
import { ThemeSwitch } from './ThemeSwitch/ThemeSwitch'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  const [isDarkTheme, setDarkTheme] = useState(false)

  const handleChangeTheme = () => setDarkTheme((isDarkTheme) => !isDarkTheme)

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
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

        {children}
      </Container>
    </ThemeProvider>
  )
}
