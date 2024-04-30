import React, { useEffect, useState } from 'react'
import { getHotelsThunk } from '../store/states/hotels.state'
import { useDispatch, useSelector } from 'react-redux'
import ListHotels from '../components/HomePage/ListHotels'
import FilterName from '../components/HomePage/FilterName'
import FilterPrice from '../components/HomePage/FilterPrice'
import FilterCities from '../components/HomePage/FilterCities'
import './Styles/HomePage.css'
import LoginPage from './LoginPage'

const HomePage = () => {

  const [nameInput, setNameInput] = useState('')
  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity
  })



  const hotels = useSelector(states => states.hotels)

  const dispatch = useDispatch()

  useEffect(() => {
    const url = 'https://booking-backend-8koz.onrender.com/hotels'
    dispatch(getHotelsThunk(url))
  }, [])

  const hotelsFiltered = hotels?.filter(hotelInfo => {
    //Filter name
    const filterName = hotelInfo.name.toLowerCase().includes(nameInput)
    //Fliter price
    const priceHotel = +hotelInfo.price
    const filterPrice = fromTo.from <= priceHotel && priceHotel <= fromTo.to


    return filterName && filterPrice
  })

  return (
    <div className='HomePage'>
        <div className='HomePage__containerFilter'>
          <div className='HomePage__containerSticky'>
          <FilterName setNameInput={setNameInput} />
          <FilterPrice setFromTo={setFromTo} />
          <FilterCities />
          </div>
        </div>
        <ListHotels hotels={hotelsFiltered} />
    </div>
  )
}

export default HomePage
