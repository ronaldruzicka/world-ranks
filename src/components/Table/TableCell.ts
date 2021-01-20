import styled from 'styled-components'
import { mq } from 'components/Styles/helpers'

export const TableCell = styled.td`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0;
  font-weight: inherit;

  &::before {
    content: attr(data-label);
    display: block;
    padding-right: ${({ theme }) => theme.spacer * 2}px;
    margin-right: auto;
    font-weight: 600;

    ${mq('SM')`
      display: none;
    `}
  }

  ${mq('SM')`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 4 1;
  `}

  &:first-child {
    ${mq('SM')`
      justify-content: flex-start;
    `}
  }
`
