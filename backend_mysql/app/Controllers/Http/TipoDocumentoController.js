'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with tipodocumentos
 */

const tipoDocumento = use('App/Models/TipoDocumento')

class TipoDocumentoController {
  /**
   * Show a list of all tipodocumentos.
   * GET tipodocumentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({request, response, view}) {
    let data = await tipoDocumento.query().orderBy('id', 'desc').paginate(request.get('page'))
    return response.status(200).json(data)
  }

  /**
   * Render a form to be used for creating a new tipodocumento.
   * GET tipodocumentos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({request, response, view}) {
  }

  /**
   * Create/save a new tipodocumento.
   * POST tipodocumentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({request, response}) {
    try {
      let {nombre} = request.all()
      let tipodocumento = await tipoDocumento.create({nombre});
      return response.json(tipodocumento)
    } catch (e) {
      console.log(e);
      return response.json({
        message: 'Error al procesar su solicitud'
      })
    }
  }

  /**
   * Display a single tipodocumento.
   * GET tipodocumentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({params, request, response, view}) {
  }

  /**
   * Render a form to update an existing tipodocumento.
   * GET tipodocumentos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({params, request, response, view}) {
  }

  /**
   * Update tipodocumento details.
   * PUT or PATCH tipodocumentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({params, request, response}) {
    let tipodocumento = await tipoDocumento.find(params.id);
    tipodocumento.nombre = request.input('nombre');
    tipodocumento.activo = request.input('activo');
    await  tipodocumento.save();
    return response.json(tipodocumento);
  }

  /**
   * Delete a tipodocumento with id.
   * DELETE tipodocumentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({params, request, response}) {
  }

  async getAll({request, response}) {

  }

}

module.exports = TipoDocumentoController
