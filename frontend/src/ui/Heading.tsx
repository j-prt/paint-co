import styled from 'styled-components'
import { device } from '../media'

const Heading = styled.h1`
  margin: 0 auto 3rem;
  font-size: 3rem;

  @media ${device.xs} {
    font-size: 4rem;
  }
`

export default Heading
