import { SearchRounded } from '@material-ui/icons'
import { SearchInputStyled } from './SearchInputStyled'

export const SearchInput = () => {
  return (
    <SearchInputStyled>
      <SearchRounded />
      <input type="search" placeholder="Filter by Name, Region, Subregion" />
    </SearchInputStyled>
  )
}
