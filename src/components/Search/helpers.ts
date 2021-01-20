import { compose, filter, includes, toLower, where } from 'ramda'

const hasName = (searchValue: string) => (name: string) =>
  includes(searchValue, toLower(name))

const hasRegion = (searchValue: string) => (region: string) =>
  includes(searchValue, toLower(region))

const hasSubregion = (searchValue: string) => (subregion: string) =>
  includes(searchValue, toLower(subregion))

export const searchByNameRegionSubregion = (searchValue: string) =>
  compose(filter(where({ name: hasName(searchValue) }))) ||
  compose(filter(where({ region: hasRegion(searchValue) }))) ||
  compose(filter(where({ subregion: hasSubregion(searchValue) })))
