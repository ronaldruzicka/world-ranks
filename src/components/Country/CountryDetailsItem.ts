import { margin, padding } from 'polished'
import styled from 'styled-components'

type Props = {
  border?: boolean
}

export const CountryDetailsItem = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => padding(theme.spacer * 3, theme.spacer * 5)};
  ${({ theme }) => margin(null, -theme.spacer * 5)};
  ${({ border = true }) => (border ? 'border-bottom: 1px solid #e0e0e0' : '')};
`
