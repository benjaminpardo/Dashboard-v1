<template>
  <section>
    <!-- <h4>{{ title }}</h4> -->
    <v-card
      v-for="(todo, index) in tasks"
      :key="`${title}${index}`"
      class="px-8 mb-4 rounded-pill"
    >
      <v-card-text 
      v-if=" todo.id_usuario == user._id"
      class="d-flex align-center">
        <span>
          <div class="v-col"><h4 ></h4>{{ todo.titulo }}</div>
        </span>
        <v-spacer />
        <span>
          <div><h4 ></h4>{{ todo.descripcion }}</div> 
        </span>
        <v-spacer />
        <!-- <span>
          <div><h4 >ID USER</h4>{{ todo.id_usuario }}</div> 
        </span> -->
        <v-spacer />
        <slot name="buttons" :index="index"></slot>
      </v-card-text>
    </v-card>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    title: {
      type: String,
      default: "Activas",
    },
    tasks: {
      type: Array,
      required: true,
    },
  },
  
  computed: {
    ...mapState(["token","user"]),
   
    
   },
};
</script>

<style>

</style>