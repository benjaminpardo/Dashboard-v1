<template>
<v-app id="fondo">

  <v-container fill-height fluid>
    <v-card class="mx-auto align-center justify-center" elevation="9" height="50%" width="50%" fill-height >
        <v-row no-gutters   class=" align-center justify-center" >
          <v-col class="col-12 col-sm-6 col-md-8" justify="center">
            <v-container>
              <v-form >
                <v-container class="py-0">
                  <h1 id="titulo">Ingreso</h1>

                  <v-row>
                    <v-col
                      cols="12"
                      md="6"
                    >
                      <v-text-field
                      v-model="credenciales.email"
                      prepend-icon="mdi-email"
                        type="email"
                        label="Correo electrónico"
                        class="purple-input"
                      />
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col
                      cols="12"
                      md="6"
                    >
                      <v-text-field
                       v-model="credenciales.password"
                        placeholder="Contraseña"
                        prepend-icon="mdi-lock"
                        type="password"
                        label="Contraseña"
                        class="purple-input"
                      />
                      <h6>¿Haz olvidado la contraseña?</h6>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col
                      cols="4"
                      class="text-left"
                    >
                      <v-btn 
                        rounded
                        class="boton mr-0 "
                        color="primary"
                        
                        v-on:click="login()"
                      >
                        Ingresar
                      </v-btn>
                    </v-col>

                    <v-col
                      cols="4"
                      class="text-right"
                    >
                      <v-btn id="botonRegistro"
                        rounded
                        class="boton mr-0 "
                        color=""
                        to="/registro"
                      >
                        Registrar
                      </v-btn>
                    </v-col>
                  </v-row>

                </v-container>
          </v-form>
            </v-container>
          </v-col>



          
          <v-col class="col-6 col-md-4" align="center" justify="center" >
            <v-img
              lazy-src="../assets/logoCircular.png"
              max-height="300px"
              max-width="300px"
              src="../assets/logoCircular.png"
            ></v-img>
          </v-col>
          
        </v-row>
        
    </v-card>
  </v-container>

</v-app>
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
          this.$router.push("/dashboard");
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

<style>
  #fondo{
        /* background: black; */
        background: linear-gradient(135deg,#2c92f2 50%,#466fbb);
    }
  .v-tabs-bar{
    float:right !important;
  }
  .v-tab{
    text-transform: none !important;
  }
  .no-gutters {
    margin: 30px;
}
  v-row{
    margin-top: auto;
    margin-bottom: auto;
  }
  #botonRegistro{
    color: white;
    background: black;
    
  }
  .botonRegistro{
    min-width:10%;
    max-width: 30%;
    widows: 200px;
  }
</style>