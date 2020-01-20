<template>
  <div class="login">
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";
export default {
  name: "login",
  components: {
    Login
  },
  data: () => ({
    logado: false
  }),
  methods: {
    fezLogin() {
      alert("aeee");
      this.logado = !this.logado;
      return this.logado;
    }
  }
};
</script>
