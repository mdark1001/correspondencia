<template>
  <section class="hero is-fullheight">
    <div class="hero-head">
      <header class="hero is-link is-bold">
        <div class="hero-body">
          <div class="container">
            <p class="title">
              Mensajes/Avisos
            </p>
            <p class="subtitle">
            </p>
          </div>
        </div>
      </header>
    </div>
    <div class="columns is-mobile is-desktop is-tablet">
      <div class="column is-full container-chat" id="containerChat">

        <Message v-for="(i,index ) in mensajes"
                 :key="index"
                 :message="i.message"
                 :styleMessage="{
                      'text-align': i.message.userData.userId == USER.getUserId() ? 'right':'left'
                     }"
                 :pulled="[i.message.userData.userId == USER.getUserId() ? 'is-pulled-right':'is-pulled-left']"
                 :classNameMessage="[i.message.userData.userId == USER.getUserId() ? 'is-primary':'is-link']"
        ></Message>

      </div>
    </div>
    <div class="columns is-mobile is-desktop is-tablet">
      <div class="column is-full is-12">
        <footer class="section is-small">
          <send-message v-on:sendMessage="sendMessage"></send-message>
        </footer>
      </div>
    </div>
  </section>
</template>
<script>
import Message from './messages.vue'
import SendMessage from './sendMessage.vue'

export default {
  name: 'ChatMessage',
  components: { Message, SendMessage },
  data: function () {
    return {
      channel: null,
      mensajes: []
    }
  },
  mounted: async function () {
    this.channel = await this.$io.channel('chat').connect()
    console.log(this.channel)
    // this.channel.on('error', this.errorChatHandle)
    this.channel.on('message', (data) => {
      this.mensajes.push(data)
      this.scrollToEnd()
    })
  },
  methods: {
    sendMessage: function (message) {
      // this.$io.emit('message', message)
      this.$io.getSubscription('chat').emit('message', {
        username: '',
        body: message
      })
      message.userData.display_name = 'Me'
      this.mensajes.push({
        message: message
      })
      this.scrollToEnd()
    },

    scrollToEnd: function () {
      var container = this.$el.querySelector('#containerChat')

      container.scrollTop = container.scrollHeight
      console.log(container.scrollTop)
    },
    errorChatHandle: function () {
      alert('#error')
    }
  }
}
</script>
<style scoped="">
  div.container-chat {
    background-color: hsl(0, 0%, 86%);
  }

  @media (max-width: 600px) {

    div.container-chat {
      height: 400px !important;
      overflow-y: scroll;
    }
  }

  @media (min-width: 700px) {
    div.container-chat {
      height: 800px !important;
      overflow-y: scroll;
    }
  }

</style>
