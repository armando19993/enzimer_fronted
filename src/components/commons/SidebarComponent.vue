<template>
  <v-navigation-drawer 
      app
      permanent
      expand-on-hover
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list
        dense
        nav
        class="mt-16 pt-16"
      >
        <v-list-item link to="/dashboard" >
          <v-list-item-icon class="app-margin-auto py-10">
            <v-icon>mdi-monitor</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="ml-5">
            <v-list-item-title >Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/register" >
          <v-list-item-icon class="app-margin-auto py-10">
            <v-icon>mdi-bank</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="ml-5">
            <v-list-item-title >Registro</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/login">
          <v-list-item-icon class="app-margin-auto py-10">
            <v-icon>mdi-bank</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="ml-5">
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/tests">
          <v-list-item-icon class="app-margin-auto py-10">
            <v-icon>mdi-note-text</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="ml-5">
            <v-list-item-title class="text-capitalize">tests</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/questions">
          <v-list-item-icon class="app-margin-auto py-10">
            <v-icon>mdi-flask</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="ml-5">
            <v-list-item-title class="text-capitalize">questions</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/profile">
          <v-list-item-icon class="app-margin-auto py-10">
            <v-icon>mdi-account-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="ml-5">
            <v-list-item-title class="text-capitalize">profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/flashcards">
          <v-list-item-icon class="app-margin-auto py-10">
            <v-icon>mdi-card-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="ml-5">
            <v-list-item-title class="text-capitalize">Flashcards</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/cards">
          <v-list-item-icon class="app-margin-auto py-10">
            <v-icon>mdi-card</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="ml-5">
            <v-list-item-title class="text-capitalize">cards</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/criamf">
          <v-list-item-icon class="app-margin-auto py-10">
            <v-icon>mdi-calendar</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="ml-5">
            <v-list-item-title class="text-capitalize">Criamf</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name:'SidebarComponent'
}
</script>
