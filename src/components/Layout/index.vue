<template>
  <div class="layout">
   
      <sidebar></sidebar>
      <div class="main-container">
        <navbar></navbar>
        <app-main></app-main>
      </div>
    
  </div>
</template>

<script>
import Sidebar from './sidebar.vue'
import Navbar from './navbar.vue'
import AppMain from './appmain.vue'

export default {
  components: { Sidebar, Navbar, AppMain }
}
</script>

<style scoped>
.layout {
    position: relative;
    height: 100%;
    width: 100%;
}

.layout:after {
    content: "";
    display: table;
    clear: both
}


</style>
