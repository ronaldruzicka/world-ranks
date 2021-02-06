import { mq } from 'components/Styles/helpers'
import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${({ theme }) => theme.spacer * 6}px;

  ${mq('MD')`
    grid-template-columns: 1fr 2fr;
    grid-template-areas: "country details";
  `}
`
