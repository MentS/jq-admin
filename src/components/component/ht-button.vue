<template>
  <button
    class="btn"
    @click="handleClick"
    type="button"
    :class="[type ? 'btn-' + type : '', size ? 'btn-' + size : '']"
    
  >
  <i :class="icon"></i>
  <span>
    <slot></slot>
  </span>
  </button>
</template>

<script>
export default {

  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
}
</script>

<style>
[class^="icon-"], [class*=" icon-"] {
  line-height: 0
}
</style>
