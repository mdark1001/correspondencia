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
      axios.post(this.url + 'create', data).then(response => resolve(response)).catch(error => reject(error))
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
      return JSON.parse(user)
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
    return false
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
}

export default UserServices
