import { Link } from "react-router-dom"
import './Styles/HeaderShared.css'
import useAuth from "../../hooks/useAuth"
import { useEffect } from "react"


const HeaderShared = () => {
  const { isLoggedIn, setIsLoggedIn, loginUser} = useAuth()

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setIsLoggedIn(false)
  }
  
  const handleLoginRedirect = () => {
    localStorage.setItem('returnUrl', JSON.stringify({ pathname: window.location.pathname, hash: window.location.hash.substring(2) }));
  }
  
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('token'))
  },[loginUser])
  
  return (
    <header className="header">
      <h1 className="header__title"><Link className="header__link" to='/' target="_self">Booking<span className="header__app">App</span></Link></h1>
      <nav className="header__nav">
        <ul className="header__list">
          {
            isLoggedIn && (
              <li className="header__item"><Link className="header__link header__link--underlined" to='/reservation'>Reservations</Link></li>
            )
          }
          {
            !isLoggedIn && (
              <>
                <li className="header__item"><Link className="header__link header__link--underlined" to='/register' onClick={handleLoginRedirect} >Register</Link></li>
                <li className="header__item"><Link className="header__link header__link--color" to='/login' onClick={handleLoginRedirect}>Login</Link></li>
              </>
            )
          }
          {
            isLoggedIn &&
            (<li onClick={handleLogout} className="header__item header__link header__link--color">Logout</li>)
          }

        </ul>
      </nav>
    </header>
  )
}

export default HeaderShared