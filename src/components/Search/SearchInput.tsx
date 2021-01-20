import { SearchRounded } from '@material-ui/icons'
import { ChangeEvent } from 'react'
import { SearchInputStyled } from './SearchInputStyled'

type Props = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: string
}

export const SearchInput = ({ onChange, value }: Props) => {
  return (
    <SearchInputStyled>
      <SearchRounded />
      <input
        onChange={onChange}
        value={value}
        type="search"
        placeholder="Filter by Name, Region, Subregion"
      />
    </SearchInputStyled>
  )
}
