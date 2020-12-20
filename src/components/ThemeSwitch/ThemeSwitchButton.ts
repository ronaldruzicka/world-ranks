import styled from 'styled-components'

export const ThemeSwitchButton = styled.button`
  padding: 0;
  margin-left: ${({ theme }) => theme.spacer}px;
  background-color: transparent;
  color: ${({ theme }) => theme.palette.textAlt};
  border: 0;
`
