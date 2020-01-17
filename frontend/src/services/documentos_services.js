import base from './base'

class DocumentosServices {
  constructor () {
    this.url = base.BASE_URL
  }

  getAllDocumentos (token, page) {
    return new Promise((resolve, reject) => {
      base.simpleRequest({
        url: this.url + 'tipodocumento',
        type: 'GET',
        params: {
          page: page
        },
        resolve: resolve,
        reject: reject,
        token: token
      })
    })
  }

  saveTipoDocumentos (token, data, documentoId) {
    let resultData = Object.assign({}, data)
    let methodType = 'POST'

    if (documentoId) {
      resultData['documento_id'] = documentoId
      methodType = 'PUT'
    }

    return new Promise((resolve, reject) => {
      base.simpleRequest({
        url: this.url + 'tipodocumento',
        type: methodType,
        params: resultData,
        resolve: resolve,
        reject: reject,
        token: token
      })
    })
  }
}

export default DocumentosServices
