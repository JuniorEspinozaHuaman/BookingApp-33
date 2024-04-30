import { useState } from "react";
import getDaysFromDates from "../../services/getDaysFromDates";
import './Styles/ReserveCard.css'


const ReserveCard = ({ reserve, deleteReservation, setReserveSelected, setReserveReviews }) => {
    console.log(reserve);
    const reservationsDays = getDaysFromDates(reserve.checkIn, reserve.checkOut)

    const [isHover, setIsHover] = useState(false)

    const handleDelete = () => {
        deleteReservation('/bookings', reserve.id)
    }
    const handleReviews = () => {
        setReserveSelected(reserve)
        setReserveReviews(false)
    }
    const handleHover = () => {
        setIsHover(reserve.id)
    }
    const handleNoHover = () => {
        setIsHover(false)
    }
    // setReserveSelected(reserve)
    
    return (
        <article className="reserveCard">
            <header className="reserveCard__header">
                <img className="reserveCard__img" src={reserve.hotel.images[0].url} alt="" />
            </header>
            <section className="reserveCard__section">
                <h3 className="reserveCard__title">{reserve.hotel.name}</h3>
                <div className="reserveCard__country">{reserve.hotel.city.name}, {reserve.hotel.city.country}</div>

                <div className="reserveCard__containerDays">
                    <span className="reserveCard__reservationsDays">Reservations days: </span>
                    <span className="reserveCard__days">{reservationsDays}</span>
                </div>
                <div className="reserveCard__containerPrice">
                    <span className="reserveCard__subtotalPrice">Subtotal Price: $</span>
                    <span className="reserveCard__price">{+reserve.hotel.price * reservationsDays}</span>
                </div>
            </section>
            <div className="reserveCard__containerButton">
                <div className="reserveCard__link" onClick={handleReviews}>Rate and comment this visit</div>
                <button className="reserveCard__delete" onClick={handleDelete} onMouseEnter={handleHover} onMouseLeave={handleNoHover}>
                    <i className={`bx bx-trash ${reserve.id === isHover? 'bx-tada' : ''}`} ></i>
                </button>
            </div>

        </article>
    )
}

export default ReserveCard