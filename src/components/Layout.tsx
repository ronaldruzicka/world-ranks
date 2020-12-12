import Head from 'next/head'
import { ReactNode, useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { Logo } from '../components/Logo'
import { Theme } from '../constants'
import { ThemeSwitch } from './ThemeSwitch/ThemeSwitch'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT)

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  const handleChangeTheme = () =>
    setTheme((theme) => (theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT))

  return (
    <div>
      <Head>
        <title>World Ranks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <Logo />
        <ThemeSwitch theme={theme} onClick={handleChangeTheme} />
      </Header>

      {children}
    </div>
  )
}
