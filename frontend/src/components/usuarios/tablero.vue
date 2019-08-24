<template>
  <section class="section">
    <div class="container">
      <h4 class="title">Tablero de usuarios</h4>
      <div class="card">
        <div class="content">
          <TableComponent
            :headers="campos"
            :ddata="usuarios.docs"
            v-on:executeAction="executeAction"
            :showActions="actiosTable"></TableComponent>
        </div>
        <PaginateTable :pages="usuarios"></PaginateTable>
      </div>

    </div>
  </section>
</template>
<script>
import TableComponent from '@/components/commun/tables'
import PaginateTable from '@/components/commun/paginate'

import UserService from '../../services/users_services'

const usuarioServices = new UserService()
export default {
  components: { TableComponent, PaginateTable },
  mounted: function () {
    if (this.USER.isAuthenticated() && this.USER.isAdmin()) {
      this.buscarUsuarios(1)
    } else {
      this.$router.push('/')
    }
  },

  data: function () {
    return {
      campos: [
        { name: 'Nombre', value: 'nombre' },
        { name: 'Apellido Paterno', value: 'apellidop' },
        { name: 'Apellido Materno', value: 'apellidom' }
      ],
      actiosTable: [
        {
          name: 'edit',
          class_name: 'is-primary',
          icon: 'fa fa-edit',
          key: '_id'
        },
        {
          name: 'delete',
          class_name: 'is-danger',
          icon: 'fa fa-trash',
          key: '_id'
        },
        {
          name: 'active',
          class_name: 'is-success',
          icon: 'fa fa-check',
          key: '_id'
        }
      ],
      usuarios: []
    }
  },
  methods: {
    changePageTable: function (page) {
      this.buscarUsuarios(page)
    },
    buscarUsuarios (page) {
      usuarioServices.getAllUser(this.USER.getToken(), page).then(data => {
        console.log(data)
        this.usuarios = data.data
      }).catch(err => {
        console.log(err)
      })
    },
    executeAction (action) {
      if (action) {
        switch (action.actionName) {
          case 'edit':
            console.log(action)
            this.$router.push('/usuarios-edit/' + action.params)
            break
          case 'delete':
            this.$swal({
              title: 'Atención',
              text: '¿Desea eliminar el usuario?',
              icon: 'warning',
              buttons: true,
              dangerMode: true
            }).then((data) => {
              if (data) {
                this.deleteUsuarioById(action.params)
              }
            }).catch((err) => {
              console.log(err)
            })
            break
        }
      }
    },
    deleteUsuarioById: function (userId) {
      usuarioServices.deleteUserById(this.USER.getToken(), userId).then((data) => {
        console.log(data)
      }).catch((errorHandler) => {
        console.log(errorHandler)
      })
    }

  }

}
</script>
