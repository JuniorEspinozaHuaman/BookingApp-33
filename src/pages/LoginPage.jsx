import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'



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
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>Email</span>
          <input {...register('email')} type="email" />
        </label>
        <label>
          <span>Password</span>
          <input {...register('password')} type="password" />
        </label>
        <button>submit</button>
      </form>
    </div>
  )
}

export default LoginPage