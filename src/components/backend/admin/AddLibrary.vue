<template>
  <Modal ref="modalRef" class="profile-settings-modal" size="lg">
    <div class="p-5">
      <header class="d-flex align-items-center justify-content-between">
        <h3 class="user-access__heading">Pridať knižnicu</h3>
        <img
          :src="require('@/assets/icons/close-icon.svg')"
          alt="close icon"
          class="close-icon"
          @click="hide"
        />
      </header>

      <b-form class="mt-5">
       
       <div class="grid">
        <b-form-group
          id="input-group-1"
          label="Názov knižnice"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            type="text"
            placeholder="Názov knižnice"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Slug" label-for="input-2">
          <b-form-input
            id="input-2"
            type="text"
            placeholder="Slug"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Adresa" label-for="input-2">
          <b-form-input
            id="input-2"
            type="text"
            placeholder="Adresa knižnice"
            required
          ></b-form-input>
        </b-form-group>

          <b-form-group id="input-group-2" label="Štátny kód" label-for="input-2">
          <b-form-input
            id="input-2"
            type="tel"
            placeholder="Štátny kód"
            required
          ></b-form-input>
        </b-form-group>

          <b-form-group id="input-group-2" label="Mesto" label-for="input-2">
          <b-form-input
            id="input-2"
            type="text"
            placeholder="Mesto"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Ulica" label-for="input-2">
          <b-form-input
            id="input-2"
            type="text"
            placeholder="Ulica"
            required
          ></b-form-input>
        </b-form-group>

         <b-form-group id="input-group-2" label="Číslo domu" label-for="input-2">
          <b-form-input
            id="input-2"
            type="text"
            placeholder="Číslo domu"
            required
          ></b-form-input>
        </b-form-group>

         <b-form-group id="input-group-2" label="PSČ" label-for="input-2">
          <b-form-input
            id="input-2"
            type="text"
            placeholder="PSĆ"
            required
          ></b-form-input>
        </b-form-group>
       </div>

      </b-form>

    <b-button class="modal-action-btn mt-3">Potvrdiť</b-button>

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
  data() {
    return {};
  },
  methods: {
    hide() {
      this.$refs.modalRef.hide();
    },
    show() {
      this.$refs.modalRef.show();
    },
  },
};
</script>
