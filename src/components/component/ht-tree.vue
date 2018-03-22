<template>
  <ul>
    <li v-for="item in items" >
      <div>
        <router-link @click="!open" :to="item.subs ? '#': item.link">
          <div class="nav-icon">
            <span class="icon-arrow-down" v-show="item.subs"></span>
          </div>
          <div class="nav-title">{{item.title}}</div>
        </router-link>
      </div>
      <ul v-show="open" v-if="item.subs">
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
</template>

<script>
export default {
  data() {
    return {
      open:true,
    }
  }
}
</script>
