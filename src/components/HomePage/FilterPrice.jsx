import { useForm } from "react-hook-form"
import { faMagnifyingGlassDollar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './Styles/FilterPrice.css'

const FilterPrice = ({ setFromTo }) => {

  const { handleSubmit, register, reset } = useForm()

  const submit = data => {

    const obj = {
      from: +data.from,
      to: +data.to === 0 ? Infinity : +data.to
    }
    setFromTo(obj)
  }

  return (
    <div className="filterPrice">
      <h3 className="filterPrice__title">Price</h3>
      <form className="filterPrice__form" onSubmit={handleSubmit(submit)}>
        <label className="filterPrice__label">
          <span className="filterPrice__subtitle">From</span>
          <input className="filterPrice__input" {...register('from')} type="number" placeholder="min" />
        </label>
        <label className="filterPrice__label">
          <span className="filterPrice__subtitle">To</span>
          <div className="filterPrice__containerButton">
            <input className="filterPrice__input filterPrice__input--button" {...register('to')} type="number" placeholder="max" />
            <button className="filterPrice__button">{<FontAwesomeIcon icon={faMagnifyingGlassDollar} />}</button>
          </div>
        </label>

      </form>
    </div>
  )
}

export default FilterPrice