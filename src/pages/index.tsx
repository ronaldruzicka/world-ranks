import { Layout } from '../components/Layout'
import { Search } from '../components/Search/Search'
import { Table } from '../components/Table/Table'
import { TableCell } from '../components/Table/TableCell'
import { TableHead } from '../components/Table/TableHead'
import { TableRow } from '../components/Table/TableRow'

const Home = () => {
  return (
    <Layout>
      <Search />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell as="th">Name</TableCell>
            <TableCell as="th">Population</TableCell>
            <TableCell as="th">Area (km)</TableCell>
            <TableCell as="th">Gini</TableCell>
          </TableRow>
        </TableHead>
        <TableRow>
          <TableCell data-label="Name">
            <img src="http://satyr.io/50x38?flag=cn" />
            China
          </TableCell>
          <TableCell data-label="Population">140041242</TableCell>
          <TableCell data-label="Area (km)">9000km</TableCell>
          <TableCell data-label="Gini">100</TableCell>
        </TableRow>
      </Table>
    </Layout>
  )
}

export default Home
