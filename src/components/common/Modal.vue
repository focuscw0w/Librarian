<template>
  <div>
    <teleport to="#modals">
      <div
        :id="id"
        class="modal fade"
        ref="exampleModal"
        tabindex="-1"
        aria-hidden="true"
      >
        <div
          class="modal-dialog"
          :class="[size !== null ? 'modal-' + size : null]"
        >
          <div class="modal-content">
            <slot />
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { Modal } from "bootstrap";
import Id from "@/utilities/utilities-unique-id";

export default {
  props: ["id"],
  name: "Modal",
  data: () => ({
    modalInstance: null,
    // title: '',
    id: "modal",
  }),
  props: {
    size: {
      type: String,
    },
  },
  // watch: {
  //   showModal(newValue, oldValue) {
  //     console.log(newValue);
  //     if (newValue === true) {
  //       this.modalActive();
  //     }
  //   }
  // },
  mounted() {
    this.id = "modal-" + Id();
  },
  methods: {
    show: function () {
      this.modalInstance = new Modal(document.getElementById(this.id), {
        target: "#my-modal",
        backdrop: "static",
      });
      this.modalInstance.show();
    },
    hide: function () {
      // console.log("closed");
      this.modalInstance.hide();
      // this.$emit('closeModal');
    },
  },
};
</script>

<style scoped></style>
