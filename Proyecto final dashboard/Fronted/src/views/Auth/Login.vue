<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="10" sm="6" md="3">
        <v-card class="elevation-12 text-center">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Iniciar Sesión</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form
              v-model="loginForm"
              ref="loginForm"
              onsubmit="return false;"
              @submit="login()"
            >
              <v-text-field
                v-model="credenciales.email"
                placeholder="Correo"
                prepend-icon="mdi-email"
                type="email"
              />
              <v-text-field
                v-model="credenciales.password"
                placeholder="Contraseña"
                prepend-icon="mdi-lock"
                type="password"
              />
              <v-btn color="primary" style="margin: auto" type="submit"
                >Ingresar</v-btn
              >
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
import Api from "@/services/api.service";

export default {
  data() {
    return {
      loginService: new Api("auth/login"),
      loginForm: true,
      credenciales: {
        email: "",
        password: "",
      },
      snackbar: {
        isOpen: false,
        text: "",
        color: "success",
      },
    };
  },
  methods: {
    ...mapMutations(["setUser", "setSnack", "setToken"]),
    login() {
      this.loginService
        .save(this.credenciales)
        .then((response) => {
          const { user, token } = response.data;
          this.setUser(user);

          this.setToken(token);

          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("token", token);
          this.$router.push("/profile");
          this.setSnack({
            isOpen: true,
            text: `Bienvenido ${user.firstName} ${user.lastName}`,
            color: "success",
          });
        })
        .catch((error) => {
          this.setSnack({
            isOpen: true,
            text: error.response.data.error,
            color: "error",
          });
        });
    },
  },
};
</script>
