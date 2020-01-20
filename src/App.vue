<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    usuario: "",
    senha: "",
    logado: false
    //
  }),
  methods: {
    fezLogin() {
      this.logado = !this.logado;
      return this.logado;
    }
  }
};
</script>
