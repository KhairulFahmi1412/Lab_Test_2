<template>
  <div class="main">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/AppNavbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style src="./assets/style.css"></style>