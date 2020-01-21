<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link @click="pegaDados">
          <v-list-item-action @click="pegaDados">
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title @onclick="pegaDados"
              >Pega Dados</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Bem vindo {{ $route.params.user }}</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="shrink">
            <v-tooltip right>
              <template v-slot:activator="{ on }"> </template>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import loginMixin from "../mixins/dadosLogin";
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    random: ""
  }),
  mixins: [loginMixin],
  created() {
    this.$vuetify.theme.dark = true;
  },
  methods: {
    pegaDados: function() {
      alert(loginMixin.loginData[this.$route.params.user]);
    }
  }
};
</script>
