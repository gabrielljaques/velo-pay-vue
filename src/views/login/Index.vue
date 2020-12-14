<template>
  <v-app>
    <AppView />
  </v-app>
</template>

<script>
export default {
  name: "LoginIndex",
  components: {
    AppView: () => import("../../template/AppView"),
  },
};
</script>

<style></style>
