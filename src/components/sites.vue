<template>
  <div class="viewFramework-product" :class="navbarOpen">
    <viewframe-product-navbar @toggle="handleProductNavbarToggle" :products="data" slot="navbar" />
    <viewframe-product-body :title="title">
    </viewframe-product-body>
  </div>
</template>

<script>
import ViewframeProduct from "./viewframe-product";
import ViewframeProductNavbar from "./viewframe-product-navbar";
import ViewframeProductBody from "./viewframe-product-body";
import products from "./sites/product.json";

export default {
  components: {
    ViewframeProduct,
    ViewframeProductNavbar,
    ViewframeProductBody
  },
  name: "SiteIndex",
  data() {
    return {
      title: "站点管理",
      products: {
        title: "站点管理",
        items: []
      },
      productNavbarOpen: true
    };
  },
  created() {
    this.data = products;
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
.console-container {
  padding: 0 15px 30px;
}

.console-title {
  padding: 16px 0px;
  /* min-height: 70px; */
}
.console-title-border {
  border-bottom: 1px solid #ddd;
}
.console-title h5 {
  margin-top: 8px;
  margin-bottom: 8px;
}
.console-title h1,
.console-title h2,
.console-title h3,
.console-title h4,
.console-title h5,
.console-title h6 {
  display: inline-block;
  text-indent: 8px;
  border-left: 2px solid #88b7e0;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 8px;
  vertical-align: top;
}
.nav-tabs {
  border-color: #ddd;
}
.nav-tabs {
  border-bottom: 1px solid #dddddd;
}
.nav {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.nav-tabs > li {
  margin-left: -1px;
  border-top: 1px solid #ddd;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  z-index: 1;
}
.nav-tabs > li.active {
  border-top: 0px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  z-index: 3;
}
.nav-tabs > li > a,
.nav-tabs > li > a:focus {
  color: #666;
  border-left: 0px;
  border-right: 0px;
  margin-right: 0px;
  padding: 10px 16px;
  background: #fbfaf8;
  border-bottom: 0px;
}

.nav-tabs > li.active > a,
.nav-tabs > li.active > a:hover,
.nav-tabs > li.active > a:focus {
  color: #555555;
  cursor: default;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-bottom-color: transparent;
}
.nav-tabs > li.active > a,
.nav-tabs > li.active > a:hover,
.nav-tabs > li.active > a:focus {
  border-top: 2px solid #00a2ca;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px solid #fff;
  color: #333;
}
.nav-tabs > li > a,
.nav-tabs > li > a:focus {
  color: #666;
  border-left: 0px;
  border-right: 0px;
  margin-right: 0px;
  padding: 10px 16px;
  background: #fbfaf8;
  border-bottom: 0px;
}
.nav-tabs > li > a,
.nav-tabs.nav-justified > li > a {
  border-radius: 0px 0px 0px 0px;
}
.table thead tr th {
  padding: 8px 8px;
  font-weight: normal;
  color: #999;
  border-bottom: 1px solid #e1e6eb;
  background-color: #f5f6fa;
}
.home-section-consume {
  height: 280px;
}

.home-section-consume a {
  color: #00c1de;
}

.home-section-consume .consume-title {
  font-size: 14px;
  line-height: 40px;
  height: 40px;
  text-align: center;
  color: #666;
}

.home-section-consume .consume-summary {
  width: 50%;
  padding: 32px 8px 32px 16px;
}

.home-section-consume .consume-summary .summary-part-left {
  /* width: 50%; */
  padding-right: 4px;
}

.home-section-consume .consume-summary .summary-part-right {
  width: 50%;
  padding-left: 4px;
}

.home-section-consume .consume-summary .summary-balance {
  height: 100px;
  background: #f5f5f6;
}

.home-section-consume .consume-summary .summary-balance .balance-title {
  color: #666;
  padding: 12px 0 0 20px;
}

.home-section-consume .consume-summary .summary-balance .balance-number {
  font-size: 26px;
  color: #9b9ea0;
  text-align: center;
  margin-top: 12px;
  font-weight: 300;
}

.home-section-consume .consume-summary .summary-balance .balance-number-owe {
  font-size: 24px;
}

.home-section-consume .consume-summary .summary-recharge {
  display: block;
  height: 40px;
  width: 100%;
  background: #00c1de;
  color: #fff;
  line-height: 40px;
  text-align: center;
  text-decoration: none;
}

.home-section-consume .consume-summary .summary-recharge:hover {
  background: #33cde5;
}

.home-section-consume .consume-summary .summary-alarm {
  display: block;
  text-align: center;
  width: 100%;
  margin-top: 8px;
}

.home-section-consume .consume-summary .summary-coupon {
  display: block;
  height: 40px;
  width: 100%;
  line-height: 40px;
  text-align: left;
}

.home-section-consume .consume-summary .summary-coupon a {
  padding-left: 20px;
  color: #666;
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
}

.home-section-consume .consume-summary .summary-coupon a span {
  padding: 4px;
}

.home-section-consume .consume-summary .summary-coupon-card,
.home-section-consume .consume-summary .summary-stored-card {
  margin-bottom: 10px;
}

.home-section-consume .consume-summary .consume-creditpay {
  height: 32px;
  line-height: 32px;
  text-align: center;
  width: 100%;
  color: #666;
}

.home-section-consume .consume-summary .user-balance-owed {
  text-align: center;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  letter-spacing: 0.02em;
}

.home-section-consume .consume-monthly {
  width: 50%;
  padding: 32px 0 32px 8px;
}

.home-section-consume .consume-monthly .chart-item {
  height: 32px;
  line-height: 32px;
  position: relative;
  transition: all 0.2s, 0.2s;
}

.home-section-consume .consume-monthly .chart-item:hover {
  height: 44px;
  line-height: 44px;
  margin-left: -8px;
  font-size: 14px;
}

.home-section-consume .consume-monthly .chart-item.active .consule-item-name {
  font-size: 14px;
}

.home-section-consume .consume-monthly .chart-item.active .cost-number {
  font-size: 18px;
  margin-left: 16px;
}

.home-section-consume .consume-monthly .chart-item .cost-number {
  margin-left: 16px;
  font-size: 14px;
  color: #fff;
  position: relative;
  z-index: 2;
}

.home-section-consume .consume-monthly .chart-item .cost-number-dark {
  color: #666;
}

.home-section-consume .consume-monthly .chart-item .consule-item-name {
  position: absolute;
  right: 8px;
  top: 0;
  height: 100%;
  width: 40px;
  padding-left: 8px;
  color: #90a0ae;
  text-align: center;
}

.home-section-consume .consume-monthly .chart-item:nth-child(odd) {
  background: #f4f5f7;
}

.home-section-consume .consume-monthly .chart-item:nth-child(even) {
  background: #f9fafc;
}

.home-section-consume .consume-monthly .chart-item-bg {
  position: absolute;
  z-index: 1;
  width: 100px;
  height: 100%;
  top: 0;
  left: 0;
}

.home-section-consume .consume-monthly .chart-item-bg-1 {
  background: #2c3ffb;
}

.home-section-consume .consume-monthly .chart-item-bg-2 {
  background: #167af4;
}

.home-section-consume .consume-monthly .chart-item-bg-3 {
  background: #318fff;
}

.home-section-consume .consume-monthly .chart-item-bg-4 {
  background: #00cdff;
}

.home-section-consume .consume-monthly .monthly-zero {
  background: #f5f5f6;
}

.home-section-consume .consume-monthly .monthly-zero .zero-body {
  height: 100px;
}

.home-section-consume .consume-monthly .monthly-zero .zero-foot {
  height: 40px;
  background-color: #ebecec;
  line-height: 40px;
  text-align: center;
}
.home-block-hover:hover {
  background: #fff;
  border: 1px solid #00c1de;
}
.home-block-hover {
  background: #f5f5f6;
  border: 1px solid #f5f5f6;
  transition: all 0.15s, 0.15s;
}
</style>
