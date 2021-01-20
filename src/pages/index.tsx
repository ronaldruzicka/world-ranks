import { toLower } from 'ramda'
import { ChangeEvent, useState } from 'react'
import { CountriesTable } from '../components/CountriesTable/CountriesTable'
import { Country } from '../components/CountriesTable/types'
import { Layout } from '../components/Layout'
import { searchByNameRegionSubregion } from '../components/Search/helpers'
import { Search } from '../components/Search/Search'
import { fetchCountries } from '../services/fetchCountries'

type Props = {
  data: Country[]
}

const Home = ({ data }: Props) => {
  const [searchValue, setSearchValue] = useState('')
  const [countries, setCountries] = useState<Country[]>(data)

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = toLower(event.target.value)

    setSearchValue(searchValue)

    const searchResult = searchValue
      ? searchByNameRegionSubregion(searchValue)(data)
      : data

    setCountries(searchResult)
  }

  return (
    <Layout>
      <Search
        onSearchChange={handleChangeSearch}
        numOfCountries={data.length}
        value={searchValue}
      />
      <CountriesTable countries={countries} />
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
