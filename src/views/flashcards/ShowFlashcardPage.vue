<template>
    <v-container fluid>
      <v-app-bar color="grey lighten-3" class="mb-4 mt-0" elevation="0">  
        <div>
          <h2 class="text--grey">
            Flashcards
          </h2>
        </div>
          <v-spacer></v-spacer>
          <v-btn color="red" dark>Finalizar actividad</v-btn>
      </v-app-bar>
      <v-row>
        <v-col cols="12" md="5" lg="3" class="questions-box">
          <v-card dark class="grey darken-4 rounded"  elevation="0">
            <!-- Alarma -->
            <v-card-title>
              <p class="mx-auto py-3"><v-icon class="mr-3">mdi-alarm</v-icon> Enzimer</p>
            </v-card-title>
            <!-- Simulacro -->
            <v-card-text class="px-5">
              <div class="white pa-3 text-center rounded">
                <p class="teal--text title b-inline mb-1">Simulacro - Admisión</p>
                <span class="caption grey--text">Tiempo transcurrido</span>
                <h3 class="black--text mt-2">03h : 39m : 17s</h3>
              </div>
            </v-card-text>
            <!-- Cajas -->
            <v-card-text>
              <v-row v-for="(item,index) in 1" :key="index" class="my-1">
                <v-col class="px-10"
                  cols="12"
                >
                  <v-row class="pl-1">
                    <v-col 
                      v-for="(item,index) in 20" :key="index"
                      cols="3"
                    >
                      <p style="width:50px;height:50px" :class="item < 10 ? 'green' : 'red' " class="my-0 text-center py-4 rounded">{{item+1}}</p>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="7" lg="9">
          <v-card class="rounded pa-10" elevation="0">
            <v-card-title primary-title>
              <span class="teal--text mr-3">Curso: </span> Historia de perú
            </v-card-title>
            <!-- Preguntas y respuestas -->
            <v-card-title primary-title>
              ¿Fusce dapibus ex sit amet libero scelerisque, eget aliquet lorem ultricies.?
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="10" lg="9" class="mx-auto">
                  <v-card elevation="2">
                    <v-card-text>
                      <div class="display-1 text-center teal--text my-5">Card 10</div>
                      <div class="text-center pa-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quidem quibusdam perspiciatis earum consequuntur soluta enim dolores vel aperiam accusantium!</div>
                      <v-img
                        max-width="500"
                        max-height="500"
                        class="mx-auto"
                        lazy-src="https://via.placeholder.com/500"
                        src="https://via.placeholder.com/500"
                      ></v-img>
                      <div class="mx-auto text-center my-5 ">
                        <v-btn elevation="0" large dark class="px-10 mx-5" color="blue">Accion</v-btn>
                        <v-btn elevation="0" large dark class="px-10 mx-5" color="orange">Accion</v-btn>
                        <v-btn elevation="0" large dark class="px-10 mx-5" color="red">Accion</v-btn>
                      </div>
                      <div class="text-center py-5 px-16"><span class="teal--text">Respuesta: </span> dolor, sit amet consectetur adipisicing elit. Aliquam quidem quibusdam perspiciatis earum consequuntur soluta enim dolores vel aperiam accusantium!</div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  export default {
    name: 'ShowFlashcardPage',
    data: () => ({
    }),
    methods:{
    }
  }
</script>
