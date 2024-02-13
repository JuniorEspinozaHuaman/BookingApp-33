import axios from 'axios'

const useAuth = () => {
  //Register
  const createNewUser = data => {
    const url = 'https://hotels-api.academlo.tech/users'
    axios.post(url, data)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }

  //Login
  const loginUser = (data) => {
    const url = 'https://hotels-api.academlo.tech/users/login'
    axios.post(url, data)
    .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', JSON.stringify(res.data.user))
       
    })
    .catch(err => console.log(err))
  }
  return { createNewUser, loginUser}
}

export default useAuth