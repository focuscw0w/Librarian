<template>
  <div>asdadsadasknjads</div>
</template>

<script>
import axios from "axios";
import Modal from "@/components/common/Modal.vue";

export default {
  name: 'ProfileSettingsModal',
  components: {Modal},
  emits: ["show"],

  data() {
    return {
      type: "password",
      email: "",
      password: "",
      // modal_demo: null,
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
      this.$refs.profileSettingsModal.show()
    },
    hide() {
      this.$refs.profileSettingsModal.hide()
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
