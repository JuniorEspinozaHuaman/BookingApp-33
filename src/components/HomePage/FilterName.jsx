import { useRef } from "react"

const FilterName = ({setNameInput}) => {

    const inputSearch = useRef()
    const handleSubmit = e => {
        e.preventDefault()
        setNameInput(inputSearch.current.value.trim().toLowerCase())
        inputSearch.current.value = ''
    }

  return (
    <form onSubmit={handleSubmit}>
        <input ref={inputSearch} type="text" />
        <button>Search</button>
    </form>
  )
}

export default FilterName