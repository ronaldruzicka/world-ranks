import styled from 'styled-components'

export const SearchBar = styled.div`
  margin-bottom: ${({ theme }) => theme.spacer * 4}px;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
