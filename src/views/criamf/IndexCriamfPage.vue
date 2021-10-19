<template>
    <v-container fluid>
        <v-app-bar color="grey lighten-3" class="mb-4 mt-0" elevation="0">  
            <h2 class="text--grey">
            <v-icon color="teal" large>mdi-arrow-right</v-icon>
            Criamf
            </h2>
        </v-app-bar>
        <v-row>
            <v-col cols="12" md="4" lg="3">
                <v-card class="white rounded pa-5">    
                    <div class="my-3 teal--text title">Próximas Fechas</div>
                    <div class="my-3 title">Mañana</div>
                    <v-divider></v-divider>
                    <div class="rounded teal  text-justify px-5 py-2 white--text my-3" v-for="item in 5" :key="item">
                        <div class="my-3 sub-title ">
                            Historia de peru
                        </div>
                        <span class="font-weight-bold">Tema: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ducimus doloribus necessitatibus similique, autem accusamus!
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" md="8" lg="9">
                <v-card elevation="0" class="rounded">
                    <v-card-text class="pa-5">
                        <v-sheet height="64">
                            <v-toolbar
                                flat
                            >
                                <v-toolbar-title v-if="$refs.calendar">
                                    <div class="display-1 text-capitalize grey--text">
                                        {{ $refs.calendar.title }}
                                    </div>
                                </v-toolbar-title>
                            </v-toolbar>
                        </v-sheet>
                        <v-sheet height="600px">
                            <v-calendar
                                ref="calendar"
                                type="month"
                                locale="es"
                            ></v-calendar>
                        </v-sheet>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>    
    </v-container>
</template>

<script>
    export default {
      name: 'IndexCriamfPage',
    }
</script>
