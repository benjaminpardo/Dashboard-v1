<template>
  <v-app>
      <v-app-bar dense color="#35A1F4" dark class="auxnav">
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
                        to="/login"
                      >
                        Cerrar Sesión
                      </v-btn>
    </template>

  </v-app-bar>
    <br>
    <v-row>
        <v-col>
            <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-toolbar
      color="deep-orange"
      dark
    >

      <v-toolbar-title>Lista de tareas</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list two-line>
      <v-list-item-group class="prod"
        v-model="model"
      >
        <tarea :tasks="tareas">
      <template v-slot:buttons="props">
        <v-btn color="error" icon @click="deleteTodo(props.index)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
    </tarea>
         </v-list-item-group>
     </v-list>
        </v-card>
        </v-col>





        <v-col>
            <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-toolbar
      color="deep-orange"
      dark
    >

      <v-toolbar-title>Papelera de tareas</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list two-line>
      <v-list-item-group class="prod"
        v-model="model"
      >
        <tarea :tasks="trash">
      <template v-slot:buttons="props">
        <v-btn color="error" icon @click="deleteTodo(props.index)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
    </tarea>
         </v-list-item-group>
     </v-list>
        </v-card>
        </v-col>
    </v-row>

  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import tareaService from "@/services/tarea.service";
export default {
data (){
    return{
         page: 1,
      pageCount: 0,
      itemsPerPage: 10,
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
  },
  computed: {
    ...mapState(["token","user"]),
   
    
   },
}
</script>

<style>
    .auxnav{
        max-height: 95px
    }
</style>