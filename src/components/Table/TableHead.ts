import styled from 'styled-components'
import { mq } from '../Styles/helpers'

export const TableHead = styled.thead`
  display: none;

  ${mq('SM')`
    display: table-header-group;
    font-weight: 600;
  `}
`
