import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { Map, Marker, ZoomControl } from 'pigeon-maps'
import OtherHotels from '../components/HotelInfoPage/OtherHotels'
import ReservationsHotel from '../components/HotelInfoPage/ReservationsHotel'
import SliderImgs from '../components/HotelInfoPage/SliderImgs'
import CommentsSection from '../components/HotelInfoPage/CommentsSection'
import './Styles/HotelInfoPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons' 


const HotelInfoPage = () => {

    const { id } = useParams()

    const url = `https://booking-backend-8koz.onrender.com/hotels/${id}`
    const [hotel, getHotel] = useFetch(url)

    useEffect(() => {
        getHotel()
    }, [url])



    return (
        <div className='hotelInfoPage'>
            <header className='hotelInfoPage__header'>
                <h2 className='hotelInfoPage__title'>{hotel?.name}</h2>
                <span className='hotelInfoPage__rating'>rating</span>
            </header>
            <div className='hotelInfoPage__containerSliderMap'>
                <SliderImgs
                    hotel={hotel}
                />
                <div className='hotelInfoPage__map'>
                    {hotel && (<Map
                        defaultCenter={[+hotel?.lat, +hotel?.lon]}
                        height={300}
                        zoom={12}>
                        <Marker
                            width={50}
                            color='#f72c2ce5'
                            anchor={[+hotel?.lat, +hotel?.lon]}
                        />
                        <ZoomControl />
                    </Map>)

                    }
                </div>
            </div>

            <div className='hotelInfoPage__containerInformation'>
                <div className='hotelInfoPage__data'>
                    <span className='hotelInfoPage__cityName'>{hotel?.city.name} | </span>
                    <span className='hotelInfoPage__countryName'>{hotel?.city.country}</span>
                </div>
                <div className='hotelInfoPage__data'>

                    <FontAwesomeIcon icon={faLocationDot} className='hotelInfoPage__icon'/>
                    <span className='hotelInfoPage__address'>{hotel?.address}</span>
                </div>
                <div className='hotelInfoPage__data'>
                    <p className='hotelInfoPage__description'>{hotel?.description}</p>
                </div>
            </div>
            
            <CommentsSection
                hotelId={hotel?.id}
            />
            <ReservationsHotel
                hotelId={hotel?.id}
            />
            <OtherHotels
                cityId={hotel?.city.id}
                hotelId={hotel?.id}
            />
        </div>
    )
}

export default HotelInfoPage