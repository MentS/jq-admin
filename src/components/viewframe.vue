<template>
  <div>
    <div class="viewFrameworkContainer">
      <div class="console-base-bar">
        <topbar />
        <sidebar @toggle="sidebarToggle" />
      </div>
    </div>
    <div class="viewFramework-body" :class="sidebarMini">
      <router-view/>
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
    };
  },
  methods: {
    sidebarToggle(e) {
      this.sidebar = !e;
    }
  },
  computed: {
    sidebarMini: {
      get() {
        return this.sidebar ? "" : "sidebarmini";
      }
    }
  },
  name: "Viewframe"
};
</script>

<style>

</style>
