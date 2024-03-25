import styled from 'styled-components'
import { device } from '../media'
import { useContext } from 'react'
import { AuthContext } from '../AuthContext'
import { Link } from 'react-router-dom'

const HeaderStyle = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 4rem;
  background-color: var(--color-main);
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.5rem;

  @media ${device.xs} {
    display: none;
  }
`

const HeaderItem = styled(Link)``

const Logout = styled.p`
  &:hover {
    cursor: pointer;
  }
`

function Header() {
  const { logout, role } = useContext(AuthContext)
  return (
    <HeaderStyle>
      <HeaderItem to='/'>Paint Status</HeaderItem>
      {role === 'admin' && <HeaderItem to='admin'>Manage Users</HeaderItem>}
      <Logout onClick={logout}>Logout</Logout>
    </HeaderStyle>
  )
}

export default Header
