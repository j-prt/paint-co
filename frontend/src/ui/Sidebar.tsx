import styled from 'styled-components'
import FlexColumn from './FlexColumn'
import SidebarItems from './SidebarItems'
import { device } from '../media'

const StyledSidebar = styled(FlexColumn)`
  width: 8rem;
  height: 100vh;
  background-color: var(--color-main);
  position: sticky;
  top: 0;
  display: none;

  @media ${device.xs} {
    width: 8rem;
    display: flex;
  }

  @media ${device.sm} {
    width: 14rem;
    display: flex;
  }

  @media ${device.lg} {
    width: 20rem;
  }
`

const Logo = styled.h1`
  margin: 3rem auto 0rem;

  font-size: 3rem;

  @media ${device.sm} {
    font-size: 5rem;
  }
`

const Avatar = styled.div`
  margin: 1rem auto;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-image: url('/paintbrush.jpg');
  background-size: cover;
  background-position: center;

  @media ${device.sm} {
    width: 8rem;
    height: 8rem;
  }
`

const Copyright = styled.p`
  font-size: 0.8rem;
  margin: auto auto 0.5rem;
`

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo>APC</Logo>
      <Avatar />
      <SidebarItems />
      <Copyright>&copy; j-prt 2024</Copyright>
    </StyledSidebar>
  )
}

export default Sidebar
