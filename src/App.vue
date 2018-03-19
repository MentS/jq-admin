<template>
  <div>
    <viewframe>
    </viewframe>
  </div>
</template>

<script>
import "./assets/bootstrap.css";
import "./assets/aliyun-console-font.css";
import "./assets/topbar-sidebar-iconfont.css";
import Viewframe from "@/components/viewframe";

export default {
  components: { Viewframe },
  name: "App"
};
</script>

<style>
body {
  font-size: 12px;
}
.viewFramework-body {
  position: absolute;
  top: 50px;
  bottom: 0px;
  right: 0;
  left: 180px;
  background-color: #000;
  z-index: 100;
}
.viewFramework-body.sidebarmini {
  left: 50px;
  right: 0px;
  width: auto;
}
.viewFramework-product {
  width: auto;
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  overflow: hidden;
  background: #fff;
}
.viewFramework-product-body {
  position: absolute;
  width: auto;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  overflow: hidden;
  overflow-y: auto;
  transition: all 0.2s ease;
}
.viewFramework-product-col-1 .viewFramework-product-body {
  left: 180px;
}
.viewFramework-product-navbar-collapse .icon-collapse-left {
  display: none;
}

.viewFramework-product-navbar-collapse .icon-collapse-right {
  display: inline;
}
.viewFramework-product-col-1
  .viewFramework-product-navbar-collapse
  .icon-collapse-left {
  display: inline;
}

.viewFramework-product-col-1
  .viewFramework-product-navbar-collapse
  .icon-collapse-right {
  display: none;
}
.icon-collapse-left:before {
  content: "\e6fa";
}
.icon-collapse-right:before {
  content: "\e6fb";
}
.console-base-bar * {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
