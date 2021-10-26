<template>
  <v-app>
    <sidebar-component v-if="authenticated" />
    <v-main class="grey lighten-3" :class="authenticated ? 'ml-7' : '' ">
      <v-container fluid :class="authenticated ? '' : 'pa-0' ">
        <router-view/>  
      </v-container>
    </v-main>
    <v-snackbar v-model="snackbar.active" :timeout="3000" :color="snackbar.color" right :multiLine="true">
      {{ snackbar.message}}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar.active = false">
          x
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
/* COMPONENTES */
import SidebarComponent from './components/commons/SidebarComponent.vue';
/* VUEX */
export default {
  name: 'App',
  components:{
    SidebarComponent
  },
  data: () => ({
    
    }),
  computed:
  {
    snackbar()
    {
      return this.$store.state.alert
    },
    authenticated() {
      return this.$store.state.auth.user;
    },
  }
};
</script>
