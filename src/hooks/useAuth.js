import axios from 'axios'
import {  useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'




const useAuth = () => {
  const navigate = useNavigate()


  const token = localStorage.getItem('token')
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token'))
  const returnUrl = localStorage.getItem('returnUrl')

  const [isLoginOpen, setIsLoginOpen] = useState(true)

  useEffect(() => {

    setIsLoggedIn(false)
    // setIsLoginOpen(true)

  }, [])

  //Register
  const createNewUser = data => {
    const url = 'https://booking-backend-8koz.onrender.com/users'
    axios.post(url, data)
      .then(res => {
        console.log(res.data)
        navigate('/login')
      })
      .catch(err => console.log(err))
  }

  //Login
  const loginUser = (data) => {
    const url = 'https://booking-backend-8koz.onrender.com/users/login'
    axios.post(url, data)
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', JSON.stringify(res.data.user))
        localStorage.removeItem('returnUrl')

        // setIsLoggedIn(true)
        // setIsLoginOpen(false)
        
        if (returnUrl) {
          const { pathname, hash } = JSON.parse(returnUrl)
          navigate(`${pathname}${hash}`)
          setIsLoginOpen(!!token)
          
        } 
        // else {
        //   const { pathname, hash } = JSON.parse(returnUrl)
        //   navigate(`${pathname}${hash}`)
        //   setIsLoggedIn(!!token)
          
        // }
        
      })
      .catch(err => console.log(err))
  }


  return { isLoggedIn, setIsLoggedIn, createNewUser, loginUser, isLoginOpen, setIsLoginOpen }
}

export default useAuth