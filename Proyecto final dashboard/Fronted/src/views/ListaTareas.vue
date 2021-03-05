<template>
    
  <v-card flat class="px-6">
    
    <!-- <v-card-text>
        <h1>LISTA DE TAREAS</h1>
        <lu v-for="(item, i) in tareas" :key="i">
          <li v-if=" item.id_usuario == user._id">
            
          ID: {{item.id_usuario}} - {{item.titulo}} - {{item.descripcion}}
          </li>
        </lu>

      <v-data-table
        :headers="headers"
        :items="tareas"
        
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        class="elevation-1"
        @page-count="pageCount = $event"
      ></v-data-table>
      <div class="text-center pt-2">
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
      </div>
      
    </v-card-text> -->
    <div class="container">
      <v-row>
        <v-col>
          <h1 id="titulo1">Revisa tu lista de tareas</h1>
        </v-col>
        <v-col>
           <v-btn color="success" class="m-auto ml-1" text to="../views/tareas">
              Agregar Tarea
            </v-btn>
        </v-col>
      </v-row>
      
    
    <tarea :tasks="tareas">
      <template v-slot:buttons="props">
        <v-btn color="error" icon @click="deleteTodo(props.index)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
    </tarea>

    <tarea title="Tareas realizadas" :tasks="trash">
      <template v-slot:buttons="props">
        <v-btn color="primary" icon @click="restoreTodo(props.index)">
          <v-icon>mdi-delete-restore</v-icon>
        </v-btn>
        <v-btn color="error" icon @click="deleteForever(props.index)">
          <v-icon>mdi-delete-forever</v-icon>
        </v-btn>
      </template>
    </tarea>
  </div>
  </v-card>
  
</template>

<script>
import { mapState } from 'vuex'
import tareaService from "@/services/tarea.service";
export default {
  data() {
    return {
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
};
</script>

<style>
  #titulo1{
    margin-bottom: 30px;
  }
</style>