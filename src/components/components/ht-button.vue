<template>
  <button
    class="btn"
    @click="handleClick"
    type="button"
    :class="[type ? 'btn-' + type : '', size ? 'btn-' + size : '']"
  >
  <slot></slot>
  </button>
</template>

<script>
export default {
  // name: "modal-button",

  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick() {
      // 
      this.$emit('click');
    }
  }
}
</script>
