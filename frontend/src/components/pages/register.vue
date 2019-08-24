<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Registro</h1>
      <div class="card">
        <div class="notification is-warning" v-show="show_alert">
          <button class="delete"></button>
          <strong>{{ message_alert }}</strong>
        </div>
        <div class="card-content">
          <div class="content">
            <div class="columns">
              <div class="column">
                <div class="field">
                  <label class="label">Nombre</label>
                  <div class="control">
                    <input class="input" v-validate="'required'" name="nombre" v-model="user.nombre" type="text"
                           placeholder="Nombre">
                    <span class="has-text-danger">{{ errors.first('nombre') }}</span>
                  </div>
                </div>
                <div class="columns">
                  <div class="column">
                    <div class="field">
                      <label class="label">Apellido paterno</label>
                      <div class="control">
                        <input class="input"
                               v-validate="'required'" name="Apellido.paterno"
                               v-model="user.apellidop" type="text" placeholder="Apellido paterno">
                        <span class="has-text-danger">{{ errors.first('Apellido.paterno') }}</span>
                      </div>
                    </div>
                  </div>

                  <div class="column">
                    <div class="field">
                      <label class="label">Apellido materno</label>
                      <div class="control">
                        <input class="input"
                               v-validate="'required'" name="Apellido.materno"
                               v-model="user.apellidom" type="text" placeholder="Apellido materno">
                        <span class="has-text-danger">{{ errors.first('Apellido.materno') }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <input class="input"
                           v-validate="'required|email'" name="email"
                           v-model="user.email" type="email" placeholder="Email">
                    <span class="has-text-danger">{{ errors.first('email') }}</span>
                  </div>
                </div>
                <div class="columns">
                  <div class="column">
                    <div class="field">
                      <label class="label">Password</label>
                      <div class="control">
                        <input class="input"
                               name="password"
                               ref="password"
                               v-validate="'required|min:6|max:35'"
                               v-model="user.password" type="password" placeholder="Password">
                        <span class="has-text-danger">{{ errors.first('password') }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="column">
                    <div class="field">
                      <label class="label">Confirmar password</label>
                      <div class="control">
                        <input class="input"
                               v-validate="'required|confirmed:password'"
                               name="confirmar_password"
                               v-model="user.repet_password"
                               type="password"
                               data-vv-as="password"
                               placeholder="Ingrese su contraseña">
                        <span class="has-text-danger">{{ errors.first('confirmar_password') }}</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <footer class="card-foote ">
          <button :class="class_button" @click="crearCuenta()">Registrate</button>
          <button class="button is-pulled-right is-primary has-addons-centered">
            <router-link :to="'/login'">Iniciar sesión</router-link>
          </button>
        </footer>
      </div>
    </div>
  </section>
</template>
<script>

export default {
  name: 'register',
  mounted: function () {
    if (this.USER.isAuthenticated()) {
      this.$router.push('/home')
    }
  },
  data: function () {
    return {
      is_loading: false,
      show_alert: false,
      message_alert: '',
      user: {
        nombre: '',
        apellidop: '',
        apellidom: '',
        email: '',
        password: '',
        repet_password: '',
        acept: true
      }
    }
  },
  computed: {
    class_button: function () {
      return {
        'button': true,
        'is-success': true,
        'is-loading disabled': this.is_loading

      }
    }
  },
  methods: {
    crearCuenta: function () {
      this.is_loading = true
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.USER.createUser(this.user).then((data) => {
            this.is_loading = false
            this.show_alert = true
            this.message_alert = data.data.message
            this.hiddenAlert()
            setTimeout(() => {
              this.$router.push('/login')
            })
          }).catch((err) => {
            console.log(err)
            this.show_alert = true
            this.message_alert = err.message
            this.is_loading = false
            this.hiddenAlert()
          })
        } else {
          this.message_alert = 'Por favor revise los datos'
          this.show_alert = true
          this.is_loading = false
          this.hiddenAlert()
        }
      })
    },
    hiddenAlert: function () {
      setTimeout(() => {
        this.show_alert = false
      }, 3000)
    }
  }
}
</script>
