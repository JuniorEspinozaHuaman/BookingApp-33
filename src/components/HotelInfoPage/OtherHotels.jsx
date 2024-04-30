import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import HotelCard from "../HomePage/HotelCard"
import './Styles/OtherHotels.css'

const OtherHotels = ({ cityId, hotelId }) => {

    const url = `https://booking-backend-8koz.onrender.com/hotels?cityId=${cityId}`

    const [hotels, getHotels] = useFetch(url)

    useEffect(() => {
        if (cityId) {
            getHotels();
        }
    }, [url])


    return (
        <div className="otherHotels">
            <div className="otherHotels__container">
                <h2 className="otherHotels__title">Other Hotels in {hotels?.[0].city.name}</h2>
                <div className='otherHotels__containerCard'>
                    {

                        hotels?.filter(hotelInfo => hotelInfo.id !== hotelId).map(hotelInfo => (

                            <HotelCard
                                key={hotelInfo.id}
                                hotel={hotelInfo}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default OtherHotels