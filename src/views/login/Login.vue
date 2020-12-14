<template>
  <v-container id="area" fluid tag="section">
    <div id="gradient"></div>

    <div class="fundo">
      <v-row>
        <v-col>
          <v-card color="gray" outlined shaped elevation="13" style="box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);" class="align-center" height="auto">
            <v-row>
              <v-col>
                <v-card-title class="pb-6" style="font-size: 2em; color: #00ab0b">
                  <strong>Faça seu Login</strong>
                </v-card-title>
                <v-card-subtitle style="font-size: 1.2em">
                  <strong>Bem vindo novamente!</strong>
                </v-card-subtitle>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-img
                  class="logo"
                  alt="logo"
                  src="https://blog.velo.com.br/wp-content/uploads/2020/03/LOGO-Vertical.png"
                ></v-img>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-text-field
                  v-model="creden.login"
                  placeholder="Digíte seu nome de usuário"
                  filled
                  :rules="rulesUser"
                  hide-details="auto"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-text-field
                  v-model="creden.senha"
                  filled
                  hide-details="auto"
                  placeholder="Digíte sua senha"
                  :rules="rulesPassword"
                  type="password"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row class="text-center">
              <v-col>
                <v-btn
                  color="#059100"
                  outlined
                  v-bind:disabled="!creden.login || !creden.senha"
                  @click="login(creden)"
                  elevation="5"
                >Entrar</v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <transition enter-active-class="animated rubberBand">
      <router-view></router-view>
    </transition>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    creden: {
      login: null,
      senha: null,
    },
    rulesUser: [
      (value) => !!value || "Campo obrigatório.",
      (value) => (value && value.length >= 4) || "Min 4 caracteres",
    ],
    rulesPassword: [
      (value) => !!value || "Campo obrigatório.",
      (value) => (value && value.length >= 4) || "Min 6 caracteres",
    ],
  }),
  methods: {
    ...mapActions("auth", {
      login: "login",
    }),
    ...mapGetters("auth", {
      getAuth: "getAuth",
    }),
  },
};
</script>

<style scoped>
.fundo {
  width: 100%;
  height: 100vh;
  background-image: url(https://picsum.photos/800/600?random=2);
  background-size: cover;
}
#gradient {
  background: linear-gradient(
    to right,
    rgba(58, 97, 134, 0.5),
    rgba(137, 37, 62, 0.5)
  );
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  animation: gradientBG 3s ease infinite;
}
.logo {
  width: 200px;
  margin: 6px auto;
}
</style>
