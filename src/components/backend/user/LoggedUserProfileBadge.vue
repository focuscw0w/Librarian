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

<!--      <b-dropdown-item-->
<!--        v-if="typeOfUser === 'admin'"-->
<!--        class="d-flex align-items-center"-->
<!--        @click="openLibraryManagementModal"-->
<!--      >-->
<!--        <font-awesome-icon :icon="['fas', 'wrench']" class="me-2" />-->
<!--        Správa knižníc-->
<!--      </b-dropdown-item>-->

<!--      <b-dropdown-item-->
<!--        v-if="typeOfUser === 'librarian'"-->
<!--        class="d-flex align-items-center"-->
<!--        @click="openLibrarianAdministrationModal"-->
<!--      >-->
<!--        <font-awesome-icon :icon="['fas', 'wrench']" class="me-2" />-->
<!--        Správa knižnice-->
<!--      </b-dropdown-item>-->
      <b-dropdown-item
        v-if="$store.state.role === 'librarian'"
        class="d-flex align-items-center"
        @click="openLibrarianReservationsAdministrationModal"
      >
        <font-awesome-icon :icon="['fas', 'heart']" class="me-2" />
        Rezervované knihy
      </b-dropdown-item>

      <b-dropdown-item
        v-if="$store.state.role === 'reader'"
        class="d-flex align-items-center"
        @click="openReaderFavouriteBooksModal"
      >
        <font-awesome-icon :icon="['fas', 'heart']" class="me-2" />
        Obľúbené knihy
      </b-dropdown-item>

      <b-dropdown-item
        v-if="$store.state.role === 'reader'"
        class="d-flex align-items-center"
        @click="openReaderReservedBooksModal"
      >
        <font-awesome-icon :icon="['fas', 'heart']" class="me-2" />
        Rezervované knihy
      </b-dropdown-item>

      <b-dropdown-divider></b-dropdown-divider>
<!--      <b-dropdown-item-->
<!--        class="d-flex align-items-center"-->
<!--        @click="openProfileSettingsModal"-->
<!--      >-->
<!--        <font-awesome-icon :icon="['fas', 'gear']" class="me-2" />-->
<!--        Nastavenia profilu-->
<!--      </b-dropdown-item>-->

      <b-dropdown-item class="d-flex align-items-center" @click="logout">
        <font-awesome-icon :icon="['fas', 'right-from-bracket']" class="me-2" />
        Odhlásiť sa
      </b-dropdown-item>
    </b-dropdown>

    <ProfileSettingsModal ref="profileSettingsModalRef" />
    <ReaderFavouriteBooksModal ref="readerFavouriteBooksModalRef" />
    <ReaderReservedBooksModal ref="readerReservedBooksModalRef" />
    <LibrarianReservedBooksModal ref="librarianReservedBooksModalRef" />

    <LibraryManagementModal
      @hideModal="hideLibraryManagementModal"
      @openModal="openLibraryManagementModal"
      ref="libraryManagementModalRef"
    />
    <LibrarianAdministrationModal ref="librarianAdministrationModalRef" />
  </div>
</template>

<script>
import axios from "axios";
import ProfileSettingsModal from "@/components/backend/user/profile-settings/ProfileSettingsModal.vue";
import ReaderFavouriteBooksModal from "@/components/backend/reader/ReaderFavouriteBooksModal.vue";
import ReaderReservedBooksModal from "@/components/backend/reader/ReaderReservedBooksModal.vue";
import LibrarianReservedBooksModal from "@/components/backend/librarian/LibrarianReservedBooksModal.vue";
import LibraryManagementModal from "@/components/backend/admin/LibraryManagement.vue";
import LibrarianAdministrationModal from "@/components/backend/librarian/LibrarianAdministration.vue";

export default {
  name: "LoggedUserProfileBadge",
  components: {
    LibrarianReservedBooksModal,
    ReaderFavouriteBooksModal,
    ReaderReservedBooksModal,
    ProfileSettingsModal,
    LibraryManagementModal,
    LibrarianAdministrationModal,
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
    openLibrarianReservationsAdministrationModal() {
      this.$refs.librarianReservedBooksModalRef.show();
    },
    openLibraryManagementModal() {
      this.$refs.libraryManagementModalRef.show();
    },
    openLibrarianAdministrationModal() {
      this.$refs.librarianAdministrationModalRef.show();
    },
    hideLibraryManagementModal() {
      this.$refs.libraryManagementModalRef.hide();
    },
  },
};
</script>

<style scoped></style>
