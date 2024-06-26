import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

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
        toast.success('successful registration', {
          theme: 'dark'
        })
      })
      .catch(err => {
        console.log(err)
        toast.error(`${err.response.data.message}`, {
          theme: 'dark'

        })
      })
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

        if (returnUrl) {
          const { pathname, hash } = JSON.parse(returnUrl)
          navigate(`${pathname}${hash}`)
          setIsLoginOpen(!!token)
        }
        
        toast.success('Successful login', {
          theme: 'dark'
        })

      })
      .catch(err => {
        console.log(err)
        toast.error(`${err.response.data.message}`, {
          theme: 'dark'

        })
        console.log(err.response.data.message);
      })
  }


  return { isLoggedIn, setIsLoggedIn, createNewUser, loginUser, isLoginOpen, setIsLoginOpen }
}

export default useAuth