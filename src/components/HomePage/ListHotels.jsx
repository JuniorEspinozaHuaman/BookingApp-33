import HotelCard from './HotelCard'
import './style/ListHotels.css'

const ListHotels = ({hotels}) => {

  return (
    <div className='card-container'>
        {
          hotels?.length !== 0 ? (
            hotels?.map( hotel => (
              <HotelCard
              key={hotel.id}
              hotel={hotel}
              />
          ))
          ) : ('no funciona')
            
        }
    </div>
  )
}

export default ListHotels