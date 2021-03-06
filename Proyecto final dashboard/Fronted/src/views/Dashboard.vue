<template>
<v-app>
  <v-app-bar dense color="#35A1F4" dark>
    <template v-slot:extension>
      <h1>pulpo.cl</h1>
      <v-tabs>
        
        <v-tab to="/dashboard">Dashboard</v-tab>
        <v-tab to="/historico">Histórico</v-tab>
        
      </v-tabs>
      <v-btn id="botonRegistro"
                        rounded
                        class="boton mr-0 "
                        color="deep-orange"
                        to="/"
                        @click="logout()"
                      >
                        Cerrar Sesión
                      </v-btn>
    </template>

  </v-app-bar>
  
    <v-container class="d-flex justify-center mb-6" >
      <v-avatar >
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      > 
    </v-avatar>
    </v-container>
    <h3 class="justify-center d-flex">{{ user.firstName }}</h3>
    <h4 class="justify-center d-flex">{{ user.lastName }}</h4>
    <h5 class="justify-center d-flex">{{ user.email }}</h5>

 <!-- PROGRESS BAR --> 
<div>
    <v-progress-linear
      color="light-blue"
      height="10"
      value="10"
      striped
    ></v-progress-linear>
    <br>
    <v-progress-linear
      height="10"
      value="45"
      striped
      color="lime"
    ></v-progress-linear>
    <br>
    <v-progress-linear
      value="60"
      height="10"
      striped
      color="deep-orange"
    ></v-progress-linear>
  </div>
<!-- PROGRESS BAR END --> 

<!-- PANELES -->
<v-row>
  <v-col>
    <v-card
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          class="mx-auto"
          height="350"
          max-width="450"
        >
          <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
            Tareas
          </v-card-text>
            <v-list two-line>
            <v-list-item-group class="prod"
                v-model="model"
            >
                <tarea :tasks="tareas">
            </tarea>
                </v-list-item-group>
            </v-list>

<div class="text-center">
          <v-btn 
      class="mx-2 justify-center"
      fab
      dark
      color="#35A1F4"
     
    >
    <!-- falta centrar boton -->
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
</div>
    </v-card>


  </v-col>

  
  

  <v-col>
    <v-card
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          class="mx-auto"
          height="280"
          max-width="450"
        >
          <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
            Accesos directos
          </v-card-text>

           <v-container>
  <v-row no-gutters>
    <v-col md="6">
        <router-link to="//intranet.ufro.cl/">
          <img :src="require('../assets/intranet.png')" alt="" width="180" >
        </router-link>
    </v-col>
    <v-col md="6">
      <router-link to="//campusvirtual.ufro.cl/">
      <img :src="require('../assets/campus.png')" alt="" width="180" height="60">
      </router-link>
    </v-col>
  </v-row> 
  <v-row no-gutters>
    <v-col md="6">
      <router-link to="//gmail.com">
      <img :src="require('../assets/gmail.png')" alt="" width="180">
      </router-link>
    </v-col>
    <v-col md="6">
      <router-link to="//buda.com">
      <img :src="require('../assets/buda.png')" alt="" width="200" height="67">
      </router-link>
    </v-col>
  </v-row> 

</v-container>
 
        </v-card>
  </v-col>
  <!-- <v-row no-gutters>
    <v-col md="6">
      <img :src="require('../assets/intranet.png')" alt="" width="180" >
    </v-col>
    <v-col md="6">
      <img :src="require('../assets/campus.png')" alt="" width="180" height="60">
    </v-col>
  </v-row> 
  <v-row no-gutters>
    <v-col md="6">
      <img :src="require('../assets/gmail.png')" alt="" width="180">
    </v-col>
    <v-col md="6">
      <img :src="require('../assets/buda.png')" alt="" width="200" height="67">
    </v-col>
  </v-row>  -->


  <v-col>
    <v-card
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          class="mx-auto"
          height="350"
          max-width="450"
        >
          <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
            Notificaciones
          </v-card-text>
          <v-container>
            <!-- Noticia 1 -->
            <v-flex xs12>
            <v-card color="white" class="black--text">
              <v-card-title primary-title>
                <div>
                  <div class="" id="tituloNoticias">Gestión de Calidad</div>
                  <span class="textoNoticias">Estimados alumnos, las notas actualizadas se encuentran en intranet...</span>
                </div>
                <v-btn id="botonNoticias" href="https://intranet.ufro.cl" flat dark>Revisar más</v-btn>
              </v-card-title>
              <v-card-actions>
              </v-card-actions>
            </v-card>
          </v-flex>

          <!-- Noticia 2 -->
          <v-flex xs12>
            <v-card color="white" class="black--text">
              <v-card-title primary-title>
                <div>
                  <div class="" id="tituloNoticias">Desarrollo Web</div>
                  <span class="textoNoticias">Nuevo correo de José Campos en ufromail. "Notas ingresadas..."</span>
                </div>
                <v-btn id="botonNoticias" href="https://intranet.ufro.cl" flat dark>Revisar más</v-btn>
              </v-card-title>
              <v-card-actions>
              </v-card-actions>
            </v-card>
          </v-flex>
          </v-container>
          

          
        </v-card>
  </v-col>
</v-row>
<!-- PANELES END -->
<br>
<br>
<!-- SPARKLINES -->
<v-row>
  <v-col>
      <v-card
    class="mx-auto text-center"
    color="green"
    dark
    max-width="600"
  >
    <v-card-text>
      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline
          :value="value"
          color="rgba(255, 255, 255, .7)"
          height="100"
          padding="24"
          stroke-linecap="round"
          smooth
        >
         
        </v-sparkline>
      </v-sheet>
    </v-card-text>

    <v-card-text>
      <div class="display-1 font-weight-thin">
        Productividad semanal
      </div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="justify-center">
      <v-btn
        block
        text
      >
        Ver Histórico
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-col>
    
  <v-col>
    <v-card
    class="mx-auto text-center"
    color="blue"
    dark
    max-width="600"
  >
    <v-card-text>
      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline
          :value="value2"
          color="rgba(255, 255, 255, .7)"
          height="100"
          padding="24"
          stroke-linecap="round"
          smooth
        >
          
        </v-sparkline>
      </v-sheet>
    </v-card-text>

    <v-card-text>
      <div class="display-1 font-weight-thin">
        Horas para tu bienestar
      </div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="justify-center">
      <v-btn
        block
        text
      >
        Ver histórico
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-col>
</v-row>

<!-- SPARKLINES END -->

</v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import tareaService from "@/services/tarea.service";
export default {
data (){
    return{
         page: 1,
      pageCount: 0,
      itemsPerPage: 3,
      headers: [
        { text: "ID", value: "id_usuario" },
        { text: "Título Tarea", value: "titulo" },
        { text: "Descripción tarea", value: "descripcion" },
      ],
      tareas: [],
      trash: [],
    };
},
    mounted() {
     this.getTareas();
  },
  methods: {
    getTareas() {
      console.log("Bandera 1");
      tareaService
        .all()
        .then((response) => {
          this.tareas = response.data;
          console.log("Bandera 2");
        })
        .catch((error) => {
          console.log(error.response.data.error);
          console.log("Bandera 3");
        });
    },
    deleteTodo(index) {
      this.trash.push(this.tareas[index]);
      this.tareas.splice(index, 1);
    },
    restoreTodo(index) {
      this.tareas.push(this.trash[index]);
      this.trash.splice(index, 1);
    },
    deleteForever(index) {
      
      tareaService
      .delete(this.trash[index].id)
      console.log(this.trash[index].id)
      this.trash.splice(index, 1);
    },
    ...mapMutations(["setUser"]),
    logout() {
      this.setUser(null);
      localStorage.clear();
    },
  },
  computed: {
    ...mapState(["token","user"]),
   
    
   },
}
</script>

<style>
  .v-tabs-bar{
    float:right !important;
  }
  .v-tab{
    text-transform: none !important;
  }

  #tituloNoticias{
    font-size: 15px;
  }
  .textoNoticias{
    font-size: 15px;
    font-weight: 300;
  }
  .botonNoticias{
    margin-top: 5px;
  }
  .v-card__title{
    padding-bottom: 5px;
    line-height:16px
  }
</style>