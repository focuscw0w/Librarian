<template>
  <teleport to="#modals">
    <div :id="id" class="modal fade" ref="exampleModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <slot/>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import {Modal} from 'bootstrap'
import Id from '@/utilities/utilities-unique-id'

export default {
  name: "TestModal",
  data: () => ({
    modalInstance: null,
    // title: '',
    id: 'modal',
  }),
  // props: {
    // showModal: {
    //   type: Boolean,
    //   default: false,
    // },
  // },
  // watch: {
  //   showModal(newValue, oldValue) {
  //     console.log(newValue);
  //     if (newValue === true) {
  //       this.modalActive();
  //     }
  //   }
  // },
  mounted() {
    this.id = 'modal-'+Id()
  },
  methods: {
    show: function () {
      this.modalInstance = new Modal(document.getElementById(this.id), {
        target: "#my-modal",
        backdrop: "static"
      });
      this.modalInstance.show()
    },
    hide: function () {
      // console.log("closed");
      this.modalInstance.hide();
      // this.$emit('closeModal');
    }
  }
};
</script>

<style scoped>

</style>