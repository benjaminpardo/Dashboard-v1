<template>
  <v-container class="fill-height" fluid>
    <v-row class="flex-column" align="center" justify="center">
      <h1>Perfil</h1>
      <h2>Nombre: {{ user.firstName }}</h2>
      <h2>Apellido: {{ user.lastName }}</h2>
      <h2>Correo: {{ user.email }}</h2>
      <h2>Rol: {{ user.role }}</h2>
      <h2>ID: {{ user._id }}</h2>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(["user"]),
  },
};
</script>
