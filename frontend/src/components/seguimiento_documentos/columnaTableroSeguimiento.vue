<template lang="html">
             <div class="column is-desktop-4 is-12-mobile ">
                <article class="message" :class="columna.className">
                  <div class="message-header">
                    <p>{{ columna.title}}</p>
                    <button class="delete" aria-label="delete"></button>
                  </div>
                  <div class="message-body">
                 <card-documento-seguimento v-for="i in 5" :key="i"></card-documento-seguimento>
                  </div>
                </article>
              </div>
</template>

<script lang="js">
import cardDocumentoSeguimento from './cardDocumentoSeguimento.vue'
export default {
  name: 'columna-tablero-seguimiento',
  props: ['columna', 'documentos'],
  components: { cardDocumentoSeguimento },
  mounted () {

  },
  data () {
    return {

    }
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style scoped lang="scss">
  .columna-tablero-seguimiento {

  }
</style>
