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
      </b-button>

      <!--      &ndash;&gt;-->

      <!-- 
      <DataTable
        :columns="columns"
        :sortKey="sortKey"
        :sortOrders="sortOrders"
      >
        <tbody>
          <tr v-for="project in projects" :key="project.id">
            <td>{{ project.deadline }}</td>
            <td>{{ project.budget }}</td>
            <td>{{ project.status }}</td>
          </tr>
        </tbody>
      </DataTable>
      <pagination
        :pagination="pagination"
        @prev="getProjects(pagination.prevPageUrl)"
        @next="getProjects(pagination.nextPageUrl)"
      >
      </pagination>

      <DataTable :items="items" class="admin-table mt-3" outlined striped>
        <template #cell(Edit)>
          <div class="d-flex gap-3">
            <b-button @click="openRemoveModal" variant="danger" size="sm">
              Vymazať
            </b-button>
            <b-button size="sm"> Upraviť </b-button>
          </div>
        </template>
      </DataTable>

      -->


      <!--      &lt;!&ndash; -->


      <!-- 
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
      -->

       <div class="mt-32">
          <b-table striped hover :items="libraries.slice(0,8)" :fields="fields" show-empty>
            <template #cell(functions)="row">
              <b-button size="sm" @click="openRemoveModal(row)" class="mr-2 btn-danger">
                Odstrániť
              </b-button>
            </template>
            <template>
              Nenašli sa žiadne záznamy
            </template>
          </b-table>
        </div>

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
import axios from "axios";
import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
import { BButton } from "bootstrap-vue-3";
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
    WifiIcon,
  },
  emits: ["show", "hideModal", "openModal"],
  data() {
    return {
      libraries: [],
      fields: [{
        key: "name",
        label: 'Názov knižnice',
        sortable: true,
      },{
        key: "street",
        label: 'Adresa',
        sortable: true,
      }, {
        key: 'functions',
        label: 'Funkcie'
      }],
      isBusy: false,
      columns: [
        { data: "name" },
        { data: "street" },
        { data: "city" },
        {
          data: null,
          render: function (data, type, row, meta) {
            return (
              '<b-button @click="openRemoveModal" variant="danger" size="sm"> Vymazať </b-button>' +
              '<button size="sm" >  </button>'
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
    openRemoveModal(row) {
      this.$refs.removeModalRef.show();
      this.$emit("hideModal");
      console.log(row)
    },
    sortBy() {},
  },
  async created() {
    if (localStorage.getItem('roles') === "admin") {
      await axios.get("libraries").then((response) => {
        this.libraries = response.data;
        this.$store.commit("SET_LIBRARIES", this.libraries)
        console.log(this.libraries)
      });
    }
  },
};
</script>

<style lang="scss">
@import "datatables.net-dt";
</style>
