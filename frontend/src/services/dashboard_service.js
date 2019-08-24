import base from './base'
const axios = require('axios')

class DashboardService {
  constructor () {
    this.url = base.BASE_URL + 'dashboard/'
  }

  getCards () {
    return new Promise((resolve, reject) => {
      axios.get(this.url + 'cards').then((data) => {
        console.log(data)
        resolve(data)
      })
    })
  }
}

export default DashboardService
