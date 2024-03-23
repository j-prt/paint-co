import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyles } from './GlobalStyles'
import AppLayout from './ui/AppLayout'
import PaintStatus from './pages/PaintStatus'
import PaintManagement from './pages/PaintManagement'
import Admin from './pages/Admin'

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<PaintStatus />} />
            <Route path='manage' element={<PaintManagement />} />
            <Route path='admin' element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
