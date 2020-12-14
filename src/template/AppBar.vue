<template>
  <v-app-bar color="#26e074" app absolute flat>
    <v-btn @click="setDrawer(!drawer)" color="white" class="mr-3" elevation="1" fab small>
      <v-icon>mdi-menu</v-icon>
    </v-btn>

    <!-- 
      <v-toolbar-title>Page title</v-toolbar-title>
      @click="setDrawer(!drawer)"
    -->
  </v-app-bar>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["drawer"]),
  },
  methods: {
    ...mapMutations({
      setDrawer: "SET_DRAWER",
    }),
  },
};
</script>

<style scoped>
.fundo {
  background: linear-gradient(#26e074, #414141);
  height: 100%;
}
</style>
