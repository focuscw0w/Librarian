<template>
  <Modal ref="modalRef" class="profile-settings-modal" size="lg">
    <div class="p-5">
      <header class="d-flex align-items-center justify-content-between">
        <h3 class="user-access__heading">Správa knižníc</h3>
        <img
          :src="require('@/assets/icons/close-icon.svg')"
          alt="close icon"
          class="close-icon"
          @click="hide"
        />
      </header>

      <b-button class="modal-action-btn mt-5">Pridať knižnicu</b-button>

      <b-table :items="items" class="admin-table  mt-3" outlined striped>
        <template #cell(Edit)>
          <div class="d-flex gap-3">
            <b-button variant="danger" size="sm"> Vymazať </b-button>
            <b-button size="sm"> Upraviť </b-button>
          </div>
        </template>
      </b-table>
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
  emits: ["show"],
  data() {
    return {
      isBusy: false,
      items: [
        { Názov: "Dickerson", Typ: "MacDonald", Adresa: "Žilina", Edit: "" },
        { Názov: "Larsen", Typ: "Shaw", Adresa: "Bratislava", Edit: "" },
        { Názov: "Geneva", Typ: "Wilson", Adresa: "Trnava", Edit: "" },
        { Názov: "Jami", Typ: "Carney", Adresa: "Nitra", Edit: "" },
      ],
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.type = this.type === "text" ? "password" : "text";
    },
    show() {
      this.$refs.modalRef.show();
    },
    hide() {
      this.$refs.modalRef.hide();
    },
  },
};
</script>
