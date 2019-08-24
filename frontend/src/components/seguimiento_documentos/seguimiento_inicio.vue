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
            <p class="title is-5">Flexible column</p>
            <p class="subtitle">This column will take up the remaining space available.</p>
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
import fab from 'vue-fab'

export default {
  components: { AltaSeguimientoDocumento, fab },
  data: function () {
    return {
      mostarFormulario: true,
      bgColor: '#FF0C0C',
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
      ]
    }
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
