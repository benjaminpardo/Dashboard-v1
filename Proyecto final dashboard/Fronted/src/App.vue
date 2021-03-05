<template>
  <v-app>
    <!-- <AppBar /> -->
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <Snackbar />
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
