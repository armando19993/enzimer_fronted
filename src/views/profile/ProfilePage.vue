<template>
  <v-container fluid>
    <v-app-bar color="grey lighten-3" class="mb-4 mt-0" elevation="0">  
      <h2 class="text--grey">
        <v-icon color="teal" large>mdi-arrow-right</v-icon>
        Perfil
      </h2>
    </v-app-bar>
    <v-row>
      <v-col cols="12" md="6" lg="7">
        <v-card class="rounde-lg pa-5 " elevation="0">
          <v-form>
            <v-card-title primary-title>
              Información de usuario
            </v-card-title>
            <v-card-text class="py-0">
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Nombres"
                    outlined
                    color="teal"
                    v-model="user.firstname"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Apellidos"
                    outlined
                    color="teal"
                    v-model="user.lastname"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-title primary-title>
              Información de contacto
            </v-card-title>
            <v-card-text class="py-0">
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Correo"
                    outlined
                    color="teal"
                    v-model="user.email"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Celular"
                    outlined
                    color="teal"
                    v-model="user.phone"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-title class="teal--text">
              ¿Nueva contraseña?
            </v-card-title>
            <v-card-text class="py-0">
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Nueva contraseña"
                    outlined
                    color="teal"
                    v-model="user.password"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Reingresar contraseña"
                    outlined
                    color="teal"
                    v-model="user.password_confirmation"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
          </v-form>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="5">
        <v-card elevation="0" class="rounded-lg pa-5">
          <v-card-title primary-title>
            Información de carrera
          </v-card-title>
          <v-card-text class="py-0">
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Universidad"
                  outlined
                  color="teal"
                  v-model="user.university"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Carrera"
                  outlined
                  color="teal"
                  v-model="user.career"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-title primary-title>
            Cursos
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Cursos"
                  outlined
                  color="teal"
                  v-model="user.career"
                ></v-text-field>
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
        name: 'ProfilePage',
        data: () => ({
          user:{
            firstname:"",
            lastname:"",
            email:"",
            phone:"",
            password:"",
            password_confirmation:"",
            university:null,
            career:null
          }
        }),
    }
</script>
