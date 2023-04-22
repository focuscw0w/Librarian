<template>
  <div>
    <Modal ref="modalRef" class="profile-settings-modal" size="lg">
      <div class="p-5">
        <header class="d-flex align-items-center justify-content-between">
          <h3 class="user-access__heading">Obľúbené knihy</h3>
          <img
              :src="require('@/assets/icons/close-icon.svg')"
              alt="close icon"
              class="close-icon"
              @click="hide"
          />
        </header>
        <div class="mt-32">
          <b-table striped hover :items="books" :fields="fields"  show-empty>
            <template #cell(functions)="row">
              <b-button size="sm" @click="remove(row)" class="mr-2 btn-danger">
                Odstrániť
              </b-button>
            </template>
            <template #empty="scope">
              Nenašli sa žiadne záznamy
            </template>
          </b-table>

        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import axios from "axios";
import Modal from "@/components/common/Modal.vue";
import InfoFormTab from "@/components/backend/user/profile-settings/tabs/InfoFormTab.vue";
import NotificationTab from "@/components/backend/user/profile-settings/tabs/NotificationTab.vue";
import ViewTab from "@/components/backend/user/profile-settings/tabs/ViewTab.vue";

export default {
  components: {Modal, InfoFormTab, NotificationTab, ViewTab},
  emits: ["show"],

  data() {
    return {
      books: [],
      fields: [{key: 'name', label: 'Názov'}, {key: 'functions', label: 'Funkcie'}],
    };
  },
  // mounted() {
  //   this.modal_demo = new Modal('#modal_demo', {})
  // },
  methods: {
    togglePasswordVisibility() {
      this.type = this.type === "text" ? "password" : "text";
    },
    show() {
      this.load()
      this.$refs.modalRef.show();
    },
    hide() {
      this.$refs.modalRef.hide();
    },
    load(){
      axios
          .get("/books/favourite")
          .then((response) => {
            this.books = response.data;
          })
          .catch((err) => {
            console.log(err);
          });
    },
    async remove(row) {
      axios
          .post("/books/favourite/"+row.item.id)
          .then((response) => {
            this.load()
          })
          .catch((err) => {
            console.log(err);
          });
    },
  },
};
</script>
