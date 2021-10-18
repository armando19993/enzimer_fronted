<template>
  <v-container fluid>
    <v-app-bar color="grey lighten-3" class="mb-4 mt-0" elevation="0">  
      <h2 class="text-blue-app">
        <v-icon color="text-blue-app" large>mdi-arrow-right</v-icon>
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
              <v-card-title primary-title class="font-weight-black text-blue-app">
                Cards de la semana 
                <v-btn class="ml-auto bg-blue-dark-app" dark>Generar Card <v-icon class="mt-n1 ml-1">mdi-plus</v-icon></v-btn>
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="4">
                    <div class="pa-4 rounded box-red">
                      <div class="red--text">
                        <v-icon color="red">mdi-bank</v-icon>
                        Lorem, ipsum.
                      </div>
                      <div class="caption text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, aspernatur!</div>
                      <div class="text-right font-weight-bold">-- En dos días</div>
                    </div>
                  </v-col>
                  <v-col cols="4">
                    <div class="pa-4 rounded box-blue">
                      <div class="blue--text">
                        <v-icon color="blue">mdi-bank</v-icon>
                        Lorem, ipsum.
                      </div>
                      <div class="caption text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, aspernatur!</div>
                      <div class="text-right font-weight-bold">-- En dos días</div>
                    </div>
                  </v-col>
                  <v-col cols="4">
                    <div class="pa-4 rounded box-orange">
                      <div class="orange--text">
                        <v-icon color="orange">mdi-bank</v-icon>
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
              <v-card-title primary-title class="font-weight-black text-blue-app">
                Jueves 18 <v-icon>mdi-chevron-left</v-icon><v-icon>mdi-chevron-right</v-icon> <span class="teal--text">Enero </span>
              </v-card-title>
              <v-card-text class="pa-3 text-center">
                  <v-row>
                    <v-col  v-for="item in 6" cols="2" :key="item">
                      <div class="grey lighten-4 rounded-xl box-date">
                        <div>DIA</div>
                        <div>{{item}}</div>
                      </div>
                    </v-col>
                  </v-row>
              </v-card-text>
              <v-card-title primary-title class="title">
                Actividades del dia
              </v-card-title>
              <v-card-text class="pa-3 box-blue-dark rounded my-5" v-for="item in 4" :key="item">
                  <v-icon class="mt-n5" color="box-blue-dark">mdi-pencil</v-icon>
                  <div  class="d-inline-block mx-3">
                    <div class="text-grey-dark font-weight-bold">Lorem, ipsum dolor.</div>
                    <div class="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
                  </div>
                  <div  class="d-inline-block ml-16">
                    10:00 AM - 10:30 AM <v-icon class="mt-n5 ml-5" color="box-blue-dark">mdi-arrow-right</v-icon>
                  </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="pa-5">
          <v-card-title class="font-weight-black text-blue-app">
            Simulacros recientes
            <v-btn dark class="ml-auto bg-blue-dark-app">Generar Simulacro <v-icon class="mt-n1 ml-1">mdi-plus</v-icon></v-btn>
          </v-card-title>
          <v-card-text class="box-grey px-8 py-3 rounded my-5" v-for="item in 4" :key="item">
              <v-row>
                <v-col cols="6">
                  <div class="text-blue-app font-weight-bold">Lorem, ipsum dolor.</div>
                  <div class="text-justify">12 / 01 / 21 - 03 Horas</div>
                </v-col>
                <v-col cols="6" class=" text-right">
                  <div class="d-inline-block">
                    <div>Puntaje</div>
                    <div class="text-blue-app font-weight-bold title">1000.</div>
                  </div>
                  <v-btn icon class="d-inline-block mt-n7 ml-5 text-blue-app">
                    <v-icon>mdi-eye</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
          </v-card-text>
          <v-card-actions >
            <p class="ml-auto text-blue-app">
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
