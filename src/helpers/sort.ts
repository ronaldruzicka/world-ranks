import { prop, ascend, descend, toLower, sort } from 'ramda'
import { SortDirection } from './types'

export const sortCountries = <T>(
  direction: SortDirection | null,
  property: keyof T | null,
  data: T[],
) => {
  if (direction === SortDirection.ASC) {
    return sort(ascend(prop(toLower(property as string))), data)
  }

  if (direction === SortDirection.DESC) {
    return sort(descend(prop(toLower(property as string))), data)
  }

  return data
}
