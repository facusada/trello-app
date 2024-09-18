<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>


<style scoped>
.v-main {
  background: linear-gradient(135deg, #e0f7fa, #e3f2fd);
}
</style>