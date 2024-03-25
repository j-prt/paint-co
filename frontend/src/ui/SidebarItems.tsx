import styled from 'styled-components'
import FlexColumn from './FlexColumn'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../AuthContext'
import { device } from '../media'

const SidebarItemBox = styled(FlexColumn)`
  margin-top: 2rem;
  gap: 3rem;
  align-items: center;
  font-size: 1rem;

  @media ${device.sm} {
    font-size: 1.5rem;
  }
`
const SidebarItem = styled(Link)``
const Logout = styled.p`
  &:hover {
    cursor: pointer;
  }
`

function SidebarItems() {
  const { logout, role } = useContext(AuthContext)
  return (
    <SidebarItemBox>
      <SidebarItem to='/'>View Paint Status</SidebarItem>
      {role === 'admin' && <SidebarItem to='admin'>Manage Users</SidebarItem>}
      <Logout onClick={logout}>Logout</Logout>
    </SidebarItemBox>
  )
}

export default SidebarItems
