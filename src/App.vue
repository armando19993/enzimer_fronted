<template>
  <v-app>
    <sidebar-component/>
    <v-main class="grey lighten-3 ml-7">
      <v-container fluid >
        <router-view/>  
      </v-container>
    </v-main>
    <v-footer app>
      <!-- -->
    </v-footer>
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
};
</script>
