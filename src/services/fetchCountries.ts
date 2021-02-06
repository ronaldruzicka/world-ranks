import { Country } from 'components/CountriesTable/types'

export const fetchCountries = async (): Promise<Country[]> => {
  const response = await fetch('https://restcountries.eu/rest/v2/all')
  const data = await response.json()

  return data
}

export const fetchCountry = async (id: string): Promise<Country[]> => {
  const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`)
  const data = await response.json()

  return data
}
