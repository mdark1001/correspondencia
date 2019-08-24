<template>
  <div class="box">
    <notificacion :message="message"></notificacion>
    <div class="field">
      <label class="label">Asunto:</label>
      <div class="control">
        <input class="input" v-model="documento.asusto" type="text" placeholder="Asunto del documento">
      </div>
    </div>
    <div class="field">
      <label class="label">Tipo de documento</label>
      <div class="control">
        <div class="select">
          <select name="documento.tipo_documento" v-model="documento.tipo_documento">
            <option v-for="option in tipoDocumentos" :key="option._id" :value="option._id">{{ option.nombre
              }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Descripción</label>
      <div class="control">
        <textarea class="textarea" v-model="documento.description" placeholder="Descripción del documento"></textarea>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox" v-model="documento.asignar_seguidores">
          Asignar seguidores
        </label>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-outlined is-link" @click="crearSeguimiento">Agregar</button>
      </div>
      <div class="control">
        <button @click="cancelarDocuemnto" class="button is-outlined is-default">Cancelar</button>
      </div>
    </div>
  </div>
</template>
<script>
  import Notificacion from '../commun/notification.vue'
  import DocumentosServices from '../../services/documentos_services'

  const documentosServices = new DocumentosServices()
  export default {
    nema: 'AgregarSeguimientoDocumento',
    components: {Notificacion},
    mounted: function () {
      documentosServices.getAllDocumentos(this.USER.getToken(), 1).then((data) => {
        console.log(data.data)
        this.tipoDocumentos = data.data.docs
      }).catch((err) => {
        console.log(err)
      })
    },
    data: function () {
      return {
        message: {
          show: true,
          msg: 'Error al procesar su solicitud',
          type: 'danger'
        },
        tipoDocumentos: [],
        documento: {
          asusto: '',
          description: '',
          tipo_documento: false,
          asignar_seguidores: false
        }
      }
    },
    methods: {
      cancelarDocuemnto: function () {
        this.$emit('cancelarDocuemnto')
      },
      crearSeguimiento:function () {
        console.log(this.documento);
      }
    }

  }
</script>
