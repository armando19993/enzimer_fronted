<template>
  <v-container fluid>
    <v-app-bar color="grey lighten-3" class="mb-4 mt-0" elevation="0">  
      <h2 class="text--grey">
        <v-icon color="teal" large>mdi-arrow-right</v-icon>
        Flashcards
      </h2>
      <v-spacer></v-spacer>
      <v-btn 
          color="green  lighten-1"
          dark
          elevation="0"
        >
          Generar Tarea
        </v-btn>
    </v-app-bar>
    <v-row>
      <v-col cols="12">
          <v-card-title primary-title>
            <span class="teal--text mr-3">Curso: </span> Historia de perú
          </v-card-title>
          <v-divider></v-divider>
          <v-row class="mt-10">
            <v-col v-for="item in 10" :key="item" cols="12" md="6" lg="4" class="text-center">
              <v-card class="rounded-lg" elevation="3">
                <v-card-text class="pa-10">
                  <v-icon style="font-size:70px" color="teal">mdi-book-open-page-variant</v-icon>
                  <p class="text-center mt-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis explicabo, amet repellendus debitis voluptates ipsam modi sed nobis incidunt minus!</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>  
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    export default {
        name: 'IndexFlashcardPage',
        data: () => ({
          
        }),
    }
</script>
