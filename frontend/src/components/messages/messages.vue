<template>
  <div :style="styleMessage" class="box message-chat" :class="pulled">
      <span class="tag " :class="classNameMessage">
        {{ message.userData.display_name }}
      </span>
    <br>
    <p class="is-size-5" :style="styleMessage">
      {{message.message}}
    </p>

  </div>
</template>
<script>
export default {
  props: ['message', 'classNameMessage', 'styleMessage', 'pulled'],
  data: function () {
    return {}
  }
}
</script>
<style scoped="">
  @media (max-width: 600px) {
    div.message-chat {
      width: 90% !important;
    }
  }

  @media (min-width: 700px) {
    div.message-chat {
      width: 100% !important;
    }
  }

</style>
