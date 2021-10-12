<template>
    <v-container fluid>
      <v-app-bar color="grey lighten-3" class="mb-4 mt-0" elevation="0">  
        <div>
          <span class="caption teal--text">Razonamiento Verbal</span>
          <h2 class="text--grey">
            Pregunta N° 20
          </h2>
        </div>
      </v-app-bar>
      <v-row>
        <v-col cols="12" md="5" lg="3" class="questions-box">
          <v-card dark class="grey darken-4 rounded-lg"  elevation="0">
            <!-- Alarma -->
            <v-card-title>
              <p class="mx-auto py-3"><v-icon class="mr-3">mdi-alarm</v-icon> Enzimer</p>
            </v-card-title>
            <!-- Simulacro -->
            <v-card-text class="px-5">
              <div class="white pa-3 text-center rounded-lg">
                <p class="teal--text title b-inline mb-1">Simulacro - Admisión</p>
                <span class="caption grey--text">Tiempo transcurrido</span>
                <h3 class="black--text mt-2">03h : 39m : 17s</h3>
              </div>
            </v-card-text>
            <!-- Cajas -->
            <v-card-text>
              <v-row v-for="(item,index) in 4" :key="index" class="my-1" :class="index == 0 ? 'grey darken-3 rounded-lg' : '' ">
                <v-col 
                  class="teal text-uppercase rounded-lg text-center" 
                  cols="2"
                >
                  <p class="my-5 h2"><v-icon>mdi-flask</v-icon></p>
                  <h2 class="my-5 h2">a</h2>
                  <h2 class="my-5 h2">b</h2>
                </v-col>
                <v-col 
                  cols="10"
                >
                  <v-row class="pl-1">
                    <v-col 
                      v-for="(item,index) in 16" :key="index"
                      cols="3"
                    >
                      <p :class="item < 10 ? 'green' : 'red' " class="my-0 text-center rounded-lg py-2 px-0">{{item+1}}</p>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="7" lg="9">
          <v-card class="rounded-lg pa-10" elevation="0">
            <!-- Preguntas y respuestas -->
            <v-card-title primary-title>
              ¿Fusce dapibus ex sit amet libero scelerisque, eget aliquet lorem ultricies.?
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-radio-group>
                <v-radio color="teal" class="my-3" v-for="item in 4" :key="item" :label="item+' Respuesta de la pregunta'" :value="item"></v-radio>
              </v-radio-group>
            </v-card-text>
            <!-- Saber mas -->
            <v-card-text class="mt-10">
              <v-card color="grey lighten-3" elevation="0">
                <v-card-title class="teal" primary-title>
                  <span class="white-text" style="color:white">Puedes conocer más</span>
                </v-card-title>
                <v-card-text class="pa-5">
                  <p v-for="item in 3" :key="item" class="red-text">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, minus?</p>
                </v-card-text>
              </v-card>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  export default {
    name: 'IndexQuestionPage',
    data: () => ({
    }),
    methods:{
    }
  }
</script>
