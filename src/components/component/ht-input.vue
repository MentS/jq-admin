<template>
  <div class="form-group">
    <label class="sr-only">{{ label }}</label>
    <div class="input-group">
      <div class="input-group-addon" v-if="leftIcon">
        <i :class="leftIcon"></i>
      </div>
      <input type="text" class="form-control"
       ref="input"
       :value="value"
       @input="$emit('input', $event.target.value)" 
       :placeholder="placeholder"
      
       >
      <div class="input-group-addon" v-if="search" :search="search" @click="searchget" >
        <i class="aliyun-common-search-icon"></i>
      </div>
      <div class="input-group-addon" v-if="rightIcon"  >
        <i :class="rightIcon"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {},
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder:{
      type: String,
      default: ''
    },
    search:{
      type: Boolean,
      default: true
    },
    leftIcon: String,
    rightIcon:String
  },
  data() {
    return {

    }
  },
  methods: {
    searchget() {
      console.log(this)
      console.log(this.$refs.input.value)
    }
  }
};
</script>
