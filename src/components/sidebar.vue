<template>
  <div class="sidebar" :class="show">
    <div class="sidebar-wrapper ">
      <div class="sidebar-content">
        <div class="sidebar-inner">
          <div class="sidebar-fold topbar-sidebar-fold" @click="toggleSidebar"></div>
          <div class="sidebar-nav" v-for="nav in navData" :class="{'sidebar-nav-active': nav.active}">
            <div class="sidebar-title sidebar-trans" @click="toggleSidebarItem(nav)">
              <div class="sidebar-title-inner">
                <span class="sidebar-title-icon topbar-sidebar-arrow-right"></span>
                <span class="sidebar-title-text">{{nav.title}}</span>
              </div>
            </div>
            <ul class="sidebar-trans" :style="{ 'max-height': nav.active ? nav.items.length * 40 +'px' : 0  }">
              <li class="nav-item" v-for="sub in nav.items">
                <a :href="sub.href" class="sidebar-trans" :target="sub.target || '_self'">
                  <div class="nav-icon sidebar-trans">
                    <span :class="sub.icon"></span>
                  </div>
                  <span class="nav-title">{{sub.title}}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import json from "./sidebar.json";

export default {
  data() {
    return {
      mini: false,
      navData: []
    };
  },
  computed: {
    show: {
      get() {
        return this.mini ? "sidebar-mini" : "";
      }
    }
  },
  created() {
    this.navData = json;
  },
  mounted() {
    console.log(json);
  },
  methods: {
    toggleSidebar() {
      let temp = !this.mini;
      this.mini = temp;
      this.$emit("toggle", temp);
    },
    toggleSidebarItem(nav) {
      nav.active = !nav.active;
    }
  }
};
</script>

<style>
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: #333744;
  z-index: 109;
}

.sidebar.no-topbar {
  top: 0;
}

.sidebar {
  top: 50px;
}

.sidebar a,
.sidebar li,
.sidebar p,
.sidebar span {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  letter-spacing: 0.02em;
}

.sidebar .sidebar-content {
  width: 180px;
  height: 100%;
  overflow: auto;
  overflow-x: hidden;
  overflow-y: hidden;
}

.sidebar-mini .sidebar-content {
  width: 50px !important;
  display: block;
}

.sidebar .sidebar-inner {
  position: relative;
}

.sidebar .sidebar-trans {
  transition: max-height 0.12s ease;
}

.sidebar .sidebar-fold:hover {
  background: #4a5064;
  color: #fff;
}

.sidebar .sidebar-fold {
  height: 30px;
  width: 100%;
  background: #4a5064;
  color: #aeb9c2;
  text-align: center;
  line-height: 30px !important;
  font-size: 12px;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
}

.sidebar .sidebar-nav {
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

.sidebar .sidebar-nav .sidebar-title {
  height: 40px;
  background: #42485b;
  color: #fff;
  line-height: 40px;
  position: relative;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
}

.sidebar .sidebar-nav .sidebar-title:hover {
  background: #00c1de;
}

.sidebar .sidebar-nav-active .sidebar-title-icon {
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}

.sidebar .sidebar-nav .sidebar-title-icon {
  display: inline-block;
  margin: 0 8px 0 20px;
  vertical-align: middle;
  transition: -webkit-transform 0.12s;
  transition: transform 0.12s;
  transition: transform 0.12s, -webkit-transform 0.12s;
  -o-transition: -o-transform 0.12s;
  -ms-transition: -ms-transform 0.12s;
  -moz-transition: -moz-transform 0.12s;
  -webkit-transition: -webkit-transform 0.12s;
}

.sidebar .sidebar-nav ul {
  width: 200px;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow-y: scroll;
  overflow-x: hidden;
}

.sidebar-mini .sidebar-content .sidebar-nav ul {
  width: 70px;
}

.sidebar .sidebar-nav li a {
  display: block;
  width: 180px;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
}

.sidebar .sidebar-nav li a:hover {
  background: #4a5064;
}

.sidebar-mini .sidebar-content .sidebar-nav ul li a {
  width: 50px;
}

.sidebar .sidebar-nav .nav-icon {
  width: 50px;
  text-align: center;
  font-size: 16px;
  float: left;
  color: #aeb9c2;
  height: 40px;
  line-height: 40px;
}

.sidebar .sidebar-nav .nav-title {
  float: left;
  overflow: hidden;
  color: #fff;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
  width: 130px;
}

.sidebar .sidebar-manage {
  vertical-align: middle;
  position: absolute;
  height: 40px;
  width: 40px;
  right: 0;
  top: 0;
  display: none;
}

.sidebar .sidebar-manage a {
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  color: #fff;
  text-decoration: none;
}
</style>
