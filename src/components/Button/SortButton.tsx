import { SortRounded as SortIcon } from '@material-ui/icons'
import { SyntheticEvent } from 'react'
import { SortDirection } from '../../helpers/types'
import { Button } from './Button'
import { ButtonIcon } from './ButtonIcon'

type Props = {
  active: boolean
  direction: SortDirection | null
  onClick: (event: SyntheticEvent<HTMLButtonElement>) => void
  value: string
}

export const SortButton = ({ active, direction, onClick, value }: Props) => {
  return (
    <Button onClick={onClick} title={`Sort by: ${value}`} value={value}>
      {value}
      {active && direction && (
        <ButtonIcon direction={direction}>
          <SortIcon fontSize="small" />
        </ButtonIcon>
      )}
    </Button>
  )
}
