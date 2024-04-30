import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import UnknownPages from './pages/UnknownPages'
import HotelInfoPage from './pages/HotelInfoPage'
import HeaderShared from './components/shared/HeaderShared'
import ReservationsPage from './pages/ReservationsPage'
import { ProtectedRoutes } from './pages/ProtectedRoutes'



function App() {
  

  return (
    <div className='app'>
      <HeaderShared />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />}/>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/hotel/:id' element={<HotelInfoPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/reservation' element={<ReservationsPage />} />
        </Route>
        <Route path='*' element={<UnknownPages />} />
      </Routes>
    </div>
  )
}

export default App
