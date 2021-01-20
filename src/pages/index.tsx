import { length, toLower } from 'ramda'
import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { SortButton } from '../components/Button/SortButton'
import { Flag } from '../components/Flag/Flag'
import { Layout } from '../components/Layout'
import { searchByNameRegionSubregion } from '../components/Search/helpers'
import { Search } from '../components/Search/Search'
import { Table } from '../components/Table/Table'
import { TableBody } from '../components/Table/TableBody'
import { TableCell } from '../components/Table/TableCell'
import { TableHead } from '../components/Table/TableHead'
import { TableRow } from '../components/Table/TableRow'
import { sortCountries } from '../helpers/sort'
import { SortDirection } from '../helpers/types'
import { fetchCountries } from '../services/fetchCountries'

type Country = {
  alpha3Code: string
  area?: number
  flag: string
  gini?: number
  name: string
  population: number
}

type Props = {
  data: Country[]
}

const Home = ({ data }: Props) => {
  const [sortDirection, setSortDirection] = useState<SortDirection | null>(null)
  const [orderBy, setOrderBy] = useState<keyof Country | null>(null)
  const [searchValue, setSearchValue] = useState('')
  const [countries, setCountries] = useState<Country[]>(data)
  const sortedCountries = sortCountries(sortDirection, orderBy, countries)

  const handleSort = (event: SyntheticEvent<HTMLButtonElement>) => {
    setOrderBy(event.currentTarget.value as keyof Country)
    setSortDirection((direction) => {
      if (!direction) {
        return SortDirection.ASC
      }

      if (direction === SortDirection.ASC) {
        return SortDirection.DESC
      }

      return null
    })
  }

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = toLower(event.target.value)

    setSearchValue(searchValue)

    const searchResult = searchValue
      ? searchByNameRegionSubregion(searchValue)(data)
      : data

    setCountries(searchResult)
  }

  const headCells = ['Name', 'Population', 'Area', 'Gini']

  return (
    <Layout>
      <Search
        onSearchChange={handleChangeSearch}
        numOfCountries={data.length}
        value={searchValue}
      />
      <Table>
        <TableHead>
          <TableRow>
            {headCells.map((cell) => (
              <TableCell key={cell}>
                <SortButton
                  active={orderBy === cell}
                  direction={sortDirection}
                  onClick={handleSort}
                  value={cell}
                />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {length(sortedCountries) ? (
            sortedCountries.map((country) => {
              const { alpha3Code, area, flag, gini, name, population } = country

              return (
                <TableRow key={alpha3Code}>
                  <TableCell data-label="Name">
                    <Flag src={flag} alt={`Flag of ${name}`} />
                    {name}
                  </TableCell>
                  <TableCell data-label="Population">
                    {population.toLocaleString()}
                  </TableCell>
                  <TableCell data-label="Area (km2)">
                    {typeof area === 'number' ? (
                      <>
                        {area.toLocaleString()} km<sup>2</sup>
                      </>
                    ) : (
                      'N/A'
                    )}
                  </TableCell>
                  <TableCell data-label="Gini">
                    {gini ? `${gini} %` : 'N/A'}
                  </TableCell>
                </TableRow>
              )
            })
          ) : (
            <p>No countries found</p>
          )}
        </TableBody>
      </Table>
    </Layout>
  )
}

export default Home

export const getStaticProps = async () => {
  const data = await fetchCountries()

  return {
    props: {
      data,
    },
  }
}
