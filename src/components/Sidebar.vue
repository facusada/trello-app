<template>
  <v-navigation-drawer
    app
    permanent
    width="260"
    class="sidebar-modern"
  >
    <v-sheet class="pa-4 text-center title-modern">
      <h1 class="text-h5 mb-0">Trello-app</h1>
    </v-sheet>
    <v-divider></v-divider>
  
  
    <v-list class="project-list">
      <v-list-item-group>
        <v-list-item
          v-for="project in projects"
          :key="project.id"
          class="project-item-modern"
        >
          <v-list-item-icon class="icon-modern">
            <v-icon>mdi-folder-outline</v-icon>
          </v-list-item-icon>
          <router-link
            :to="`/project/${project.id}`"
            class="v-list-item-content project-link-modern"
          >
            {{ project.name }}
          </router-link>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.sidebar-modern {
  background: linear-gradient(135deg, #e0f7fa, #e3f2fd);
  color: #333;
  border-right: none;
  box-shadow: 2px 0 15px rgba(0, 0, 0, 0.05);
}

.title-modern {
  background-color: transparent;
  color: #333;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 1px;
}

.project-list {
  margin-top: 20px;
}

.project-item-modern {
  margin-bottom: 15px;
  transition: transform 0.2s ease-in-out;
}

.project-item-modern:hover {
  transform: translateX(5px);
}

.project-link-modern {
  color: #333;
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  padding-left: 10px;
  display: flex;
  align-items: center;
  transition: color 0.2s ease-in-out;
}

.project-link-modern:hover {
  color: #0288d1;
}

.icon-modern {
  color: #0288d1;
  margin-right: 10px;
}

.icon-modern:hover {
  color: #039be5;
}
</style>