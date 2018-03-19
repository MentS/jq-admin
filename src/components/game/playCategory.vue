<template>
  <div class="search-form clearfix">
    <dl>
      <dt>游戏分类</dt>
      <dd>
        <ul class="nav nav-pills">
          <li>
            <a href="javascript:;">官彩</a>
          </li>
          <li>
            <a href="javascript:;">私彩</a>
          </li>
        </ul>
      </dd>
    </dl>
    <dl>
      <dt>主要玩法</dt>
      <dd>
        <ul class="nav nav-pills">
          <li>
            <a href="javascript:;">时时彩</a>
          </li>
          <li>
            <a href="javascript:;">六合彩</a>
          </li>
          <li>
            <a href="javascript:;">赛车</a>
          </li>
          <li>
            <a href="javascript:;">快三</a>
          </li>
          <li>
            <a href="javascript:;">快8</a>
          </li>
          <li>
            <a href="javascript:;">11选5</a>
          </li>
          <li>
            <a href="javascript:;">幸运28</a>
          </li>
        </ul>
      </dd>
    </dl>
    <dl>
      <dt>二级玩法</dt>
      <dd>
        <ul class="nav nav-pills">
          <li>
            <a href="javascript:;">全部</a>
          </li>
          <li>
            <a href="javascript:;">直选</a>
          </li>
          <li>
            <a href="javascript:;">组选</a>
          </li>
        </ul>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {};
</script>

<style>
.search-form .nav-pills li {
  margin-bottom: 5px;
  margin-left: 2px;
}
.search-form dl {
  clear: both;
}
.search-form dl dt,
.search-form dl dd {
  float: left;
}
.search-form dl dt {
  padding: 10px 15px;
}
.search-form dl dt::after {
  content: ":";
}
</style>
