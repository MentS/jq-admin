<template>
  <div class="topbar">
    <div class="pull-left logo-box">
      <div class="logo-wrapper pull-left">
        <a href="/home" class="topbar-btn pull-left logo-icon">
          <span class="topbar-sidebar-logo-new"></span>
        </a>
        <a href="/home/index" target="_self" class="topbar-btn console-link pull-left">
          <span>管理控制台</span>
        </a>
      </div>
    </div>
    <div class="pull-right topbar-info clearfix">
      <div class="pull-left topbar-info-item topbar-info-dropdown">
        <a href="javascript:void(0);" target="_blank" class="topbar-btn topbar-info-dropdown-toggle">
          <span class="topbar-btn-notice">在线人数 14</span>
        </a>
      </div>
      <div class="pull-left topbar-user user-box ">
        <div class="topbar-info-dropdown topbar-info-item">
          <a href="javascript:void(0);" target="_blank" class="topbar-info-dropdown-toggle topbar-btn">
            <img class="topbar-user-avatar" src="https://oss.aliyuncs.com/aliyun_id_photo_bucket/default_handsome.jpg" />
          </a>
          <div class="topbar-info-dropdown-memu topbar-align-right">
            <div class="topbar-user-info">
              <img class="topbar-user-avatar" src="https://oss.aliyuncs.com/aliyun_id_photo_bucket/default_handsome.jpg">
              <p class="topbar-user-email">
                <span title="nic***@live.cn">nic***@live.cn</span>
              </p>
            </div>
            <div class="topbar-user-entrance-list">
              <a class="topbar-user-entrance" href="javascript:void(0);" target="_target">
                <span class="topbar-user-entrance-logo icon-topbar-user-info topbar-sidebar-user-info"></span>
                <span>基本资料</span>
              </a>
              <a class="topbar-user-entrance" href="javascript:void(0);" target="_target">
                <span class="topbar-user-entrance-logo icon-topbar-certify topbar-sidebar-certify"></span>
                <span>实名认证</span>
              </a>
              <a class="topbar-user-entrance" href="javascript:void(0);" target="_target">
                <span class="topbar-user-entrance-logo icon-topbar-secure-setting topbar-sidebar-secure-setting"></span>
                <span>安全设置</span>
              </a>
              <a class="topbar-user-entrance" href="javascript:void(0);" target="_target">
                <span class="topbar-user-entrance-logo icon-topbar-secure-control topbar-sidebar-secure-control"></span>
                <span>安全管控</span>
              </a>
            </div>
            <div>
              <div class="user-btn-list">
                <a class="user-btn-link" href="javascript:void(0);" target="_self">
                  <span>退出管理控制台</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.topbar {
  background-color: #373d41;
  height: 50px;
  width: 100%;
  left: 0;
  top: 0;
  position: fixed;
  z-index: 999;
}

.topbar a,
.topbar li,
.topbar p,
.topbar span {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  letter-spacing: 0.02em;
  text-decoration: none;
}

.topbar a.topbar-btn:hover {
  text-decoration: none;
  background-color: #2a2f32;
}

.topbar .topbar-btn {
  padding: 0 12px;
  height: 50px;
  display: block;
  z-index: 2;
  border-right: 1px solid #2a2f32;
  font-size: 14px;
  line-height: 50px;
  text-decoration: none;
}

.topbar .topbar-info .topbar-btn:hover {
  background-color: #2a2f32;
}

.topbar .topbar-info-item {
  display: inline-block;
}

.topbar .topbar-info-dropdown .topbar-info-dropdown-toggle {
  color: #ffffff;
}

.topbar .topbar-info-dropdown:hover .topbar-info-dropdown-memu {
  visibility: visible;
  opacity: 1;
}

.topbar-user .topbar-align-right {
  right: 0;
  left: auto;
}

.topbar .topbar-info-dropdown-memu {
  padding: 0;
  position: absolute;
  top: 100%;
  right: 0;
  visibility: hidden;
  float: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  z-index: 1;
  font-size: 12px;
  min-width: 100%;
  margin: 0;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: opacity 0.15s, visibility 0s 0.15s;
  opacity: 0;
}

.topbar-user .topbar-info-dropdown-memu {
  min-width: auto;
}

.topbar-user .topbar-user-avatar {
  width: 36px;
  height: 36px;
  border-radius: 18px;
  vertical-align: middle;
}

.topbar-user .topbar-user-info .topbar-user-email {
    margin: 8px 0;
}

.topbar-user .user-btn-link {
  height: 50px;
  line-height: 50px;
  display: block;
  transition: all 0.15s;
  text-align: center;
  color: #333;
  background-color: #f5f5f6;
  border-top: #eaeaea;
}

.topbar-user .topbar-user-info {
  text-align: center;
  padding-top: 16px;
  border-bottom: 1px solid #eaeaea;
}

.topbar-user .topbar-user-entrance-list {
  overflow: hidden;
  width: 270px;
  margin: 8px 0;
  padding: 8px 15px;
}

.topbar-user .topbar-user-entrance {
  width: 80px;
  height: 80px;
  float: left;
  text-align: center;
  color: #333;
  transition: background 0.15s;
  border-radius: 2px;
}
.topbar-user .topbar-user-entrance:hover {
  background: #f5f5f5;
  text-decoration: none;
}
.topbar-user .topbar-user-entrance-logo {
  font-size: 20px;
  margin: 8px auto 4px;
  width: 40px;
  height: 40px;
  display: block;
  line-height: 40px;
  color: #788d9b;
}

.logo-box a:hover {
  background-color: #2a2f32;
}
.logo-box .console-link {
  color: #fff;
  font-size: 14px;
  line-height: 50px;
  margin-right: 1px;
  padding: 0 12px;
  text-align: center;
  border-right: 1px solid #2a2f32;
  text-decoration: none;
}
.logo-box .logo-icon {
  margin-right: 1px;
  text-align: center;
  width: 50px;
  font-size: 24px;
  color: #fff;
  line-height: 50px;
  height: 100%;
  border-right: 1px solid #2a2f32;
  text-decoration: none;
}
.logo-box .console-link:hover {
  text-decoration: none;
}

.logo-box .console-link span {
  letter-spacing: 0.02em;
}
</style>
