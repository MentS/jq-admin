<template>
  <i :class="name"></i>
</template>

<script>
  export default {
    props: {
      name: String
    }
  };
</script>

<style>
[class^="icon-"], [class*=" icon-"] {
  line-height: 0;
  font-size: 12px
}

</style>
