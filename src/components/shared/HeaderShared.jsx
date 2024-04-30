import { Link } from "react-router-dom"
import './Styles/HeaderShared.css'

const HeaderShared = () => {
  return (
    <header className="header">
        <h1 className="header__title"><Link className="header__link" to='/'>Booking<span className="header__app">App</span></Link></h1>
        <nav className="header__nav">
            <ul className="header__list">
                {
                  localStorage.getItem('token') && (
                    <li className="header__item"><Link className="header__link header__link--underlined" to='/reservation'>Reservations</Link></li>
                  )
                }
                <li className="header__item"><Link className="header__link header__link--underlined" to='/register'>Register</Link></li>
                <li className="header__item"><Link className="header__link header__link--color" to='/login'>Login</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default HeaderShared