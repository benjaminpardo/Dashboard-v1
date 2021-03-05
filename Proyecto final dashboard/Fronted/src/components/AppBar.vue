<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <router-link to="/">
        <span class="headline ">Vuejs</span>
      </router-link>
    </div>

    <v-spacer />

    <div v-if="!isAuth">
      <v-btn text to="/auth/login">
        <span class="hidden-sm-and-down">Iniciar Sesión</span>
        <v-icon class="hidden-sm-and-up">mdi-login</v-icon>
      </v-btn>

      <v-btn class="ml-2" text to="/auth/register">
        <span class="hidden-sm-and-down">Registro</span>
        <v-icon class="hidden-sm-and-up">mdi-account-plus</v-icon>
      </v-btn>
    </div>

    <div v-if="isAuth" class="align-center">
      <span class="user-name mr-2">{{ userName }}</span>

      <v-btn class="ml-2" text to="/profile">
        <span class="hidden-sm-and-down">Perfil</span>
        <v-icon class="hidden-sm-and-up">mdi-account-plus</v-icon>
      </v-btn>

      <!-- <v-btn class="ml-2" text to="../views/tareas">
        <span class="hidden-sm-and-down">Tareas</span>
        <v-icon class="hidden-sm-and-up">mdi-account-plus</v-icon>
      </v-btn> -->
      


      <v-btn class="ml-2" text to="../views/ListaTareas">
        <span class="hidden-sm-and-down">Lista de tareas</span>
        <v-icon class="hidden-sm-and-up">mdi-account-plus</v-icon>
      </v-btn>

      

      <!-- <v-btn v-if="isAdmin" class="ml-2" text to="/admin/users">
        <span class="hidden-sm-and-down">Usuarios</span>
        <v-icon class="hidden-sm-and-up">mdi-account-plus</v-icon>
      </v-btn> -->

      


      <v-btn class="ml-3" text to="/views/Home" @click="logout()">
        <span class="hidden-sm-and-down">Cerrar Sesión</span>
        <v-icon class="hidden-sm-and-up">mdi-logout</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["user"]),
    ...mapGetters(["isAuth", "isAdmin", "userName"]),
  },
  methods: {
    ...mapMutations(["setUser"]),
    logout() {
      this.setUser(null);
      localStorage.clear();
      location.reload();
    },
  },
};
</script>

<style>
.user-name {
  font-size: 0.875rem;
  vertical-align: middle;
  font-weight: 500;
  letter-spacing: 0.0892857143em;
}
</style>
