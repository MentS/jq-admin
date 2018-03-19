<template>
  <div>
    <form class="form-horizontal" >
      <div class="form-group">
        <label class="col-sm-2 control-label">平台域名</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" placeholder="请输入站点名词">
          <span class="help-block">
            例如： 金沙娱乐
          </span>
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label">站点域名</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="请输入站点域名" />
          <span class="help-block">
            建议添加域名解析为 @记录，例如：ijueqie.com，
            <br />添加后平台自动添加该域名 WWW 二级域名，
            <br />以及其它服务域名，例如：www.ijueqie.com，login.ijueqie.com，proxy.ijueqie.com
          </span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>

</style>
