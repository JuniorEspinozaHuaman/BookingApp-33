import { useRef } from "react"
import './Styles/FilterName.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const FilterName = ({setNameInput}) => {

    const inputSearch = useRef()
    const handleSubmit = e => {
        e.preventDefault()
        setNameInput(inputSearch.current.value.trim().toLowerCase())
        inputSearch.current.value = ''
    }

  return (
    <form className="filterName" onSubmit={handleSubmit}>
        <input className="filterName__input" ref={inputSearch} type="text" placeholder="Search"/>
        <button className="filterName__button"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
    </form>
  )
}

export default FilterName