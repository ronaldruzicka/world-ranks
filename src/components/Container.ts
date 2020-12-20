import { padding } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => padding(null, theme.spacer * 3)};
`
