<template>
  <div>
    <div class="clearfix" style="margin:8px 0;"></div>
    <div>
      <div class="pull-right">
        <button class="btn btn-primary btn-sm">添加站点</button>
      </div>
      <ul class="nav nav-tabs">
        <li class="active">
          <a href="#">全部站点</a>
        </li>
        <li>
          <a href="#">运行站点</a>
        </li>
        <li>
          <a href="#">禁用站点</a>
        </li>
      </ul>
    </div>
    <div style="border: 1px solid #dddddd;margin:-1px 0 0 -1px;">
      <div class="clearfix" style="padding: 8px;">
        <div>
          <form class="form-inline">
            <select class="form-control input-sm" aria-placeholder="请选择">
              <option>默认选项</option>
            </select>
            <input type="text" class="form-control input-sm" placeholder="请输入站点名称" />
            <button class="btn btn-primary btn-sm">搜索</button>
          </form>
        </div>

      </div>
      <div class="clearfix">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>
                <input type="checkbox" name="ckSelectAll" id="ckSelectAll">
              </th>
              <th>名称</th>
              <th>域名</th>
              <th>状态</th>
              <th>到期日期</th>
              <th class="text-right">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" name="ckbox"></td>
              <td>
                <a href="#" class="sub-style j_domain">丽音集团</a>
              </td>
              <td>
                <a href="#" class="sub-style j_domain">ciyoe.com</a>
              </td>
              <td>正常</td>
              <td>2018-08-22</td>
              <td class="text-right">
                <a href="#">注册配置</a>
                <span class="text-explode">|</span>
                <a href="#">线路</a>
                <span class="text-explode">|</span>
                <a href="#">会员</a>
                <span class="text-explode">|</span>
                <i class="link-space"></i>
                <a href="#" target="_blank">解析</a>
                <span class="text-explode">|</span>
                <i class="link-space"></i>
                <a href="#" target="_blank">游戏管理</a>
              </td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
    <modal-dialog :open="dialogOpen" title="添加站点">
      <form class="form-horizontal" slot="body">
        <div class="form-group">
          <label class="col-sm-2 control-label">站点名称</label>
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
    </modal-dialog>
  </div>
</template>

<script>
import ModalDialog from "../modal-dialog";

export default {
  components: { ModalDialog },
  data() {
    return {
      dialogOpen: true
    };
  }
};
</script>

<style>
.form-inline .form-control {
  width: auto;
}
.help-block {
  margin: 4px 0px;
}
.help-block {
  display: block;
  margin-top: 5px;
  margin-bottom: 10px;
  color: #737373;
}
</style>
