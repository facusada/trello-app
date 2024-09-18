<template>
  <v-card-text>
    <draggable 
      class="task-list" 
      group="tasks" 
      :list="tasks"
      item-key="id"
    >
    <div
      v-for="(task, index) in tasks" :key="index"
    >
      <Task :task="task" />
    </div>
    </draggable>
  </v-card-text>
</template>
  
<script>
import { VueDraggableNext } from 'vue-draggable-next'
import Task from '@/components/Task.vue'

export default {
  components: {
    draggable: VueDraggableNext,
    Task
  },
  props: {
    tasks: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
};
</script>

<style scoped>
.draggable {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.draggable > div {
  background-color: white;
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: grab;
  transition: box-shadow 0.2s;
}

.draggable > div:active {
  cursor: grabbing;
}

.draggable > div:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.draggable > div:dragging {
  opacity: 0.7;
}
</style>