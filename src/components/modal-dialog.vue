<template>
  <div>
    <div class="modal-backdrop fade in" style="z-index: 1040;" v-show="open"></div>
    <div tabindex="-1" class="modal fade in" style="z-index: 1050; display:block" v-show="open">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <slot name="header">
              <button type="button" class="close" @click="close">×</button>
              <h5 class="modal-title">{{title || '标题'}}</h5>
            </slot>
          </div>
          <div class="modal-body clearfix">
            <slot name="body">
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button type="button" class="btn btn-default">Close</button>
              <button type="button" class="btn btn-primary">Save</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    }
  },
  data() {
    return {
      open: true
    };
  },
  methods: {
    close() {
      this.open = false;
      this.$emit('close');
    }
  }
};
</script>

<style>
.modal-backdrop {
  background-color: #000;
  z-index: 1040 !important;
}

.modal .modal-dialog {
  margin-top: 120px;
}

.modal .modal-dialog .modal-content {
  border: none;
  border-radius: 0;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.4);
  height: 100%;
}

.modal .modal-dialog .modal-content .modal-header {
  border-bottom: none;
  padding: 25px;
}

.modal .modal-dialog .modal-content .modal-header .modal-title {
  font-size: 16px;
}

.modal .modal-dialog .modal-content .modal-header .close {
  font-size: 36px;
  margin-top: -10px;
  font-weight: lighter;
  color: #373d41;
  opacity: 0.4;
}

.modal .modal-dialog .modal-content .modal-header .close:hover {
  opacity: 0.8;
}

.modal .modal-dialog .modal-content .modal-header .close:focus {
  outline: none;
}

.modal .modal-dialog .modal-content .modal-body {
  padding: 0 25px;
}

.modal .modal-dialog .modal-content .modal-footer {
  border-top: none;
}

.modal .modal-dialog.yd-side-modal-dialog {
  position: fixed;
  top: 20px;
  bottom: 0;
  right: 0;
  margin-top: 0;
}

.modal .modal-dialog.yd-side-modal-dialog .modal-header {
  height: 50px;
  border-bottom: 1px solid #ddd;
  margin: 0 25px;
  padding: 0;
  padding-top: 15px;
  margin-bottom: 15px;
}

.modal .modal-dialog.yd-side-modal-dialog .modal-content {
  bottom: -30px;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-left: 1px solid #999;
}

.modal .modal-dialog.yd-side-modal-dialog .modal-body {
  height: auto;
  overflow-y: auto;
}

.modal .modal-dialog.yd-side-modal-dialog .side-shadow {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
}
</style>
