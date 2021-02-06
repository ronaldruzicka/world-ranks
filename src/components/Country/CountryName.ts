import styled from 'styled-components'

export const CountryName = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacer * 2}px;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  line-height: 1;
  color: ${({ theme }) => theme.palette.title};
`
