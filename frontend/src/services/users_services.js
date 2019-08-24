import base from './base'

class UserServices {
  constructor () {
    this.url = base.BASE_URL + 'user/'
  }

  getAllUser (token, page) {
    return new Promise((resolve, reject) => {
      base.simpleRequest({
        url: this.url + 'users',
        type: 'POST',
        params: {
          page: page
        },
        resolve: resolve,
        reject: reject,
        token: token
      })
    })
  }

  deleteUserById (token, userId) {
    return new Promise((resolve, reject) => {
      base.simpleRequest({
        url: this.url + 'edit/?id=' + userId,
        type: 'patch',
        params: {
          active: false
        },
        resolve: resolve,
        reject: reject,
        token: token
      })
    })
  }
}

export default UserServices
