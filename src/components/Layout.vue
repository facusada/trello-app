<template>
  <v-container fluid class="d-flex">
    <Sidebar :projects="projects"/>
    <v-main>
      <router-view />
    </v-main>
  </v-container>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
  components: {
    Sidebar
  },
  data() {
    return {
      projects: [
        { id: 1, name: 'Proyecto 1' },
        { id: 2, name: 'Proyecto 2' },
        { id: 3, name: 'Proyecto 3' },
      ]
    }
  }
}
</script>

<style scoped>
.v-main {
  padding: 20px;
  width: calc(100% - 260px);
}
</style>