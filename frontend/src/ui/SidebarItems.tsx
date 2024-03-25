import styled from 'styled-components'
import FlexColumn from './FlexColumn'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../AuthContext'

const SidebarItemBox = styled(FlexColumn)`
  margin-top: 2rem;
  gap: 3rem;
  align-items: center;
`
const SidebarItem = styled(Link)`
  font-size: 1.5rem;
`
const Logout = styled.p`
  font-size: 1.5rem;
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
