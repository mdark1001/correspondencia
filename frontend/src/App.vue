<template>
  <div id="app">
    <div class="container is-fluid">
      <Navbar v-if="USER.isAuthenticated()"/>
       <router-view/>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>
