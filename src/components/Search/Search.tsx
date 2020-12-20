import { SearchBar } from './SearchBar'
import { SearchInput } from './SearchInput'
import { SearchLabel } from './SearchLabel'

type Props = {
  numOfCountries: number
}

export const Search = ({ numOfCountries }: Props) => {
  return (
    <SearchBar>
      <SearchLabel>Found {numOfCountries} countries</SearchLabel>
      <SearchInput />
    </SearchBar>
  )
}
