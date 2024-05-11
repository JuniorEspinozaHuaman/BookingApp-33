import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import './Styles/LoginPage.css'



const LoginPage = () => {

  // const [prueba, setPrueba] = useState(tokens)

  const { handleSubmit, reset, register } = useForm()

  const { loginUser, setIsLoggedIn, setIsLoginOpen, isLoginOpen } = useAuth()

  const submit = data => {
    loginUser(data)
    reset({
      email: '',
      password: ''
    })
    // setIsLoggedIn(localStorage.getItem('token'))
    // localStorage.getItem('token')? setisLoginOpen(false): setisLoginOpen(true)
  }
  
  const handlePrueba = () => {
    // localStorage.getItem('token')? setIsLoggedIn(true): setIsLoggedIn(true)
    
  }
  useEffect(() => {
    setIsLoginOpen(localStorage.getItem('token'))
  },[loginUser])

  return (
    <div className='loginPage'>

      <form className='loginPage__form' onSubmit={handleSubmit(submit)}>
        <h3 className='loginPage__title'>Login</h3>
        <label className='loginPage__label'>
          <span className='loginPage__subtitle'>Email</span>
          <input className='loginPage__input' {...register('email')} type="email" />
        </label>
        <label className='loginPage__label'>
          <span className='loginPage__subtitle'>Password</span>
          <input className='loginPage__input' {...register('password')} type="password" />
        </label>
        <button className='loginPage__button' onClick={handlePrueba}>Enter</button>
      </form>
    </div>
  )
}

export default LoginPage