import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import FlexRow from './FlexRow'

const OutletBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 2rem;
  background-color: var(--color-secondary);
`

function AppLayout() {
  return (
    <FlexRow>
      <Sidebar />
      <OutletBox>
        <Outlet />
      </OutletBox>
    </FlexRow>
  )
}

export default AppLayout
