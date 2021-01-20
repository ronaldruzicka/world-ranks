import { SortDirection } from 'helpers/types'
import styled from 'styled-components'

type Props = {
  direction: SortDirection
}

export const ButtonIcon = styled.span<Props>`
  color: ${({ theme }) => theme.palette.accent};
  margin-left: ${({ theme }) => theme.spacer / 2}px;
  transition: transform 0.3s ease-in;
  transform: rotateX(
    ${({ direction }) => (direction === SortDirection.DESC ? '0' : '-180deg')}
  );
`
