import { padding, margin } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => padding(null, theme.spacer * 3)};
  ${margin(null, 'auto')};
  display: block;
  max-width: 1200px;
`
