import styled from 'styled-components'

export const Button = styled.button.attrs(() => ({
  type: 'button',
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-size: 1rem;
  line-height: 2;
  color: ${({ theme }) => theme.palette.textAlt};
  background-color: transparent;
  border: 0;

  &:hover,
  &:focus {
    cursor: pointer;
  }
`
