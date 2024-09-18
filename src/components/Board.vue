<template>
  <v-container fluid fill-height class="d-flex align-center justify-center">
    <v-row
      class="fill-height"
      align="start"
      justify="center"
    >
      <v-col
        v-for="list in allBoards"
        :key="list.id"
        cols="12" sm="4"
      >
        <v-card class="pa-4">
          <h3 class="text-h6 mb-4">{{ list.title }}</h3>
          <v-divider></v-divider>
          <draggable 
            :list="list.tasks" 
            group="tasks"
          >
            <List :tasks="list.tasks" :title="list.title" />
          </draggable>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import List from '@/components/List.vue';
import { VueDraggableNext } from 'vue-draggable-next'
import { getAllBoards } from '@/services/getBoards';
  
export default {
  components: {
    List,
    draggable: VueDraggableNext,
  },
  data () {
    return {
      allBoards: []
    }
  },
  async mounted () {
    this.allBoards = await getAllBoards()
  },
};
</script>

<style scoped>
html, body, #app, .v-application {
  background-color: #1e2a38;
  height: 100%;
  margin: 0;
  padding: 0;
}

.v-container {
  height: 100%;
}

.v-row {
  display: flex;
}

.v-card {
  max-width: 350px;
  min-height: 200px;
  max-height: 400px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.v-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.v-col {
  background-color: #f4f5f7;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

h3 {
  font-weight: bold;
  color: #333;
  text-align: center;
}
</style>