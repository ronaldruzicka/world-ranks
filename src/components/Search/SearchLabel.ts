import styled from 'styled-components'

export const SearchLabel = styled.p`
  margin-bottom: ${({ theme }) => theme.spacer * 1.5}px;
  color: ${({ theme }) => theme.palette.textAlt};

  @media (min-width: 768px) {
    flex: 0 0 50%;
    margin-bottom: 0;
  }
`
