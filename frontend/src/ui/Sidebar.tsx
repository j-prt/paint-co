import styled from 'styled-components'
import FlexColumn from './FlexColumn'
import { Link } from 'react-router-dom'

const StyledSidebar = styled(FlexColumn)`
  width: 20rem;
  height: 100vh;
  background-color: var(--color-main);
`

const Logo = styled.p`
  margin: 3rem auto 0rem;

  font-size: 5rem;
`

const Avatar = styled.div`
  margin: 1rem auto;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background-image: url('/paintbrush.jpg');
  background-size: cover;
  background-position: center;
`

const SidebarItemBox = styled(FlexColumn)`
  gap: 0.5rem;
  align-items: center;
`

const SidebarItem = styled(Link)`
  font-size: 1.5rem;
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
      <SidebarItemBox>
        <SidebarItem to='manage'>View Paint Status</SidebarItem>
        <SidebarItem to='/'>Update Paint Status</SidebarItem>
        <SidebarItem to='admin'>Manage Users</SidebarItem>
      </SidebarItemBox>
      <Copyright>&copy; j-prt 2024</Copyright>
    </StyledSidebar>
  )
}

export default Sidebar
