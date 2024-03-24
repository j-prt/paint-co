import styled from 'styled-components'
import FlexColumn from './FlexColumn'

interface ButtonBoxProps {
  horizontal: true | undefined
}

const ButtonBox = styled(FlexColumn)<ButtonBoxProps>`
  ${props => props.horizontal && 'flex-direction: row'};
  gap: 0.5rem;
`

export default ButtonBox
