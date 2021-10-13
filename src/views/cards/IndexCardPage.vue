<template>
    <v-container fluid>
      <v-app-bar color="grey lighten-3" class="mb-4 mt-0" elevation="0">  
        <h2 class="text--grey">
          <v-icon color="teal" large>mdi-arrow-right</v-icon>
          Cards
        </h2>
      </v-app-bar>
      <v-row>
        <v-col cols="12" md="6" lg="4">
          <v-card class="questions-box grey lighten-2 rounded-lg"  elevation="0">
            <v-card-title primary-title>
              Cursos
            </v-card-title>
            <v-card-text>
              <v-list-item v-for="item in 10" :key="item">
                <v-list-item-content class="px-2" :class="item == 3 ? 'teal rounded-lg white--text' : '' ">
                  <v-list-item-title ><v-icon>mdi-note-text</v-icon> Curso {{item}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="8">
          <v-card class="questions-box white rounded-lg" elevation="0">
            <v-card-title primary-title>
              Temas
            </v-card-title>
            <v-card-text>
              <v-simple-table dense>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th width="50px">
                        <v-checkbox 
                          color="teal"
                          :value="themes.length == themes_selected.length" 
                          @click="selectAll()">
                        </v-checkbox>
                      </th>
                      <th class="text-center">
                        Nombre del tema
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item,index) in themes"
                      :key="index"
                    >
                      <td>
                        <v-checkbox 
                          color="teal"
                          :value="item"
                          v-model="themes_selected"
                        ></v-checkbox>
                      </td>
                      <td>{{ item }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
          <v-btn class="float-right my-4" dark color="teal">Seleccionar</v-btn>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  export default {
    name: 'IndexCardPage',
    data: () => ({
      /* cursos y temas */
      themes: [
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit - 01.',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit - 02.',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit - 03.',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit - 04.',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit - 05.',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit - 06.',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit - 07.',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit - 08.',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit - 09.',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit - 10.',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit - 11.',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit - 12.',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit - 13.',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit - 14.',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit - 15.',
      ],
      /* datos tabla */
      themes_selected : []
    }),
    methods:{
      selectAll(){
        if(this.themes.length == this.themes_selected.length)
        {
          this.themes_selected = []
        }else{
          this.themes_selected = this.themes
        }
      }
    }
  }
</script>
