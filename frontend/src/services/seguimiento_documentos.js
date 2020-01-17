import base from './base'

class SeguimientoDocumentos {
  constructor () {
    this.url = base.BASE_URL + 'seguimiento/'
  }

  createSeguimientoDocumentacion (token, data) {
    return new Promise((resolve, reject) => {
      base.simpleRequest({
        url: this.url + 'documentos',
        type: 'POST',
        params: data,
        resolve: resolve,
        reject: reject,
        token: token
      })
    })
  }

  getAllDocumentosSeguimientoGroups (token, user_id, params) {
    return new Promise((resolve, reject) => {
      base.simpleRequest({
        url: `${this.url}documentos/${user_id}`,
        type: 'GET',
        params: params,
        resolve: resolve,
        reject: reject,
        token: token
      })
    })
  }
}

export default SeguimientoDocumentos
