'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PerfilSchema extends Schema {
  up () {
    this.create('perfils', (table) => {
      table.increments();
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('ap_paterno')
      table.string('ap_materno')
      table.timestamps();
    })
  }

  down () {
    this.drop('perfils')
  }
}

module.exports = PerfilSchema
