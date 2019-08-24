<template>
  <section class="hero  is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Inicio de sesión</h3>
          <div class="box">
            <figure class="avatar">
              <img src="/image/user.png" width="100px" height="300px">
            </figure>
            <form>
              <notification :message="message"></notification>

              <div class="field">
                <div class="control">
                  <input class="input is-large"
                         name="email"
                         v-model="user.email"
                         type="email" placeholder="Email" autofocus="">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input class="input is-large"
                         name="password"
                         v-model="user.password"
                         type="password" placeholder="Password">
                </div>
              </div>
              <button type="button" class="button is-block is-info is-large is-fullwidth"
                      :class="{'is-loading':is_loading}" @click="inicarSesion()">
                Iniciar
              </button>
            </form>
          </div>
          <p class="has-text-grey">
            <router-link :to="'/register'">Registrate</router-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import notification from '../commun/notification.vue'
export default {
  name: 'Login',
  components: { notification },
  mounted: function () {
    if (this.USER.isAuthenticated()) {
      this.$router.push('/home')
    }
  },
  data: function () {
    return {
      is_loading: false,
      message: {
        show: false,
        msg: '',
        type: 'danger'
      },
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    inicarSesion: function () {
      if (this.user.email && this.user.password) {
        this.USER.login({
          email: this.user.email,
          password: this.user.password,
          gethash: true
        }).then(data => {
          console.log(data)
          this.is_loading = false
          this.USER.setData(data.data.user_data, data.data.token)
          this.$router.push('/home')
        }).catch(error => {
          console.log(error.response.data.message)
          this.showNotification(error.response.data.message, 'danger')
        })
      } else {
        this.showNotification('Por favor revise los datos de usuario y contraseña', 'danger')
      }
    },
    showNotification: function (message, type) {
      this.message.show = true
      this.message.msg = message
      this.message.type = type
      setTimeout(() => {
        this.message.show = false
      }, 3000)
    }
  }
}
</script>
