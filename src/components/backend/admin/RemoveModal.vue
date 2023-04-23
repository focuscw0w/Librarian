<template>
  <Modal ref="modalRef" class="profile-settings-modal" size="lg">
    <h3 class="user-access__heading text-center mt-5">Chceš skutočne vymazať túto knižnicu?</h3>
    <div class="d-flex justify-content-center gap-3 mt-4 pb-5">
        <b-button variant="danger" size="md"> Vymazať </b-button>
        <b-button @click="returnBack" size="md"> Zrušiť </b-button>
    </div>
  </Modal>

</template>

<script>
import Modal from "@/components/common/Modal.vue";
import InfoFormTab from "@/components/backend/user/profile-settings/tabs/InfoFormTab.vue";
import NotificationTab from "@/components/backend/user/profile-settings/tabs/NotificationTab.vue";
import ViewTab from "@/components/backend/user/profile-settings/tabs/ViewTab.vue";

export default {
  components: { Modal, InfoFormTab, NotificationTab, ViewTab },
  emits: ["show", "openModal"],
  methods: {
    show() {
      this.$refs.modalRef.show();
    },
    hide() {
      this.$refs.modalRef.hide();
    },
    returnBack() {
        this.$refs.modalRef.hide();
        this.$emit("openModal")
    }
  },
};
</script>
