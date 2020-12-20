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
  transition: transform 0.15s ease-in, box-shadow 0.2s ease-in;

  &:hover {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
    transform: translate3d(0, -3px, 0);
    cursor: pointer;
  }

  & + & {
    margin-top: ${({ theme }) => theme.spacer * 2}px;
  }

  thead & {
    color: ${({ theme }) => theme.palette.textAlt};
    background-color: transparent;
    box-shadow: none;

    &:hover {
      box-shadow: none;
      transform: none;
      cursor: default;
    }
  }

  ${mq('SM')`
    display: flex;
  `}
`
