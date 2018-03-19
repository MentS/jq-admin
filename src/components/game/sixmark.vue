<template>
  <div>
    <div class="clearfix" style="margin:8px 0;"></div>
    <div>
      <div class="pull-right">
        <button class="button">添加站点</button>
      </div>
      <ul class="nav nav-tabs">
        <li>
          <a href="#">全部站点</a>
        </li>
        <li class="active">
          <a href="#">运行站点</a>
        </li>
        <li>
          <a href="#">禁用站点</a>
        </li>
      </ul>
    </div>
    <div>
      <div class="home-section-consume clearfix">
        <div class="consume-summary pull-left clearfix">
          <div class="consume-title ">账户概览</div>
          <div class="summary-part-left">
            <div class="summary-balance">
              <div class="balance-title ">现金余额(元)</div>
              <div class="balance-number">
                <span>8888888</span>
                <span class="balance-small ">.00</span>
              </div>
            </div>
            <a class="summary-recharge " href="#">详情</a>
          </div>
        </div>
        <div class="consume-monthly pull-left">
          <div class="consume-title ">今日入款</div>
          <div class="monthly-chart">
            <div class="chart-item" style="">
              <span class="cost-number  cost-number-dark">¥ 0.00</span>
              <span class="consule-item-name">线上</span>
              <div class="chart-item-bg chart-item-bg-1" style="width: 0%;"></div>
            </div>

            <div class="chart-item" style="">
              <span class="cost-number cost-number-dark">¥ 0.00</span>
              <span class="consule-item-name">线下</span>
              <div class="chart-item-bg chart-item-bg-2" style="width: 0%;"></div>
            </div>
            <div class="chart-item" style="">
              <span class="cost-number ">¥ 105.00</span>
              <span class="consule-item-name">手工</span>
              <div class="chart-item-bg chart-item-bg-3" style="width: 80%;"></div>
            </div>

            <div class="chart-item active" style="">
              <span class="cost-number  cost-number-dark">¥ 105.00</span>
              <span class="consule-item-name">小计</span>
              <div class="chart-item-bg chart-item-bg-4" style="width: 0%;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="clearfix" style="margin:8px 0;"></div>
    <div>
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
              <a href="#" class="sub-style j_domain">ciyoe.com</a>
            </td>
            <td>国际域名</td>
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
      </table>
    </div>
    <button type="button" class="btn btn-default" data-dismiss="modal" @click="open">Open</button>

    <modal-dialog :open="dialogOpen">
      <form class="form-horizontal" slot="body">
        <div class="form-group">
          <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <div class="checkbox">
              <label>
                <input type="checkbox"> Remember me
              </label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default">Sign in</button>
          </div>
        </div>
      </form>
    </modal-dialog>
  </div>
</template>

<script>
import ModalDialog from "../modal-dialog";
export default {
  data() {
    return {
      dialogOpen: false
    };
  },
  components: {
    ModalDialog
  },
  methods: {
    open() {
      this.dialogOpen = true;
    }
  }
};
</script>

<style>

</style>
