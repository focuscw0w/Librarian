<template>
  <div>
    <b-dropdown
      id="dropdown-1"
      class="m-md-2 my-dropdown"
      right
      variant="light"
    >
      <template #button-content>
        <b-avatar class="me-2" src="https://placekitten.com/300/300"></b-avatar>
        <span class="me-1">Christine Smith</span>
      </template>
      <b-dropdown-item
        class="d-flex align-items-center"
        @click="openReaderFavouriteBooksModal"
      >
        <font-awesome-icon :icon="['fas', 'heart']" class="me-2" />
        Obľúbené knihy
      </b-dropdown-item>
      <b-dropdown-item
        class="d-flex align-items-center"
        @click="openReaderReservedBooksModal"
      >
        <font-awesome-icon :icon="['fas', 'heart']" class="me-2" />
        Rezervované knihy
      </b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item
        class="d-flex align-items-center"
        @click="openProfileSettingsModal"
      >
        <font-awesome-icon :icon="['fas', 'gear']" class="me-2" />
        Nastavenia profilu
      </b-dropdown-item>
      <b-dropdown-item class="d-flex align-items-center" @click="logout">
        <font-awesome-icon :icon="['fas', 'right-from-bracket']" class="me-2" />
        Odhlásiť sa
      </b-dropdown-item>
    </b-dropdown>
    <ProfileSettingsModal ref="profileSettingsModalRef" />
    <ReaderFavouriteBooksModal ref="readerFavouriteBooksModalRef" />
    <ReaderReservedBooksModal ref="readerReservedBooksModalRef" />
  </div>
</template>

<script>
import axios from "axios";
import ProfileSettingsModal from "@/components/backend/user/profile-settings/ProfileSettingsModal.vue";
import ReaderFavouriteBooksModal from "@/components/backend/reader/ReaderFavouriteBooksModal.vue";
import ReaderReservedBooksModal from "@/components/backend/reader/ReaderReservedBooksModal.vue";

export default {
  name: "LoggedUserProfileBadge",
  components: {
    ReaderReservedBooksModal,
    ReaderFavouriteBooksModal,
    ProfileSettingsModal,
  },
  data() {
    return {
      openedPrSetModal: false,
    };
  },
  methods: {
    async logout() {
      await axios
        .post("logout")
        .then((response) => {
          this.$store.commit("LOGOUT_USER");
        })
        .catch((err) => console.log(err));
    },
    openProfileSettingsModal() {
      this.$refs.profileSettingsModalRef.show();
    },
    openReaderFavouriteBooksModal() {
      this.$refs.readerFavouriteBooksModalRef.show();
    },
    openReaderReservedBooksModal() {
      this.$refs.readerReservedBooksModalRef.show();
    },
  },
};
</script>

<style scoped></style>
