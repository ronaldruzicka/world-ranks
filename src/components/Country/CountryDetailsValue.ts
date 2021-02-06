import styled from 'styled-components'
import { CountryDetailsProperty } from './CountryDetailsProperty'

export const CountryDetailsValue = styled(CountryDetailsProperty)`
  color: ${({ theme }) => theme.palette.text};
`
