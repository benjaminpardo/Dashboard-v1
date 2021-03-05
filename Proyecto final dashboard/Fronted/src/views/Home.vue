<template>
  <v-row id="home-container m-auto" align="center" justify="center">
    <v-col class="text-center" cols="12">
      <hello-world />
      <v-btn v-if="!isAuth" class="mt-4 primary" to="/auth/login">
        <span>Iniciar Sesión</span>
        <v-icon class="ml-2">mdi-login-variant</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isAuth"]),
  },
};
</script>

<style>
#home-container {
  background-color: #f0f0ff;
  height: 100%;
}
</style>
