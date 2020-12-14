import { SearchBar } from './SearchBar'
import { SearchInput } from './SearchInput'
import { SearchLabel } from './SearchLabel'

export const Search = () => {
  return (
    <SearchBar>
      <SearchLabel>Found countries</SearchLabel>
      <SearchInput />
    </SearchBar>
  )
}
