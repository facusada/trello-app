<template>
  <v-container>
    <v-row>
      <v-col
        v-for="list in boards"
        :key="list.id"
        cols="12" sm="4"
      >
        <v-card class="pa-4">
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
import { mapState } from 'vuex';
import { VueDraggableNext } from 'vue-draggable-next'
import List from '@/components/List.vue';
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
  computed: {
    ...mapState(['boards'])
  }
};
</script>

<style scoped>
.v-col {
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f4f5f7;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

h3 {
  font-weight: bold;
  color: #333;
}
</style>