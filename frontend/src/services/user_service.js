import axios from 'axios'
import base from './base'

class UserServices {
  constructor () {
    this.url = base.BASE_URL + 'user/'
    this.token = false
    this.setterToken()
  }

  createUser (data) {
    return new Promise((resolve, reject) => {
      axios.post(this.url + 'register', data).then(response => resolve(response)).catch(error => reject(error))
    })
  }

  login (data) {
    return new Promise((resolve, reject) => {
      axios.post(this.url + 'login', data).then(response => resolve(response)).catch(error => reject(error))
    })
  }

  logout () {
    window.localStorage.clear()
  }

  setData (user, token) {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
    this.token = token
  }

  getUser () {
    let user = window.localStorage.getItem('user')
    if (user) {
      let user_data = JSON.parse(user)
      return user_data.data
    }
    return false
  }

  setterToken () {
    this.token = localStorage.getItem('token')
  }

  getToken () {
    return this.token || false
  }

  isAuthenticated () {
    if (this.getToken() !== false && this.getUser() !== false) {
      return true
    }
    return false
  }

  isAdmin () {
    var data = this.getUser()
    if (data) {
      if (data.unload_token === false) {
        return true
      }
    }
    return true
  }

  getUserId () {
    var data = this.getUser()
    if (data) {
      return data.id_user
    }
    return false
  }

  displayName () {
    var data = this.getUser()
    if (data) {
      return data.nombre_completo
    }
    return false
  }

  getFullName () {
    let User = this.getUser()
    return (User.user.name ? User.user.name : '') + ' ' + (User.perfil.ap_paterno ? User.perfil.ap_paterno : '')
  }
}

export default UserServices
