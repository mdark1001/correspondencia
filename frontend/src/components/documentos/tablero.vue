<template>
  <section class="section">
    <div class="container">
      <h6 class="title">Tablero de documentos</h6>
      <div class="card">

        <div class="content">
          <div class="columns is-mobile is-desktop">
            <div class="column is-full">
              <router-link :to="{name:'CrearDocumento',params:{'id':false}}"
                           :class="'is-pulled-left is-outlined is-small button is-outlet is-success'">
                Agregar un documento
              </router-link>
            </div>
          </div>
          <div class="columns is-mobile is-desktop">
            <div class="column  is-full">
              <TableComponent :headers="campos" :ddata="documentos.data" :showActions="false"></TableComponent>
            </div>
          </div>
        </div>
        <PaginateTable :pages="documentos"></PaginateTable>
      </div>

    </div>
  </section>
</template>
<script>
import TableComponent from '@/components/commun/tables'
import PaginateTable from '@/components/commun/paginate'

import DocumentosServices from '../../services/documentos_services'

const documentosServices = new DocumentosServices()
export default {
  name: 'Documentos',
  components: {
    TableComponent,
    PaginateTable
  },
  data: function () {
    return {
      campos: [
        { name: 'Nombre', value: 'nombre' },
        { name: 'Activo', value: 'active' },
        { name: 'Fecha de creación', value: 'created_at' }
      ],
      documentos: []
    }
  },
  mounted: function () {
    if (this.USER.isAuthenticated()) {
      this.buscarDocumentos(1)
    }
  },
  methods: {
    buscarDocumentos: function (page) {
      documentosServices.getAllDocumentos(this.USER.getToken(), page).then(data => {
        console.log(data)
        this.documentos = data
      }).catch(err => {
        alert(err)
      })
    },
    changePageTable: function (page) {
      this.buscarDocumentos(page)
    }
  }

}
</script>
