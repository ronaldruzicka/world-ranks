import { padding } from 'polished'
import styled from 'styled-components'
import { mq } from '../Styles/helpers'

export const TableRow = styled.tr`
  display: block;
  justify-content: space-between;
  ${({ theme }) => padding(theme.spacer * 2.5, theme.spacer * 2)};
  color: ${({ theme }) => theme.palette.text};
  background-color: ${({ theme }) => theme.palette.tableRowBg};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: ${({ theme }) => theme.spacer * 1.5}px;

  thead & {
    background-color: transparent;
    box-shadow: none;
  }

  & + & {
    margin-top: ${({ theme }) => theme.spacer * 2}px;
  }

  ${mq('SM')`
    display: flex;
  `}
`
