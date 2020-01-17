'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TipoDocumentoSchema extends Schema {
  up() {
    this.create('tipo_documentos', (table) => {
      table.increments()
      table.string('nombre', 255).notNullable().unique()
      table.boolean('activo')
      table.timestamps()
    })
  }

  down() {
    this.drop('tipo_documentos')
  }
}

module.exports = TipoDocumentoSchema
