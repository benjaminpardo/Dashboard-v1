<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="10" sm="6" md="3">
        <v-card class="elevation-12 text-center">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Registro</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form">
              <v-text-field
                v-model="user.firstName"
                placeholder="Nombre"
                prepend-icon="mdi-account"
                type="text"
              />
              <v-text-field
                v-model="user.lastName"
                placeholder="Apellidos"
                prepend-icon="mdi-account"
                type="text"
              />
              <v-text-field
                v-model="user.email"
                placeholder="Correo"
                prepend-icon="mdi-email"
                type="text"
              />
              <v-text-field
                v-model="user.password"
                placeholder="Contraseña"
                prepend-icon="mdi-lock"
                type="password"
              />
            </v-form>
            <v-btn class="m-auto mr-1" @click="clearForm()">Limpiar</v-btn>
            <v-btn color="success" class="m-auto ml-1" @click="crearUsuario()"
              >Registro</v-btn
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- <pre>{{ $data }} </pre> -->
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
import Api from "@/services/api.service";
export default {
  data() {
    return {
      registerService: new Api("/auth/register"),
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapMutations(["setSnack"]),
    crearUsuario() {
      this.registerService
        .save(this.user)
        .then(() => {
          this.setSnack({
            isOpen: true,
            text: "Usuario creado con exito",
            color: "success",
          });
          this.$router.push("/auth/login");
        })
        .catch((error) => {
          this.setSnack({
            isOpen: true,
            text: error.response.data.error,
            color: "error",
          });
          console.log("Bandera error 1");
        });
    },
    clearForm() {
      this.user = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      };
    },
  },
};
</script>
