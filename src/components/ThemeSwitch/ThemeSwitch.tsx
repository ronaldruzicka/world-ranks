import { Brightness4Outlined, Brightness5Rounded } from '@material-ui/icons'
import { Theme } from '../../constants'
import { ThemeSwitchButton } from './ThemeSwitchButton'

type Props = {
  theme: Theme
  onClick: () => void
}

export const ThemeSwitch = ({ theme, onClick }: Props) => {
  const isLightTheme = theme === Theme.LIGHT

  return (
    <ThemeSwitchButton
      title={`Switch to ${isLightTheme ? 'dark' : 'light'} theme`}
      onClick={onClick}
    >
      {isLightTheme ? <Brightness4Outlined /> : <Brightness5Rounded />}
    </ThemeSwitchButton>
  )
}
