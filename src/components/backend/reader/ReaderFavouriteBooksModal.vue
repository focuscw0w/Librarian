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

          <div v-for="book in books">
            {{ book.name }}
          </div>
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
      books: [{'name': 'meeno 1'}, {'name': 'meeno 2'}]
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
      this.$refs.modalRef.show()
    },
    hide() {
      this.$refs.modalRef.hide()
    },
    async sendForm(e) {
      e.preventDefault();
      // await axios
      //     .post("login", {
      //       email: this.email,
      //       password: this.password,
      //     })
      //     .then((response) => {
      //       localStorage.setItem("token", response.data.token);
      //       localStorage.setItem("roles", response.data.roles);
      //       localStorage.setItem("user", JSON.stringify(response.data.user));
      //       this.$emit("hideLogin")
      //       window.location.reload()
      //     })
      //     .catch((err) => console.log(err));
    },
  },
};
</script>
