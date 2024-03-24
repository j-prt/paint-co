import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import FlexRow from './FlexRow'

const AppLayoutStyle = styled(FlexRow)``

function AppLayout() {
  return (
    <AppLayoutStyle>
      <Sidebar />
      <Outlet />
    </AppLayoutStyle>
  )
}

export default AppLayout
