import { useForm } from "react-hook-form"
import useCrud from "../../hooks/useCrud"
import './Styles/ReservationsHotel.css'
import { useNavigate } from "react-router-dom"
import LoginPage from "../../pages/LoginPage"
// import { useState } from "react"
import useAuth from "../../hooks/useAuth"
import { useEffect } from "react"

const ReservationsHotel = ({ hotelId }) => {
  const navigate = useNavigate()
  const { handleSubmit, register, reset } = useForm()
  const [, , createReservation] = useCrud()

  // const [isLoginOpen, setisLoginOpen] = useState(true)
  const { isLoginOpen, setIsLoginOpen, loginUser } = useAuth()
  const submit = data => {
    const obj = {
      ...data,
      hotelId
    }
    reset({
      checkIn: '',
      checkOut: ''
    })
    createReservation('/bookings', obj)
    if (localStorage.getItem('token')) {
      navigate('/reservation')
    } else {
      setIsLoginOpen(false)
    }

    !localStorage.getItem('token') &&
      localStorage.setItem('returnUrl', JSON.stringify({ pathname: window.location.pathname, hash: window.location.hash.substring(2) }))
  }

  useEffect(() => {

    if (localStorage.getItem('token')) {
      setIsLoginOpen(true)
    }
  }, [loginUser])

  const handleCloseLogin = () => {
    setIsLoginOpen(true)
  }

  return (
    <div className="reservationsHotel">

      <div className="reservationsHotel__containerTitle">
        <h3 className="reservationsHotel__title">Reservations</h3>
      </div>

      <form className="reservationsHotel__form" onSubmit={handleSubmit(submit)}>

        <label className="reservationsHotel__label">
          <span className="reservationsHotel__subtitle">Check-in</span>
          <input className="reservationsHotel__input reservationsHotel__input--margin" {...register('checkIn', { required: true })} type="date" />
        </label>

        <label className="reservationsHotel__label">
          <span className="reservationsHotel__subtitle">Check-out</span>
          <input className="reservationsHotel__input" {...register('checkOut', { required: true })} type="date" />
          <button className="reservationsHotel__button">Save</button>
        </label>

      </form>

      <div className={`reservationsHotel__containerLogin ${isLoginOpen && 'reservationsHotel__containerLogin--close'}`}>
        <span className='reservationsHotel__close' onClick={handleCloseLogin}>X</span>
        <LoginPage />

      </div>
    </div>
  )
}

export default ReservationsHotel
