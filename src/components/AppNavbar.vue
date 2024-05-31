<template>
  <div class="navbar">
    <div class="icon">
      <h2 class="logo">W.Tech.</h2>
    </div>

    <div class="menu">
      <ul>
        <li><router-link to="/">HOME</router-link></li>
        <li><router-link to="/about">ABOUT</router-link></li>
        <li><router-link to="/profile">PROFILE</router-link></li>
        <li><router-link to="/photos">PHOTOS</router-link></li>
        <!-- <li><router-link to="/course-materials">COURSE MATERIALS</router-link></li>
        <li><router-link to="/assessment">ASSESSMENT</router-link></li>
        <li><router-link to="/contact">CONTACT US</router-link></li> -->
      </ul>
    </div>

    <div class="search">
    <input v-model="searchTerm" class="srch" type="search" placeholder="Type To Find">
    <router-link :to="{ name: 'SearchPage', query: { term: searchTerm } }">
      <button class="btn">Find</button>
    </router-link>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: '',
    };
  },
};
</script>