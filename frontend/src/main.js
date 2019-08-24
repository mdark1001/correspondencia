import Vue from 'vue'
import App from './App.vue'
import es from 'vee-validate/dist/locale/es'
import swal from 'sweetalert'

import io from 'socket.io-client'
import base from './services/base'
import UserService from './services/user_service'
import VeeValidate, { Validator } from 'vee-validate'

import router from './router/index'

const USER = new UserService()

require('./assets/sass/main.scss')

Vue.use(VeeValidate)
Vue.prototype.USER = USER
Vue.prototype.$swal = swal
Vue.prototype.$io = io(base.BASE_URL_SOCKET)

Validator.localize('es', es)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  mounted: function () {
    this.$io.emit('register', { usuarioId: USER.getUserId(), display_name: USER.displayName() })
  }
}).$mount('#app')
