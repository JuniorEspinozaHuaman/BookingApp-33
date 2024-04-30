import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import './Styles/RegisterPage.css'

const RegisterPage = () => {

  const { handleSubmit, reset, register } = useForm()

  const { createNewUser } = useAuth()

  const submit = data => {
    createNewUser(data)
    reset({
      firstName: '',
      lastName: '',
      password: '',
      email: '',
      gender: 'other'
    })
  }


  return (
    <div className='registerPage'>
      <div className='registerPage__container'>
        <h2 className='registerPage__title'>Register</h2>
        <form className='registerPage__form' onSubmit={handleSubmit(submit)}>
          <label className='registerPage__label'>
            <span className='registerPage__subtitle'>First Name</span>
            <input className='registerPage__input' {...register('firstName')} type="text" />
          </label>
          <label className='registerPage__label'>
            <span className='registerPage__subtitle'>Last Name</span>
            <input className='registerPage__input' {...register('lastName')} type="text" />
          </label>
          <label className='registerPage__label'>
            <span className='registerPage__subtitle'>Email</span>
            <input className='registerPage__input' {...register('email')} type="email" />
          </label>
          <label className='registerPage__label'>
            <span className='registerPage__subtitle'>Password</span>
            <input className='registerPage__input' {...register('password')} type="password" />
          </label>
          <label className='registerPage__label'>
            <span className='registerPage__subtitle'>Gender</span>
            <select className='registerPage__select' {...register('gender')}>
              <option value="other">other</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </label>
          <button className='registerPage__button'>Sign up</button>
        </form>
      </div>

    </div>
  )
}

export default RegisterPage