import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import './Styles/LoginPage.css'



const LoginPage = () => {

  const {handleSubmit, reset, register} = useForm()

  const { loginUser } = useAuth()

  const submit = data => {
    loginUser(data)
    reset({
      email: '',
      password:''
    })
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  if(localStorage.getItem('token')){
    const { firstName, lastName, email } = JSON.parse(localStorage.getItem('user'))
    return (
      <div>
        <h2>Welcome {firstName + ' ' + lastName}</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    )
  }
 

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
        <button className='loginPage__button'>Enter</button>
      </form>
    </div>
  )
}

export default LoginPage