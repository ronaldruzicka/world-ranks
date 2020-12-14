import styled from 'styled-components'

export const SearchLabel = styled.p`
  margin-bottom: calc(var(--spacer) * 1.5);
  color: var(--textAltColor);

  @media (min-width: 768px) {
    flex: 0 0 50%;
    margin-bottom: 0;
  }
`
