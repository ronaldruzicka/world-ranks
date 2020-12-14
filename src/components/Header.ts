import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: center;
  padding-top: calc(var(--spacer) * 3);
  padding-bottom: calc(var(--spacer) * 5);

  @media (min-width: 768px) {
    padding-top: calc(var(--spacer) * 4);
    padding-bottom: calc(var(--spacer) * 8);
  }
`
