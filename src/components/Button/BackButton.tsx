import { ArrowBackRounded as ArrowBackRoundedIcon } from '@material-ui/icons'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { Button } from './Button'

const ButtonStyled = styled(Button)`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacer * 2}px;

  & svg {
    margin-right: ${({ theme }) => theme.spacer}px;
  }
`

export const BackButton = () => {
  const router = useRouter()

  return (
    <ButtonStyled onClick={() => router.back()}>
      <ArrowBackRoundedIcon />
      Back
    </ButtonStyled>
  )
}
