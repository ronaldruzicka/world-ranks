import { padding } from 'polished'
import styled from 'styled-components'

export const Card = styled.div`
  ${({ theme }) => padding(theme.spacer * 4, theme.spacer * 5)};
  background-color: ${({ theme }) => theme.palette.cardBg};
  border-radius: ${({ theme }) => theme.spacer * 1.5}px;
`
