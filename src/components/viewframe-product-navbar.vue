<template>
  <div class="viewFramework-product-sidebar">
    <div class="viewFramework-product-navbar">
      <div class="product-nav-stage product-nav-stage-main">
        <div class="product-nav-scene product-nav-main-scene">
          <div class="product-nav-title">
            {{title}}
          </div>
          <div class="product-nav-list">
            <ul>
              <li v-for="item in items">
                <div>
                  <router-link :to="item.subs ? '#': item.link">
                    <div class="nav-icon">
                      <span class="icon-arrow-down" v-show="item.subs"></span>
                    </div>
                    <div class="nav-title">{{item.title}}</div>
                  </router-link>
                </div>
                <ul v-show="item.subs">
                  <li class="" v-for="sub in item.subs">
                    <div>
                      <a :href="sub.link">
                        <div class="nav-icon">
                        </div>
                        <div class="nav-title">{{sub.title}}</div>
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="product-nav-scene product-nav-sub-scene"></div>
      </div>
      <div class="viewFramework-product-navbar-collapse">
        <div class="product-navbar-collapse-inner">
          <div class="product-navbar-collapse-bg"></div>
          <div class="product-navbar-collapse">
            <span class="icon-collapse-left"></span>
            <span class="icon-collapse-right"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="viewFramework-product-navbar-collapse" @click="handleToggleCollapse">
      <div class="product-navbar-collapse-inner">
        <div class="product-navbar-collapse-bg"></div>
        <div class="product-navbar-collapse">
          <span class="icon-collapse-left"></span>
          <span class="icon-collapse-right"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      title: "Product Title",
      items: [],
      collapsed: false
    };
  },
  mounted() {
    this.title = this.products.title || "";
    this.items = this.products.items || [];
  },
  methods: {
    handleToggleCollapse(e) {
      let temp = !this.collapsed;
      this.collapsed = temp;
      this.$emit("toggle", temp);
    }
  }
};
</script>

<style>
.newTopbar .viewFramework-sidebar-mini .viewFramework-product {
  left: 0 !important;
}
.viewFramework-sidebar-mini .viewFramework-product {
  left: 50px;
}
.viewFramework-product-navbar {
  width: 0px;
  float: left;
  background-color: #eaedf1;
  position: absolute;
  top: 0px;
  bottom: 0px;
  z-index: 2;
  overflow: hidden;
  transition: all 0.2s ease;
}
.viewFramework-product-col-1 .viewFramework-product-navbar-bg,
.viewFramework-product-col-1 .viewFramework-product-navbar {
  width: 180px;
}
.viewFramework-product-navbar .product-nav-stage {
  width: 180px;
  overflow: hidden;
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
}
.viewFramework-product-navbar .product-nav-stage .product-nav-scene {
  width: 180px;
  position: absolute;
  top: 0px;
  bottom: 0px;
  transition: position, 0.2s, linear;
}

.viewFramework-product-navbar .product-nav-scene .product-nav-title {
  width: 180px;
  height: 70px;
  line-height: 70px;
  background: #d9dee4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.viewFramework-product-navbar .product-nav-scene.product-nav-sub-scene {
  width: 0;
}

.viewFramework-product-navbar .product-nav-main-scene .product-nav-title {
  font-weight: bold;
  text-indent: 20px;
}

.viewFramework-product-navbar .product-nav-list {
  position: absolute;
  top: 70px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  overflow-y: auto;
  overflow-x: hidden;
}

.viewFramework-product-navbar .product-nav-list .nav-icon {
  width: 30px;
  height: 30px;
  float: left;
  text-align: center;
  font-size: 16px;
  color: #333;
}
.viewFramework-product-navbar .product-nav-list .nav-icon [class^="icon-"] {
  line-height: 20px;
}
.viewFramework-product-navbar .product-nav-list .nav-title {
  width: 138px;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.viewFramework-product-navbar .product-nav-list ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
.viewFramework-product-navbar .product-nav-list li a {
  width: 180px;
  height: 40px;
  line-height: 40px;
  display: block;
  color: #333;
}
.viewFramework-product-navbar .product-nav-list li a {
  height: 30px;
  line-height: 30px;
}
.viewFramework-product-navbar .product-nav-list li.active a {
  background-color: #fff;
}
.viewFramework-product-navbar .product-nav-list li a:hover {
  color: #000;
  cursor: pointer;
}
.viewFramework-product-navbar .product-nav-list ul ul li a .nav-title {
  text-indent: 8px;
}

.viewFramework-product-navbar-collapse {
  position: absolute;
  left: 0;
  top: 50%;
  width: 20px;
  height: 50px;
  z-index: 3;
  transition: all 0.2s ease;
}
.viewFramework-product-navbar-collapse:hover .product-navbar-collapse {
  left: 0;
}
.viewFramework-product-navbar-collapse .product-navbar-collapse > span {
  font-size: 15px;
  line-height: 50px;
  vertical-align: text-top;
}
.viewFramework-product-navbar-collapse .product-navbar-collapse-inner {
  top: -50%;
  position: relative;
  overflow: hidden;
}
.viewFramework-product-navbar-collapse .product-navbar-collapse {
  height: 50px;
  position: relative;
  left: -7px;
  text-align: center;
  cursor: pointer;
  transition: all 0.1s ease, 0.1s ease;
}
.viewFramework-product-navbar-collapse .product-navbar-collapse-bg {
  width: 0;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom: 9px solid transparent;
  border-left: 13px solid #d9dee4;
  border-top: 9px solid transparent;
  transition: all 0.1s ease, 0.1s ease;
}
.viewFramework-product-navbar-collapse:hover .product-navbar-collapse-bg {
  border-bottom: 8px solid transparent;
  border-left: 20px solid #d9dee4;
  border-top: 8px solid transparent;
}
.viewFramework-product-navbar-collapse:hover .product-navbar-collapse {
  left: 0;
}
.viewFramework-product-col-1
  .viewFramework-product-navbar-collapse
  .product-navbar-collapse-bg {
  right: 0;
  left: auto;
  border-bottom: 9px solid transparent;
  border-left: none;
  border-right: 13px solid #f7f7f7;
  border-top: 9px solid transparent;
}
.viewFramework-product-col-1
  .viewFramework-product-navbar-collapse
  .product-navbar-collapse {
  right: -7px;
  left: auto;
}
.viewFramework-product-col-1
  .viewFramework-product-navbar-collapse:hover
  .product-navbar-collapse {
  right: 0;
}
.viewFramework-product-col-1 .viewFramework-product-navbar-collapse {
  left: 160px;
}

.viewFramework-product-col-1
  .viewFramework-product-navbar-collapse:hover
  .product-navbar-collapse-bg {
  border-bottom: 8px solid transparent;
  border-left: none;
  border-right: 20px solid #f7f7f7;
  border-top: 8px solid transparent;
}

.viewFramework-product-col-1 .viewFramework-product-navbar-collapse {
  left: 160px;
}
</style>
