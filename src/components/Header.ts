import { padding } from 'polished'
import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: center;
  ${({ theme }) => padding(theme.spacer * 3, null, theme.spacer * 5)};

  @media (min-width: 768px) {
    ${({ theme }) => padding(theme.spacer * 4, null, theme.spacer * 8)};
  }
`
