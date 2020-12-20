import styled from 'styled-components'
import { mq } from '../Styles/helpers'

export const TableCell = styled.td`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  font-weight: inherit;

  &::before {
    content: attr(data-label);
    display: block;
    padding-right: ${({ theme }) => theme.spacer * 2}px;
    font-weight: 600;

    ${mq('SM')`
      display: none;
    `}
  }

  ${mq('SM')`
    display: block;
    flex: 4 1;
    text-align: center;
  `}
`
