<template>
    <v-card class="pa-2 mb-2" outlined>
      <v-card-title class="text-h6">{{ task.title }}</v-card-title>
      <v-card-subtitle>{{ task.description }}</v-card-subtitle>
    </v-card>
  </template>
  
  <script>
  export default {
    props: {
      task: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .v-card {
    cursor: grab;
  }
  </style>