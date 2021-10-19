<template>
  <v-app>
    <sidebar-component v-if="authenticated" />
    <v-main class="grey lighten-3" :class="authenticated ? 'ml-7' : '' ">
      <v-container fluid :class="authenticated ? '' : 'pa-0' ">
        <router-view/>  
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SidebarComponent from './components/commons/SidebarComponent.vue';
export default {
  name: 'App',
  components:{
    SidebarComponent
  },
  data: () => ({
    
  }),
  computed:
  {
    authenticated() {
      return this.$store.state.auth.user;
    },
  }
};
</script>
