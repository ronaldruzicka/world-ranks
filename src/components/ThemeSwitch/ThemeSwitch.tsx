import { Brightness4Outlined, Brightness5Rounded } from '@material-ui/icons'
import { ThemeSwitchButton } from './ThemeSwitchButton'

type Props = {
  isDarkTheme: boolean
  onClick: () => void
}

export const ThemeSwitch = ({ isDarkTheme, onClick }: Props) => {
  return (
    <ThemeSwitchButton
      title={`Switch to ${isDarkTheme ? 'light' : 'dark'} theme`}
      onClick={onClick}
    >
      {isDarkTheme ? <Brightness5Rounded /> : <Brightness4Outlined />}
    </ThemeSwitchButton>
  )
}
