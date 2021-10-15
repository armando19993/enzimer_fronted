<template>
  <v-container fluid>
    <v-app-bar color="grey lighten-3" class="mb-4 mt-0" elevation="0">  
      <h2 class="text--grey">
        <v-icon color="teal" large>mdi-arrow-right</v-icon>
        Dashboard
      </h2>
      <v-spacer></v-spacer>
      <div>Hola, Angel</div>
      <v-btn 
          color="teal"
          icon
          outlined
          class="ml-3"
        >
          <v-icon>mdi-account</v-icon>
        </v-btn>
    </v-app-bar>
    <v-row>
      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title primary-title>
                Cards de la semana 
                <v-btn color="teal" class="ml-auto" dark>Generar Card</v-btn>
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="4">
                    <div class="red lighten-4 pa-4 rounded-lg">
                      <div class="red--text">
                        <v-icon>mdi-bank</v-icon>
                        Lorem, ipsum.
                      </div>
                      <div class="caption text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, aspernatur!</div>
                      <div class="text-right font-weight-bold">-- En dos días</div>
                    </div>
                  </v-col>
                  <v-col cols="4">
                    <div class="red lighten-4 pa-4 rounded-lg">
                      <div class="red--text">
                        <v-icon>mdi-bank</v-icon>
                        Lorem, ipsum.
                      </div>
                      <div class="caption text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, aspernatur!</div>
                      <div class="text-right font-weight-bold">-- En dos días</div>
                    </div>
                  </v-col>
                  <v-col cols="4">
                    <div class="red lighten-4 pa-4 rounded-lg">
                      <div class="red--text">
                        <v-icon>mdi-bank</v-icon>
                        Lorem, ipsum.
                      </div>
                      <div class="caption text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, aspernatur!</div>
                      <div class="text-right font-weight-bold">-- En dos días</div>
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card class="pa-5">
              <v-card-title primary-title>
                Actividades del dia
              </v-card-title>
              <v-card-text class="pa-3 teal lighten-4 rounded-lg my-5" v-for="item in 4" :key="item">
                  <v-icon class="mt-n5" color="teal">mdi-pencil</v-icon>
                  <div  class="d-inline-block mx-3">
                    <div class="teal--text font-weight-bold">Lorem, ipsum dolor.</div>
                    <div class="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
                  </div>
                  <div  class="d-inline-block ml-16">
                    10:00 AM - 10:30 AM <v-icon class="mt-n5 ml-5" color="teal">mdi-arrow-right</v-icon>
                  </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="pa-5">
          <v-card-title class="teal--text">
            Simulacros recientes
            <v-btn color="teal" dark class="ml-auto">Generar Simulacro</v-btn>
          </v-card-title>
          <v-card-text outline class="px-8 py-3 elevation-4 rounded-lg my-5" v-for="item in 4" :key="item">
              <v-row>
                <v-col cols="6">
                  <div class="teal--text font-weight-bold">Lorem, ipsum dolor.</div>
                  <div class="text-justify">12 / 01 / 21 - 03 Horas</div>
                </v-col>
                <v-col cols="6" class=" text-right">
                  <div class="d-inline-block">
                    <div>Puntaje</div>
                    <div class="teal--text font-weight-bold title">1000.</div>
                  </div>
                  <v-btn color="teal" icon class="d-inline-block mt-n7 ml-5">
                    <v-icon>mdi-eye</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
          </v-card-text>
          <v-card-actions >
            <p class="ml-auto teal--text">
              Ver todos mis simulacros
            </p>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    export default {
        name: 'DashboardPage',
        data: () => ({
          
        }),
    }
</script>
