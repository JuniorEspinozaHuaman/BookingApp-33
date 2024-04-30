import { useEffect, useState } from "react"
import useCrud from "../hooks/useCrud"
import ReserveCard from "../components/ReservationsPage/ReserveCard"
import FormReviews from "../components/ReservationsPage/FormReviews"
import './Styles/ReservationsPage.css'

const ReservationsPage = () => {

  const [reserveSelected, setReserveSelected] = useState()

  const [reserveReviews, setReserveReviews] = useState(true)

  const [reservations, getReservations, , deleteReservation] = useCrud()

  useEffect(() => {
    getReservations('/bookings')
  }, [])
  // console.log(reservations);
  return (
    <div className="reservationsPage">
      <div className="reservationsPage__containerTitle">
      <h2 className="reservationsPage__title">Reservations</h2>
      </div>
      <FormReviews
        reserveSelected={reserveSelected}
        setReserveSelected={setReserveSelected}
        reserveReviews={reserveReviews}
        setReserveReviews={setReserveReviews}
        
      />
      <div className="reservationPage__reserveCard">
        {
          reservations?.map(reserve => (
            <ReserveCard
              key={reserve.id}
              reserve={reserve}
              deleteReservation={deleteReservation}
              setReserveSelected={setReserveSelected}
              setReserveReviews={setReserveReviews}
            />
          ))
        }
      </div>
    </div>

  )
}

export default ReservationsPage