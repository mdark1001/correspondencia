import JQuery from 'jquery'

let $ = JQuery
export default {
  BASE_URL: 'http://127.0.0.1:3333/',
  BASE_URL_SOCKET: 'http://localhost:3333',
  simpleRequest: function ({ url, type, params, resolve, reject, token }) {
    $.ajax({
      url: url,
      beforeSend: function (request) {
        if (token) {
          request.setRequestHeader('Authorization', 'Bearer ' + token)
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
