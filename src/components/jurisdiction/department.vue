<template>
<div>
  <div  class="console-container ng-scope" >
    <div class="row ng-scope">
      <div class="col-sm-12">
        <div class="console-table-wapper margin-top ecs-server-list-wapper ecs-server-with-smart-search" style="position: relative;" data-spm-anchor-id="5176.2020520101.0.i2.69304df5Jal9ke">
        
          <div data-spm="661" class="ecs-smart-search-wrapper ng-scope">
            <div class="ecs-smart-search">
              <form class="ng-pristine ng-valid">
                <div class="input-box active"  style="">
                  <div class="selection-btn icon-arrow-down">
                    <ul class="selection-menu">
                      <!-- ngRepeat: item in selectionItems -->
                      <li  class="ng-scope ng-binding">自动识别</li>
                      <li ng-repeat="item in selectionItems"  class="ng-scope ng-binding" >网络类型</li>
                      <!-- end ngRepeat: item in selectionItems -->
                    </ul>
                  </div>
                  <!-- ngIf: selection -->
                  <input  name="up-input" class="up-input ng-pristine ng-valid" type="text" placeholder="选择实例属性项搜索" >
                  <div class="search-btn btn btn-default icon-search" style="line-height: 18px" ></div>
                  <div class="search-autocomplete ng-hide" >
                    <ul class="autocomplete-dropdown">
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="list-search-bar" >
            <div class="ng-isolate-scope">
              <form class="search-bar ng-pristine ng-valid" name="searchBar" bindonce="">
                <div class="simple-form-field">
                  <div class="form-group">
                    <label class="col-sm-3 control-label">
                      <span>实例ID：</span>
                    </label>
                    <div class="col-sm-9 control-container">
                      <input type="text" class="form-control ng-pristine ng-valid"  placeholder="输入实例"
                        name="instanceIds">
                    </div>
                  </div>
                </div>
                <div class="simple-form-field">
                  <div class="form-group">
                    <label class="col-sm-3 control-label">
                      <span>实例名称：</span>
                    </label>
                    <div class="col-sm-9 control-container">
                      <input type="text" class="form-control ng-pristine ng-valid"  placeholder="输入实例名称模糊查询"
                        name="instanceName">
                    </div>
                  </div>
                </div>
                <div class="simple-form-field">
                  <div class="form-group">
                    <label class="col-sm-3 control-label">
                      <span >外网IP：</span>
                    </label>
                    <div class="col-sm-9 control-container">
                      <input type="text" class="form-control ng-pristine ng-valid ng-valid-ipv4-validator" placeholder="输入实例外网IP地址精确查询"
                        name="publicIpAddresses">
                    </div>
                  </div>
                </div>


                <div class="simple-form-field">
                  <div class="form-group">
                    <label class="col-sm-3 control-label">
                      <span >可用区ID：</span>
                    </label>
                    <div class="col-sm-9 control-container">
                      <input type="text" class="form-control ng-pristine ng-valid" placeholder="输入可用区ID精确查询"
                        name="zoneId">
                    </div>
                  </div>
                </div>
                <div class="clearfix">
                  <div class="form-group simple-form-submit">
                    <div class="col-sm-9 control-container col-sm-offset-1">
                      <button  type="submit" class="btn btn-primary" >搜索</button>
                      <button  class="btn btn-default" >清空</button>
                      <div style="display: inline-block; margin-left: 3px; position: relative;">
                        <button class="btn btn-default ng-isolate-scope">
                          <span class="glyphicon glyphicon-tags"></span>&nbsp;
                          <span >标签</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="list-tool-bar list-tool-bar-advance" >
              <button class="btn btn-link ng-hide" >高级搜索</button>
              <button class="btn btn-link" >普通搜索</button>
              <div style="display: inline-block" class="ng-hide">
                <span class="col-margin" >显示关注</span>
                <div class="ng-isolate-scope ng-pristine ng-valid console-onoff console-onoff-off">
                  <div class="onoff-handle">
                    <div class="onoff-loading ng-hide" ng-show="loading"></div>
                  </div>
                </div>
                <span class="text-explode text-size-16">|</span>
              </div>

              <a tooltip="常用操作"  class="btn btn-default list-tool-bar-button icon-help ng-scope"
                href="https://help.aliyun.com/document_detail/25429.html" target="_blank" ></a>
            </div>
          </div>
          <!-- ngIf: !serverListCtrl.searchBarSimpleMode -->
          <div class="ecs-server-list-grid ng-scope ng-isolate-scope">
            <div class="ng-scope">
              <div class="clearfix">
                <div class="searchSection pull-left"></div>
                <div class="tagSearchSection pull-left"></div>
              </div>
              <div class="gridSection">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th width="10">
                        <input type="checkbox" 
                          class="ng-pristine ng-valid">
                      </th>
                      <th>实例ID/名称</th>
                      <th></th>
                      <th>监控</th>
                      <th>所在可用区</th>
                      <th>IP地址</th>

                      <th>配置</th>

                      <th class="text-right">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- ngRepeat: item in store -->
                  </tbody>
                  <!-- ngIf: !showNoneDataInfoTip -->
                </table>
              </div>

              <div class="simple-grid-none-data-wrap">
                <!-- ngIf: showNoneDataInfoTip && !loadingState -->
                <div class="simple-grid-none-data row-padding row-margin text-center ng-scope" >
                  <span class="text-size-16 text-success icon-info-1" style="vertical-align: middle"></span>
                  <div class="text-size-16 tip-text inline-block" >
                    <span class="margin-left ng-scope ng-binding" >没有查询到符合条件的记录</span>
                  </div>
                </div>
                <!-- end ngIf: showNoneDataInfoTip && !loadingState -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-ng-controller="aliyunCommonController" class="ng-scope"></div>
  <div ng-controller="validateAuthInfoController" class="ng-scope"></div>
</div>
  
</template>

<script>
export default {

}
</script>


<style scoped>
@import '../../assets/ecs.console.css';
</style>