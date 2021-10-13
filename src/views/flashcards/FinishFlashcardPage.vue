<template>
    <v-container fluid>
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
              <v-row v-for="(item,index) in 1" :key="index" class="my-1">
                <v-col class="px-10"
                  cols="12"
                >
                  <v-row class="pl-1">
                    <v-col 
                      v-for="(item,index) in 20" :key="index"
                      cols="3"
                    >
                      <p style="width:50px;height:50px" :class="item < 10 ? 'green' : 'red' " class="my-0 text-center py-4 rounded-lg">{{item+1}}</p>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="8" lg="6" class="mx-auto my-8">
          <v-card elevation="0" class="rounded-lg">
            <v-card-text>
              <div class="display-1 text-center teal--text my-5">Flashcard</div>
              <div class="text-center body-1 my-4 px-16"><span class="teal--text">Curso: </span> dolor, sit amet consectetur adipisicing.</div>
              <div class="text-center body-1 my-4 px-16"><span class="teal--text">Tema: </span> dolor, sit lorem impsu amet consectetur adipisicing.</div>
              <div class="text-center">Lorem, ipsum.</div>
              <div class="text-center display-2 my-10">00h : 45m : 25h</div>
              <div class="display-1 text-center teal--text my-5">Fin de flashcards</div>
              <v-row>
                <v-col cols="4" class="px-16">
                  <div class="rounded-lg pa-5 white--text text-center blue">
                    <span>Fácil</span>
                    <p class="ma-0 display-1 font-weight-black">10</p>
                  </div>
                </v-col>
                <v-col cols="4" class="px-16">
                  <div class="rounded-lg pa-5 white--text text-center orange">
                    <span>Regular</span>
                    <p class="ma-0 display-1 font-weight-black">10</p>
                  </div>
                </v-col>
                <v-col cols="4" class="px-16">
                  <div class="rounded-lg pa-5 white--text text-center red">
                    <span>Difícil</span>
                    <p class="ma-0 display-1 font-weight-black">10</p>
                  </div>
                </v-col>
              </v-row>
              <div class="text-center py-5 px-16"><span class="teal--text">Respuesta: </span> dolor, sit amet consectetur adipisicing elit. Aliquam quidem quibusdam perspiciatis earum consequuntur soluta enim dolores vel aperiam accusantium!</div>
              <div class="mx-auto text-center my-5 ">
                <v-btn elevation="0" large dark class="px-10 mx-5" color="teal" outlined>Ir al home</v-btn>
                <v-btn elevation="0" large dark class="px-10 mx-5" color="teal">Ver Cards</v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  export default {
    name: 'FinishFlashcardPage',
    data: () => ({
    }),
    methods:{
    }
  }
</script>
