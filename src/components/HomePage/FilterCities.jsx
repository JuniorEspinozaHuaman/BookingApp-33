import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { getHotelsThunk } from "../../store/states/hotels.state"
import { useDispatch } from "react-redux"
import './Styles/FilterCities.css'

const FilterCities = () => {
  const url = 'https://booking-backend-8koz.onrender.com/cities'
  const [cities, getCities] = useFetch(url)

  useEffect(() => {
    getCities()
  },[])

  const dispatch = useDispatch()

  const handleFilterCities = (id) => {
    let url = 'https://booking-backend-8koz.onrender.com/hotels'
    if(id !== 'all cities'){
      url = `https://booking-backend-8koz.onrender.com/hotels?cityId=${id}`
      
    }
    dispatch(getHotelsThunk(url))
  }

  return (
    <div className="filterCities">
      <h3 className="filterCities__title">Cities</h3>
      <ul className="filterCities__list">
        <li className="filterCities__item" onClick={() => handleFilterCities('all cities')}>All cities</li>
        {
          cities?.map( city => (
            <li className="filterCities__item" onClick={() => handleFilterCities(city.id)} key={city.id}>{city.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default FilterCities