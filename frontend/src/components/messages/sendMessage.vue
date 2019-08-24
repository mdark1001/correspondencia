<template>
  <div class="field has-addons">
    <div class="control is-expanded">
      <input class="input is-large"
             name="message" v-model="message"
             type="text" placeholder="Enviar mensaje"/>
    </div>
    <div class="control">
      <button class="button is-large is-info" @click="sendMessage">
        Send
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      message: ''
    }
  },
  methods: {
    sendMessage: function () {
      this.$emit('sendMessage', {
        message: this.message,
        userData: {
          userId: this.USER.getUserId(),
          display_name: this.USER.displayName()
        }
      })
      this.message = ''
    }
  }
}
</script>
