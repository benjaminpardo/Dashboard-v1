<template>
  <section>
    <h4>{{ title }}</h4>
    <v-card
      v-for="(todo, index) in tasks"
      :key="`${title}${index}`"
      class="px-8 mb-4 rounded-pill"
    >
      <v-card-text class="d-flex align-center">
        <span>
          <h4>Titulo tarea</h4>{{ todo.titulo }}
        </span>
        <span>
          <h4>Descripción tarea</h4>{{ todo.descripcion }}
        </span>
        <v-spacer />
        <slot name="buttons" :index="index"></slot>
      </v-card-text>
    </v-card>
  </section>
</template>

<script>
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
};
</script>