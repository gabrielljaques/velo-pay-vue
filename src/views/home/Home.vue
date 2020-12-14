<template>
  <v-container fluid tag="section" class="fundo">
    <router-view />

    <v-row>
      <v-col>
        <div
          style="width: 160px;background-color: #72e06e;margin: 6px auto;border-radius: 1em;box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);"
        >
          <v-img class="logo" alt="logo" :src="myImage"></v-img>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h2 style="color: white;text-shadow: 0.1em 0.1em 0.1em black">Olá, {{ user || '. . .' }}</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card elevation="12" class="cards">
          <v-card-subtitle>
            <v-row>
              <v-icon class="pr-6">mdi-currency-usd-circle-outline</v-icon>
              <h3>Conta</h3>
            </v-row>
            <v-row>
              <v-col cols="12">
                <h3>Saldo disponível</h3>
              </v-col>
            </v-row>
          </v-card-subtitle>

          <v-card-title class="headline">
            <h1>
              <strong>R$ {{ getHome.valor || '0,00' }}</strong>
            </h1>
          </v-card-title>
        </v-card>

        <v-card elevation="12" class="cards mt-6">
          <v-card-subtitle>
            <v-row>
              <v-icon class="pr-6">mdi-cash-multiple</v-icon>
              <h3>Crédito futuro</h3>
            </v-row>
          </v-card-subtitle>

          <v-card-title class="headline">
            <h1>
              <strong>R$ {{ getHome.futuro || '0,00' }}</strong>
            </h1>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <v-row align="end" class="mt-6" no-gutters style="height: auto;">
      <v-col v-for="n in 4" :key="n">
        <v-card class="pa-2" outlined tile>One of three columns</v-card>
      </v-col>
    </v-row>

    <!-- <v-container v-for="align in alignments" :key="align" class="grey lighten-5 mb-6">
      <v-row :align="align" no-gutters style="height: 150px;">
        <v-col v-for="n in 3" :key="n">
          <v-card class="pa-2" outlined tile>One of three columns</v-card>
        </v-col>
      </v-row>
    </v-container>-->
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    alignments: ["start", "center", "end"],
    user: localStorage.getItem("dsUsuario"),
    myImage: require("../../assets/Pay-2.png"),
  }),

  created() {
    this.aAplication();
    console.log(this.getHome);
  },

  computed: {
    ...mapGetters("home", {
      getHome: "getHome",
    }),
  },

  methods: {
    ...mapActions("home", {
      aAplication: "aAplication",
    }),
  },
};
</script>

<style scoped>
.logo {
  width: 160px;
  margin: 6px auto;
}
.fundo {
  background: linear-gradient(#26e074, #414141);
  height: 100%;
}
.cards {
  width: 100%;
  height: auto 0;
  border-radius: 3px;
  background-color: white;
}
.boxes {
  height: 80px;
  width: 25%;
  position: relative;
  bottom: 0;
}
</style>