import JQuery from 'jquery'

let $ = JQuery
export default {
  BASE_URL: 'http://localhost:3977/api/',
  BASE_URL_SOCKET: 'http://localhost:3000/',
  simpleRequest: function ({ url, type, params, resolve, reject, token }) {
    $.ajax({
      url: url,
      beforeSend: function (request) {
        if (token) {
          request.setRequestHeader('Authorization', token)
        }
        request.setRequestHeader('Access-Control-Allow-Origin', '*')
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      },
      type: type,
      data: params,
      dataType: 'json',
      success: function (data) {
        resolve(data)
      },
      error: function (datosError) {
        console.log(datosError)
        console.log('Error Data ---->', datosError)
        reject(datosError)
      }
    })
  }
}
