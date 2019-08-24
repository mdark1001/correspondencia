<template>
  <section class="section">
    <div class="container">
      <div class="title">{{ documento_id ? 'Agregar un nuevo documento' : 'Editar un documento ' }} </div>
      <div class="card">
        <div class="content">
          <notification :message="message"></notification>
          <div class="columns is-mobile">
            <div
              class="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
              <div class="field ">
                <div class="field-label is-normal is-pulled-left">
                  <label class="label">Nombre del documento</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <p class="control">
                      <input class="input "
                             type="text"
                             v-model="documento.nombre"
                      >
                    </p>
                  </div>
                </div>
              </div>

            </div>
            <div class="column is-full">
              <div class="field ">
                <div class="field-label is-normal is-pulled-left">
                  <label class="label">Documento activo</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <p class="control">
                      <label class="checkbox">
                        <input type="checkbox" name="documento.activo"
                               v-model="documento.activo"
                        >
                      </label>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="columns is-mobile">
            <div class="column is-full">
              <div class="field ">

                <div class="button is-primary" @click="saveTipoDocuemnto()">Agregar</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import DocumentosServices from '../../services/documentos_services'
import notification from '../commun/notification.vue'

const documentosServices = new DocumentosServices()

export default {
  components: { notification },
  name: 'CrearTipoDeDocumento',
  data: function () {
    return {
      'documento_id': false,
      'documento': {
        nombre: '',
        activo: false
      },
      message: {
        show: false,
        msg: '',
        type: 'danger'
      }
    }
  },
  mounted () {
    this.documento_id = this.$route.params.id

    if (this.documento_id) {
      this.getdocumentoById()
    }
  },
  methods: {
    getdocumentoById: function () {

    },
    saveTipoDocuemnto: function () {
      documentosServices.saveTipoDocumentos(this.USER.getToken(),
        this.documento,
        this.documento_id ? undefined : this.documento_id)
        .then(data => {
          this.showNotification(data.message, 'success')
          setTimeout(() => {
            this.$router.push('/documentos/tipos')
          }, 1000)
        }).catch(err => {
          console.log(err)
          this.showNotification(err.message, 'danger')
        })
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
