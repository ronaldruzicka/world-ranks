import { SortButton } from 'components/Button/SortButton'
import { Flag } from 'components/Flag/Flag'
import { Table } from 'components/Table/Table'
import { TableBody } from 'components/Table/TableBody'
import { TableCell } from 'components/Table/TableCell'
import { TableHead } from 'components/Table/TableHead'
import { TableRow } from 'components/Table/TableRow'
import { sortCountries } from 'helpers/sort'
import { SortDirection } from 'helpers/types'
import { useRouter } from 'next/router'
import { length } from 'ramda'
import { SyntheticEvent, useState } from 'react'
import { Country } from './types'

type Props = {
  countries: Country[]
}

export const CountriesTable = ({ countries }: Props) => {
  const router = useRouter()
  const [sortDirection, setSortDirection] = useState<SortDirection | null>(null)
  const [orderBy, setOrderBy] = useState<keyof Country | null>(null)
  const sortedCountries = sortCountries(sortDirection, orderBy, countries)
  const headCells = ['Name', 'Population', 'Area', 'Gini']

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

  const handleClickCountry = (alpha3Code: string) => {
    router.push(alpha3Code)
  }

  return (
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
              <TableRow
                key={alpha3Code}
                onClick={() => handleClickCountry(alpha3Code)}
              >
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
  )
}
