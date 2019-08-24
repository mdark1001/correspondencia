<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="/image/icon.svg">
      </a>

      <a role="button" class="navbar-burger burger" :class="{'is-active':active_menu}"
         aria-label="menu" aria-expanded="false"
         @click="active_menu=!active_menu"
         data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active':active_menu}">
      <div class="navbar-start">
        <router-link :to="'/home'" :class="'navbar-item'">Inico</router-link>
        <router-link :to="'/mensajes'" :class="'navbar-item'">Mensajes</router-link>
        <router-link :to="'/documentos'" :class="'navbar-item'">Documentación</router-link>
        <div class="navbar-item has-dropdown is-hoverable" v-if="USER.isAdmin()">
          <a class="navbar-link">
            Configuración
          </a>

          <div class="navbar-dropdown">
            <router-link :to="'/usuarios'" :class="'navbar-item'">Usuarios</router-link>
            <router-link :to="'/documentos/tipos'" :class="'navbar-item'">Tipo de documentos</router-link>
            <a class="navbar-item">
              Seguimiento
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Notificación
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="navbar-item has-dropdown is-hoverable ">
            <a class="navbar-link">
              {{ user.nombre_completo }}
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item" @click="singout()">
               <span class="icon has-text-warning  is-medium">
                                <i class="fa fa-sign-out" aria-hidden="true"></i>
                               </span>
                Salir
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Navbar',
  mounted: function () {
    if (!this.USER.isAuthenticated()) {
      this.$router.push('/login')
    } else {
      this.user = this.USER.getUser()
    }
  },
  data: function () {
    return {
      user: {},
      active_menu: false
    }
  },
  methods: {

    singout: function () {
      this.USER.logout()
      this.$router.push('/login')
    }
  }

}
</script>
