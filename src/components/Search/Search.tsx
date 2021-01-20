import { ChangeEvent } from 'react'
import { SearchBar } from './SearchBar'
import { SearchInput } from './SearchInput'
import { SearchLabel } from './SearchLabel'

type Props = {
  numOfCountries: number
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: string
}

export const Search = ({ numOfCountries, onSearchChange, value }: Props) => {
  return (
    <SearchBar>
      <SearchLabel>Found {numOfCountries} countries</SearchLabel>
      <SearchInput onChange={onSearchChange} value={value} />
    </SearchBar>
  )
}
