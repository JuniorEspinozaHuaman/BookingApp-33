import { useForm } from "react-hook-form"
import useCrud from "../../hooks/useCrud"
import './Styles/ReservationsHotel.css'

const ReservationsHotel = ({ hotelId }) => {
  const { handleSubmit, register, reset } = useForm()

  const [, , createReservation] = useCrud()

  const submit = data => {
    const obj = {
      ...data,
      hotelId
    }
    createReservation('/bookings', obj)
  }

  return (
    <div className="reservationsHotel">

      <div className="reservationsHotel__containerTitle">
        <h3 className="reservationsHotel__title">Reservations</h3>
      </div>

      <form className="reservationsHotel__form" onSubmit={handleSubmit(submit)}>
        <label className="reservationsHotel__label">
          <span className="reservationsHotel__subtitle">Check-in</span>
          <input className="reservationsHotel__input reservationsHotel__input--margin" {...register('checkIn')} type="date" />
        </label>
        <label className="reservationsHotel__label">
          <span className="reservationsHotel__subtitle">Check-out</span>
          <input className="reservationsHotel__input" {...register('checkOut')} type="date" />
          <button className="reservationsHotel__button">Save</button>
        </label>
      </form>
    </div>
  )
}

export default ReservationsHotel
