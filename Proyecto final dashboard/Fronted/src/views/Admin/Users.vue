<template>
  <v-card flat class="px-6">
    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="users"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        class="elevation-1"
        @page-count="pageCount = $event"
      ></v-data-table>
      <div class="text-center pt-2">
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import userService from "@/services/user.service";
export default {
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        {
          text: "Nombres",
          align: "start",
          sortable: false,
          value: "firstName",
        },
        { text: "Apellidos", value: "lastName" },
        { text: "Email", value: "email" },
        { text: "Rol", value: "role" },
        { text: "Fecha Registro", value: "created" },
      ],
      users: [],
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      userService
        .all()
        .then((response) => {
          this.users = response.data;
        })
        .catch((error) => {
          console.log(error.response.data.error);
        });
    },
  },
};
</script>
