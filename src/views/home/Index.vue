<template>
  <v-app>
    <AppBar />
    <Drawer />
    <AppView />
  </v-app>
</template>

<script>
export default {
  name: "HomeIndex",
  components: {
    AppBar: () => import("../../template/AppBar"),
    AppView: () => import("../../template/AppView"),
    Drawer: () => import("../../template/Drawer"),
  },
};
</script>

<style>
</style>