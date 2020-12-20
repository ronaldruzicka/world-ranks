import { Flag } from '../components/Flag/Flag'
import { Layout } from '../components/Layout'
import { Search } from '../components/Search/Search'
import { Table } from '../components/Table/Table'
import { TableBody } from '../components/Table/TableBody'
import { TableCell } from '../components/Table/TableCell'
import { TableHead } from '../components/Table/TableHead'
import { TableRow } from '../components/Table/TableRow'
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
  return (
    <Layout>
      <Search numOfCountries={data.length} />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell as="th">Name</TableCell>
            <TableCell as="th">Population</TableCell>
            <TableCell as="th">Area</TableCell>
            <TableCell as="th">Gini</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((country) => {
            const { alpha3Code, area, flag, gini, name, population } = country

            return (
              <TableRow key={alpha3Code}>
                <TableCell data-label="Name">
                  <Flag src={flag} alt={`Flag of ${name}`} />
                  {name}
                </TableCell>
                <TableCell data-label="Population">{population.toLocaleString()}</TableCell>
                <TableCell data-label="Area (km2)">
                  {typeof area === 'number' ? (
                    <>
                      {area.toLocaleString()} km<sup>2</sup>
                    </>
                  ) : (
                    'N/A'
                  )}
                </TableCell>
                <TableCell data-label="Gini">{gini ? `${gini} %` : 'N/A'}</TableCell>
              </TableRow>
            )
          })}
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
