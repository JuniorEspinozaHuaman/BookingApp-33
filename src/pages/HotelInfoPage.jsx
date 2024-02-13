import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { Map, Marker, ZoomControl } from 'pigeon-maps'

const HotelInfoPage = () => {

    const { id } = useParams()

    const url = `https://hotels-api.academlo.tech/hotels/${id}`
    const [hotel, getHotel] = useFetch(url)

    useEffect(() => {
        getHotel()
    }, [url])

    

    return (
        <div>
            <header>
                <h2>{hotel?.name}</h2>
                <span>rating</span>
            </header>
            <div>
                <img src={hotel?.images[0].url} alt="" />
            </div>
            <div>
                { hotel && ( <Map 
                    defaultCenter={[ +hotel?.lat, +hotel?.lon ]} 
                    height={300}
                    zoom={12}>
                        <Marker 
                        width={50}
                        color='blue'
                        anchor={[ +hotel?.lat, +hotel?.lon ]}
                        />
                        <ZoomControl />
                    </Map>)
                   
                }
            </div>
            <div>
                <div>
                    <span>{hotel?.city.name}</span>
                    <span>{hotel?.city.country}</span>
                </div>
                <div>
                    <i className='bx bx-map'></i>
                    <span>{hotel?.address}</span>
                </div>
                <p>{hotel?.description}</p>
            </div>
        </div>
    )
}

export default HotelInfoPage