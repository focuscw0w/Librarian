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

      <b-button @click="openAddLibraryModal" class="modal-action-btn mt-5"
        >Pridať knižnicu</b-button
      >

      <b-table :items="items" class="admin-table mt-3" outlined striped>
        <template #cell(Edit)>
          <div class="d-flex gap-3">
            <b-button @click="openRemoveModal" variant="danger" size="sm"> Vymazať </b-button>
            <b-button size="sm"> Upraviť </b-button>
          </div>
        </template>
      </b-table>
    </div>
  </Modal>

  <AddLibraryModal ref="addLibraryModalRef" />
  <RemoveModal @openModal="$emit('openModal')" ref="removeModalRef" />

</template>

<script>
import Modal from "@/components/common/Modal.vue";
import InfoFormTab from "@/components/backend/user/profile-settings/tabs/InfoFormTab.vue";
import NotificationTab from "@/components/backend/user/profile-settings/tabs/NotificationTab.vue";
import ViewTab from "@/components/backend/user/profile-settings/tabs/ViewTab.vue";
import AddLibraryModal from "@/components/backend/admin/AddLibrary.vue";
import RemoveModal from "@/components/backend/admin/RemoveModal.vue";

export default {
  components: {
    Modal,
    InfoFormTab,
    NotificationTab,
    ViewTab,
    AddLibraryModal,
    RemoveModal,
  },
  emits: ["show", "hideModal", "openModal"],
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
    openAddLibraryModal() {
      this.$refs.addLibraryModalRef.show();
      this.$emit("hideModal");
    },
    openRemoveModal() {
      this.$refs.removeModalRef.show()
      this.$emit("hideModal");
    }
  },
};
</script>
