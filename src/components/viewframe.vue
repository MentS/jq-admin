<template>
  <div>
    <div class="viewFrameworkContainer">
      <div class="console-base-bar">
        <topbar/>
        <sidebar @toggle="sidebarToggle"/>
      </div>
      <div class="viewFramework-body" :class="sidebarMine">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

export default {
  components: { Sidebar, Topbar },
  data() {
    return {
      sidebar: true
    }
  },
  methods: {
    
  }
}  
</script>