<template>
  <section class="container">
    <h1>Agregar tarea</h1>
    <!-- <h2>Nombre: {{ user.firstName }}</h2>
    <h2>Apellido: {{ user.lastName }}</h2>  -->
    <!-- <h2>ID: {{ user._id }}</h2> -->
    <v-row>
      <v-col>
        <div class="form-group" >
        <v-text-field
          v-model="tarea.titulo"
          placeholder="Titulo"
          type="text"
        />
        <v-text-field
          placeholder="Descripción de la tarea"
          v-model="tarea.descripcion"
          type="text"
        />
        
        
        <v-btn color="success" class="m-auto ml-1" @click="crearTarea()"
                >Crear tarea</v-btn>
        <v-btn color="primary" class="m-auto ml-1" text to="../views/ListaTareas"
                >Ver todas las tareas</v-btn>
        <!-- <v-btn color="success" class="m-auto ml-1" @click="getTasks()"
                >Traer tareas</v-btn> -->
      </div>
      </v-col>
      <v-col>
        <img id="imagenTareas" src="../assets/dibujoCalendario.svg" alt="">
      </v-col>
    </v-row>


    

   <!--  <TaskCard :tasks="todos">
      <template v-slot:buttons="props">
        <v-btn color="error" icon @click="deleteTodo(props.index)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
    </TaskCard>

    <TaskCard title="Papelera" :tasks="trash">
      <template v-slot:buttons="props">
        <v-btn color="primary" icon @click="restoreTodo(props.index)">
          <v-icon>mdi-delete-restore</v-icon>
        </v-btn>
        <v-btn color="error" icon @click="deleteForever(props.index)">
          <v-icon>mdi-delete-forever</v-icon>
        </v-btn>
      </template>
    </TaskCard> -->

    <!-- <pre>{{ $data }} </pre> -->
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from "vuex";
// import axios from "axios";
import Api from "@/services/api.service";
export default {
  data() {
    
    return {
      registerService: new Api("views/tareas"),
      getTareasServices: new Api("views/tareas"),
      usuario: localStorage.user,

      tarea:{
        id_usuario:"",
        titulo: "",
        descripcion: "",
      },
       todos: [],
       trash: [],
       
    };
  },
  created() {
    this.getTasks();
  },
  methods: {
    ...mapMutations(["setSnack"]),
    crearTarea() {
      this.tarea.id_usuario= this.user._id,

      this.registerService
        .save(this.tarea
        )
        .then(() => {
          console.log("Metodo crear tarea2")
          this.setSnack({
            
            isOpen: true,
            text: "Tarea creado con exito",
            color: "primary",
          });
          console.log("Método setSnack");
          //this.$router.push("../views/tareas");
          this.todos.push(this.tarea);
          
        })
        .catch((error) => {
          this.setSnack({
            isOpen: true,
            text: error.response.data.error,
            color: "error",
          });
        });
        console.log("Catch error");
        
    },

    getTasks() {
      this.getTareasServices
        .save(this.user._id)
        .then(() => {
          console.log("Id guardado");
          this.setSnack({
            isOpen: true,
            text: `Tareas recopiladas`,
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
    addNewTodo() {
      if (this.newTodo.length > 0) {
        this.todos.push({
          title: this.newTodo,
          descripcion: this.descripcion,
          status: false,
        });
        this.newTodo = "";
        this.descripcion = "";
       
        console.log("Tarea creada");
      }
    },
    addTarea() {
      
        this.todos.push({
          title: this.tarea.titulo,
          descripcion: this.tarea.descripcion,
          status: false,
        });
        this.titulo = "";
        this.descripcion = "";
       
        console.log("Tarea creada");
      
    },
    deleteTodo(index) {
      this.trash.push(this.todos[index]);
      this.todos.splice(index, 1);
    },
    restoreTodo(index) {
      this.todos.push(this.trash[index]);
      this.trash.splice(index, 1);
    },
    deleteForever(index) {
      this.trash.splice(index, 1);
    },
  },
  computed: {
    ...mapState(["token","user"]),
   
    
  },
};
</script>

<style >

#imagenTareas{
  width: 100%;
}
</style>









