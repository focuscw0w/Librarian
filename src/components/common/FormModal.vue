<!--<template>-->
<!--  <Modal ref="baseModalRef" :size="size">-->
<!--    <div class="modal-content">-->
<!--      <div class="modal-header" v-if="title">-->
<!--        <h5 class="modal-title">{{ title }}</h5>-->
<!--        <button type="button" class="close" data-dismiss="modal" aria-label="Close">-->
<!--          <span aria-hidden="true">&times;</span>-->
<!--        </button>-->
<!--      </div>-->
<!--      <slot/>-->
<!--    </div>-->
<!--  </Modal>-->
<!--</template>-->

<!--<script>-->
<!--import Modal from "@/components/common/Modal.vue";-->

<!--export default {-->
<!--  name: "FormModal",-->
<!--  components: {Modal},-->
<!--  data: () => ({-->
<!--    modalInstance: null,-->
<!--    // title: '',-->
<!--    id: 'modal',-->
<!--  }),-->
<!--  emits: ['show'],-->
<!--  props: {-->
<!--    title: {-->
<!--      type: String,-->
<!--    }, size: {-->
<!--      type: String,-->
<!--    },-->
<!--  },-->
<!--  methods: {-->
<!--    show: function () {-->
<!--      this.$refs.baseModalRef.show()-->
<!--    },-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->