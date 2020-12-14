<template>
  <v-navigation-drawer
    app
    absolute
    temporary
    v-model="drawer"
    src="https://img.freepik.com/free-vector/green-background-with-halftone-effect-squares_23-2148661430.jpg?size=626&ext=jpg"
  >
    <v-row>
      <v-col class="text-center" style="color: #ffffff;text-shadow: 0.1em 0.1em 0.2em black">
        <h2>
          <strong>Bem vindo ao</strong>
        </h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <div
          style="width: 160px;background-color: #72e06e;margin: 6px auto;border-radius: 1em;box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);"
        >
          <v-img class="image-title" :src="payload"></v-img>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-img class="image-qrcode-user-account" :src="getQrCode || qrCode"></v-img>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        class="text-center"
        style="color: #ffffff;text-shadow: 0.1em 0.1em 0.2em black"
      >
        <h4>Agência: {{ getConta.agencia }}</h4>
        <h4>Conta: {{ getConta.numero }}</h4>
      </v-col>
    </v-row>

    <v-list-item>
      <v-list-item-avatar>
        <v-img
          src="https://store-images.s-microsoft.com/image/apps.65408.9007199266251942.0c0e7f8d-7313-47d7-83e8-c34fea5d6188.1d03a141-61d5-4864-b738-9e0bb6abab53?mode=scale&q=90&h=200&w=200&background=%23009000"
        ></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title style="color: #ffffff;">
          <strong>
            <h3>{{ getConta.tratativa || 'User'}}</h3>
          </strong>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item @click="selecBar(item)" v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon color="white" size="30px">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="pt-2 pb-2" style="color: #ffffff;font-size: 1.2em">
            <strong>{{ item.title }}</strong>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Drawer",

  data() {
    return {
      qrCode: require("../assets/loader.gif"),
      payload: require("../assets/Pay-2.png"),
      items: [
        { id: 1, title: "Perfil", icon: "mdi-account" },
        { id: 2, title: "Configurar", icon: "mdi-cog" },
        { id: 3, title: "Solicitar ajuda", icon: "mdi-help" },
        { id: 4, title: "Sair do app", icon: "mdi-logout-variant" },
      ],
      mini: true,
    };
  },

  created() {
    this.aConta();
  },

  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("SET_DRAWER", val);
      },
    },
    ...mapGetters("auth", {
      getConta: "getConta",
      getQrCode: "getQrCode",
    }),
  },

  methods: {
    selecBar(item) {
      switch (item.id) {
        case 1:
          break;
        case 2:
          break;
        case 3:
          break;
        case 4:
          this.logout();
          break;
        default:
          break;
      }
    },

    ...mapActions("auth", {
      logout: "logout",
      aConta: "aConta",
    }),
  },
};
</script>

<style scoped>
.image-qrcode-user-account {
  width: 150px;
  height: 150px;
  background: #fff;
  border-radius: 5px;
  margin: auto;
}
.image-title {
  width: 160px;
  margin: 6px auto;
}
</style>