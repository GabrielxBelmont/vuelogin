<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid style="background-color:black;">
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Formulário de Login</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="usuario"
                    label="Usuário"
                    name="login"
                    type="text"
                  />

                  <v-text-field
                    v-model="senha"
                    id="senha"
                    label="Senha"
                    name="senha"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn class="mb-3" @click="fiadaputa" color="primary"
                  >Login</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import loginMixin from "../mixins/dadosLogin";
export default {
  props: {
    source: String
  },
  data: () => ({ usuario: "", senha: "" }),
  mixins: [loginMixin],
  methods: {
    fiadaputa: function() {
      if (
        this.usuario == loginMixin.loginData[this.usuario][0] &&
        this.senha == loginMixin.loginData[this.usuario][1]
      ) {
        alert("ok");
        this.$emit("fezLogin");
        this.$router.push("home/" + this.usuario);
      }
    }
  }
};
</script>
