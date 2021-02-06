export type Currency = {
  code: string | null
  name: string | null
  symbol: string | null
}

export type Language = {
  iso639_1: string | null
  iso639_2: string
  name: string
  nativeName: string
}

export type RegionalBlock = {
  acronym: string
  name: string
  otherAcronyms: string[]
  otherNames: string[]
}

export type Country = {
  alpha2Code: string
  alpha3Code: string
  altSpellings: string[]
  area: number | null
  borders: string[]
  callingCodes: string[]
  capital: string
  currencies: Currency[]
  demonym: string
  gini: number | null
  latlng: [number, number]
  name: string
  nativeName: string
  numericCode: string | null
  population: number
  region: string
  subregion: string
  timezones: string[]
  topLevelDomain: string[]
  languages: Language[]
  translations: {
    de: string | null
    es: string | null
    fr: string | null
    ja: string | null
    it: string | null
    br: string | null
    pt: string | null
    nl: string | null
    hr: string | null
    fa: string | null
  }
  flag: string
  regionalBlocs: RegionalBlock[]
  cioc: string | null
}
