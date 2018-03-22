<template>
    <div class="form-group">
      <label  class="col-sm-2 control-label">{{ label }}</label>
      <div class="col-sm-10">
        <input class="form-control" type="text"
          :placeholder="placeholder"
          :value="value"
          :ref="input">
      </div>
    </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    value: [String, Number],
    placeholder: String,
  }
};
</script>
