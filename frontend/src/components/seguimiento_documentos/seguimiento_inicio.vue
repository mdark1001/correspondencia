<template>
  <div>
    <section class="hero">
      <div class="hero-head">
        <header class="hero is-link is-bold">
          <div class="hero-body">
            <div class="container">
              <p class="title">
                Seguimiento a documentos
              </p>
              <p class="subtitle">
              </p>
            </div>
          </div>
        </header>
      </div>
      <div class="columns">
        <div class="column is-narrow " :class="[mostarFormulario ? '':'is-hidden']">
          <alta-seguimiento-documento v-on:cancelarDocuemnto="mostarFormulario=false"></alta-seguimiento-documento>
        </div>
        <div class="column">
          <div class="box">
            <section class="hero">
              <div class="hero-body">
                <div class="container">
                  <div class="card">
                    <div class="card-content">
                      <div class="content">
                        <div class="control has-icons-left has-icons-right">
                          <input class="input is-large" type="search"/>
                          <span class="icon is-medium is-left">
                            <i class="fa fa-search"></i>
                        </span>
                          <span class="icon is-medium is-right">
                            <i class="fa fa-empire"></i>
                        </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div class="columns is-mobile is-multiline cards-container" id="sectioncontainer">
              <columna-tablero-seguimiento :columna="en_borrador"></columna-tablero-seguimiento>
              <columna-tablero-seguimiento :columna="en_proceso"></columna-tablero-seguimiento>
              <columna-tablero-seguimiento :columna="en_hecho"></columna-tablero-seguimiento>

            </div>

            <div class="columns is-mobile is-centered">
              <div class="column is-half is-narrow"></div>
            </div>

          </div>
        </div>
        <fab
          :position="'bottom-right'"
          :bg-color="bgColor"
          :actions="fabActions"
          @AgregarDocumento="AgregarDocumento"
          @alertMe="alert"
        ></fab>
      </div>

    </section>

  </div>

</template>
<script>
import AltaSeguimientoDocumento from './alta_seguimiento_documento.vue'
import columnaTableroSeguimiento from './columnaTableroSeguimiento.vue'
import fab from 'vue-fab'
import DocumentosSeguimientoServices from '../../services/seguimiento_documentos'

const documentosSeguimientoServices = new DocumentosSeguimientoServices()
export default {
  components: { AltaSeguimientoDocumento, fab, columnaTableroSeguimiento },
  data: function () {
    return {
      mostarFormulario: true,
      bgColor: '#00abbc',
      position: 'top-right',
      fabActions: [
        {
          name: 'AgregarDocumento',
          icon: 'plus_one'
        },
        {
          name: 'alertMe',
          icon: 'add_alert'
        }
      ],
      en_proceso: {
        'title': 'En proceso',
        'className': 'is-primary'
      },
      en_borrador: {
        'title': 'Borrador',
        'className': 'is-dark'
      },
      en_hecho: {
        'title': 'Hecho',
        'className': 'is-success'
      }

    }
  },
  mounted: function () {
    if (!this.USER.isAuthenticated()) {
      this.$router.push('/login')
    }
    documentosSeguimientoServices.getAllDocumentosSeguimientoGroups(this.USER.getToken(), this.USER.getUserId(), {
      page: 1
    }).then((data) => {

    }).catch((err) => {
      console.log(err)
    })
  },
  methods: {
    AgregarDocumento () {
      this.mostarFormulario = !this.mostarFormulario
    },
    alert () {
      alert('Clicked on alert icon')
    }
  }
}
</script>
