<template>
  <div :class="notification_class" v-show="message.show">
    <button class="delete" @click="message.is_show=false"></button>
    <strong>{{ message.msg }}</strong>
  </div>
</template>
<script>
export default {
  props: ['message'],
  methods: {},
  computed: {
    notification_class: function () {
      return {
        'notification': true,
        'is-waring': this.message.type === 'warning',
        'is-link': this.message.type === 'link',
        'is-danger': this.message.type === 'danger',
        'is-success': this.message.type === 'success'
      }
    }
  }

}
</script>
