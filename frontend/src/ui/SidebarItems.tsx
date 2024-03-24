import styled from 'styled-components'
import FlexColumn from './FlexColumn'
import { Link } from 'react-router-dom'

const SidebarItemBox = styled(FlexColumn)`
  margin-top: 2rem;
  gap: 3rem;
  align-items: center;
`
const SidebarItem = styled(Link)`
  font-size: 1.5rem;
`

function SidebarItems() {
  return (
    <SidebarItemBox>
      <SidebarItem to='manage'>View Paint Status</SidebarItem>
      <SidebarItem to='/'>Update Paint Status</SidebarItem>
      <SidebarItem to='admin'>Manage Users</SidebarItem>
    </SidebarItemBox>
  )
}

export default SidebarItems
