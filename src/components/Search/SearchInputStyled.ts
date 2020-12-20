import styled from 'styled-components'
import { padding } from 'polished'

export const SearchInputStyled = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => padding(theme.spacer, theme.spacer * 1.5)};
  background-color: ${({ theme }) => theme.palette.inputBg};
  border-radius: ${({ theme }) => `${theme.spacer * 1.5}px`};
  color: ${({ theme }) => theme.palette.textAlt};

  @media (min-width: 768px) {
    flex: 0 0 50%;
  }

  input {
    width: 100%;
    padding: 0;
    margin-left: ${({ theme }) => theme.spacer * 2}px;
    background-color: transparent;
    border: 0;
    color: inherit;
    font-size: 1rem;

    &:focus {
      outline: none;
    }

    ::placeholder {
      color: inherit;
    }
  }
`
