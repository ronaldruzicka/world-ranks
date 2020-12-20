export const fetchCountries = async () => {
  const response = await fetch(
    'https://restcountries.eu/rest/v2/all?fields=name;population;area;gini;flag;alpha3Code',
  )

  const data = await response.json()

  return data
}
