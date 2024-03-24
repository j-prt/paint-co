import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyles } from './GlobalStyles'
import AppLayout from './ui/AppLayout'
import PaintStatus from './pages/PaintStatus'
import Admin from './pages/Admin'
import Login from './pages/Login'

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login />} />
          <Route element={<AppLayout />}>
            <Route index element={<PaintStatus />} />
            <Route path='admin' element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
