import styled from 'styled-components'

export const SearchInputStyled = styled.div`
  --bgColor: #eef3f6;

  [data-theme='dark'] & {
    --bgColor: #3c393f;
  }

  display: flex;
  align-items: center;
  padding: var(--spacer) calc(var(--spacer) * 1.5);
  background-color: var(--bgColor);
  border-radius: calc(var(--spacer) * 1.5);
  color: var(--textAltColor);

  @media (min-width: 768px) {
    flex: 0 0 50%;
  }

  input {
    width: 100%;
    padding: 0;
    margin-left: calc(var(--spacer) * 2);
    background-color: transparent;
    border: 0;
    color: inherit;

    &:focus {
      outline: none;
    }

    ::placeholder {
      color: inherit;
    }
  }
`
