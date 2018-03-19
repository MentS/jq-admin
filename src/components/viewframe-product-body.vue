<template>
  <div class="viewFramework-product-body">
    <div class="console-container">
      <div class="row">
        <div class="col-sm-12">
          <div class="console-title console-title-border clearfix">
            <div class="pull-left">
              <h5>{{title}}</h5>
            </div>
            <div class="pull-right">
            </div>
          </div>
          <div class="clearfix">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "栏目标题"
    }
  },
  name: "ViewframeProductBody"
};
</script>

<style>

</style>
