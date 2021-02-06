import { BackButton } from 'components/Button/BackButton'
import { Card } from 'components/Card/Card'
import { Country as CountryProps } from 'components/CountriesTable/types'
import { CountryDetails } from 'components/Country/CountryDetails'
import { CountryDetailsItem } from 'components/Country/CountryDetailsItem'
import { CountryDetailsProperty } from 'components/Country/CountryDetailsProperty'
import { CountryDetailsTitle } from 'components/Country/CountryDetailsTitle'
import { CountryDetailsValue } from 'components/Country/CountryDetailsValue'
import { CountryFlag } from 'components/Country/CountryFlag'
import { CountryFooter } from 'components/Country/CountryFooter'
import { CountryLabel } from 'components/Country/CountryLabel'
import { CountryName } from 'components/Country/CountryName'
import { CountryOverview } from 'components/Country/CountryOverview'
import { CountryRegion } from 'components/Country/CountryRegion'
import { Grid } from 'components/Grid/Grid'
import { joinArrayItems } from 'helpers/array'
import { GetStaticProps } from 'next'
import { fetchCountries, fetchCountry } from 'services/fetchCountries'

type Props = {
  data: CountryProps
}

const Country = ({ data }: Props) => {
  const {
    flag,
    name,
    region,
    population,
    area,
    capital,
    subregion,
    languages,
    currencies,
    nativeName,
    gini,
    borders,
  } = data

  return (
    <>
      <BackButton />
      <Grid>
        <CountryOverview>
          <Card>
            <CountryFlag src={flag} alt={`${name} flag`} />
            <CountryName>{name}</CountryName>
            <CountryRegion>{region}</CountryRegion>
            <CountryFooter>
              <p>
                Population
                <br />
                <CountryLabel>{population}</CountryLabel>
              </p>
              <p>
                Area
                <br />
                <CountryLabel>{area}</CountryLabel>
              </p>
            </CountryFooter>
          </Card>
        </CountryOverview>
        <CountryDetails>
          <Card>
            <CountryDetailsTitle>Details</CountryDetailsTitle>
            <CountryDetailsItem>
              <CountryDetailsProperty>Capital</CountryDetailsProperty>
              <CountryDetailsValue>{capital}</CountryDetailsValue>
            </CountryDetailsItem>
            <CountryDetailsItem>
              <CountryDetailsProperty>Subregion</CountryDetailsProperty>
              <CountryDetailsValue>{subregion}</CountryDetailsValue>
            </CountryDetailsItem>
            <CountryDetailsItem>
              <CountryDetailsProperty>Languages</CountryDetailsProperty>
              <CountryDetailsValue>
                {languages.map(({ name }, index) =>
                  joinArrayItems(name, index),
                )}
              </CountryDetailsValue>
            </CountryDetailsItem>
            <CountryDetailsItem>
              <CountryDetailsProperty>Currencies</CountryDetailsProperty>
              <CountryDetailsValue>
                {currencies.map(({ name }, index) =>
                  joinArrayItems(name, index),
                )}
              </CountryDetailsValue>
            </CountryDetailsItem>
            <CountryDetailsItem>
              <CountryDetailsProperty>Native name</CountryDetailsProperty>
              <CountryDetailsValue>{nativeName}</CountryDetailsValue>
            </CountryDetailsItem>
            <CountryDetailsItem>
              <CountryDetailsProperty>Gini</CountryDetailsProperty> {gini}
            </CountryDetailsItem>
            <CountryDetailsItem border={false}>
              <CountryDetailsProperty>Borders</CountryDetailsProperty>
              {borders.map(joinArrayItems)}
            </CountryDetailsItem>
          </Card>
        </CountryDetails>
      </Grid>
    </>
  )
}

export default Country

export const getStaticPaths = async () => {
  const data = await fetchCountries()

  const paths = data.map(({ alpha3Code }) => ({
    params: { id: alpha3Code },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const countryCode = typeof params?.id === 'string' ? params.id : ''
  const country = countryCode ? await fetchCountry(countryCode) : {}

  return {
    props: {
      data: country,
    },
  }
}
