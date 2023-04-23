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
      >Pridať knižnicu
      </b-button
      >

      <DataTable :columns="columns" :sortKey="sortKey" :sortOrders="sortOrders" @sort="sortBy">
        <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{project.deadline}}</td>
          <td>{{project.budget}}</td>
          <td>{{project.status}}</td>
        </tr>
        </tbody>
      </DataTable>
      <pagination :pagination="pagination"
                  @prev="getProjects(pagination.prevPageUrl)"
                  @next="getProjects(pagination.nextPageUrl)">
      </pagination>

<!--      &lt;!&ndash; -->
      <DataTable :items="items" class="admin-table mt-3" outlined striped>
        <template #cell(Edit)>
          <div class="d-flex gap-3">
            <b-button @click="openRemoveModal" variant="danger" size="sm"> Vymazať </b-button>
            <b-button size="sm"> Upraviť </b-button>
          </div>
        </template>
      </DataTable>
<!--      &ndash;&gt;-->

      <div class="table-responsive mt-5">

        <DataTable
            :data="libraries"
            :columns="columns"
            class="table table-bordered display hover"
            width="100%"
        >
          <thead>
          <tr>
            <th>Názov</th>
            <th>Typ</th>
            <th>Adresa</th>
            <th>Edit</th>
          </tr>
          </thead>

        </DataTable>

      </div>
    </div>
  </Modal>

  <AddLibraryModal ref="addLibraryModalRef"/>
  <RemoveModal @openModal="$emit('openModal')" ref="removeModalRef"/>
</template>

<script>
import Modal from "@/components/common/Modal.vue";
import InfoFormTab from "@/components/backend/user/profile-settings/tabs/InfoFormTab.vue";
import NotificationTab from "@/components/backend/user/profile-settings/tabs/NotificationTab.vue";
import ViewTab from "@/components/backend/user/profile-settings/tabs/ViewTab.vue";
import AddLibraryModal from "@/components/backend/admin/AddLibrary.vue";
import RemoveModal from "@/components/backend/admin/RemoveModal.vue";
import axios from "axios";
import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
import {BButton} from "bootstrap-vue-3";
import WifiIcon from "vue-material-design-icons/Wifi.vue";

DataTable.use(DataTablesCore);

export default {
  components: {
    Modal,
    InfoFormTab,
    NotificationTab,
    ViewTab,
    AddLibraryModal,
    RemoveModal,
    DataTable,
    WifiIcon
  },
  emits: ["show", "hideModal", "openModal"],
  data() {
    return {
      isBusy: false,
      items: [
        {Názov: "Dickerson", Typ: "MacDonald", Adresa: "Žilina", Edit: ""},
        {Názov: "Larsen", Typ: "Shaw", Adresa: "Bratislava", Edit: ""},
        {Názov: "Geneva", Typ: "Wilson", Adresa: "Trnava", Edit: ""},
        {Názov: "Jami", Typ: "Carney", Adresa: "Nitra", Edit: ""},
      ],
      libraries: null,
      columns: [
        {data: "name"},
        {data: "street"},
        {data: "city"},
        {
          data: null,
          render: function (data, type, row, meta) {
            return (
<<<<<<< HEAD:src/components/backend/admin/LibraryManagement.vue
              '<div class="admin-btn-splitter gap-1em">' + '<button @click="openRemoveModal" class="admin-btn danger"> Vymazať </button>' +
              '<button class="admin-btn edit"> Upraviť </button>' + '</div>'
=======
                '<b-button @click="openRemoveModal" variant="danger" size="sm"> Vymazať </b-button>' +
                '<button size="sm" >  </button>'
>>>>>>> 7763fddd05257fdeb47b3a93171a8bb578002757:src/components/backend/admin/AdminAdministration.vue
            );
          },
        },
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
      this.$refs.removeModalRef.show();
      this.$emit("hideModal");
    },
  },
  async created() {
    await axios.get("libraries").then((response) => {
      this.libraries = response.data;
    });
  },
};
</script>

<style lang="scss">
@import "datatables.net-dt";
</style>
