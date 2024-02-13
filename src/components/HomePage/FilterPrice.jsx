import { useForm } from "react-hook-form"

const FilterPrice = ({setFromTo}) => {

  const {handleSubmit, register, reset} = useForm()

  const submit = data => {
    
    const obj = {
      from: +data.from,
      to: +data.to === 0 ? Infinity : +data.to
    }
  setFromTo(obj)
  }

  return (
    <div>
      <h3>Price</h3>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>From</span>
          <input {...register('from')} type="number" />
        </label>
        <label>
          <span>To</span>
          <input {...register('to')} type="number" />
        </label>
        <button>Apply</button>
      </form>
    </div>
  )
}

export default FilterPrice