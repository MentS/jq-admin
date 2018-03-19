<template>
  <div class="viewFramework-product" :class="navbarOpen">
    <viewframe-product-body>
      <slot name="body"></slot>
    </viewframe-product-body>
    <router-view></router-view>
  </div>
</template>

<script>
import ViewframeProductBody from "./viewframe-product-body";
import ViewframeProductNavbar from "./viewframe-product-navbar";

export default {
  components: { ViewframeProductBody, ViewframeProductNavbar },
  data() {
    return {
      products: {
        title: "asdasd"
      },
      productNavbarOpen: true,
      productNavbarData: {
        title: "",
        items: []
      }
    };
  },
  computed: {
    navbarOpen: {
      get() {
        return this.productNavbarOpen ? "viewFramework-product-col-1" : "";
      }
    }
  },
  methods: {
    handleProductNavbarToggle(e) {
      this.productNavbarOpen = !e;
    }
  }
};
</script>

<style>
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
</style>
