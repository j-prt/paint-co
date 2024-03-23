import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

const AppLayoutStyle = styled.div``

function AppLayout() {
  return (
    <AppLayoutStyle>
      <Outlet />
    </AppLayoutStyle>
  )
}

export default AppLayout
