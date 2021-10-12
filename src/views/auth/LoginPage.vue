<template>
  <div class="background-responsive" :style="{'background-image':'url(auth.jpg)'}">
        <v-container>
            <v-row id="row-main"
                align="center"
                justify="center"
            >
                <v-col
                    cols="12"
                    md="7"
                    lg="6"
                >
                    <v-card class="px-15 py-5 rounded-lg">
                        <v-card-text>
                            <p class="text-center teal--text font-weight-bold text-h5 pt-16">Iniciar Sesion</p>
                            <p class="text-center gray--text caption mb-4">La herramienta perfecta para mejorar tus estudios pre-universitarios</p>
                            <v-form v-model="valid">
                                <!-- inputs -->
                                <v-text-field
                                    class="my-4"
                                    name="login.username"
                                    :rules="emailRules"
                                    label="Correo electronico"
                                    required
                                ></v-text-field>
                                <v-text-field
                                    class="my-4"
                                    name="login.password"
                                    :rules="passwordRules"
                                    label="Contraseña"
                                    required
                                ></v-text-field>
                                <v-checkbox
                                    class="gray--text mt-n2 float-left"
                                    color="teal"
                                    v-model="login.remember"
                                ></v-checkbox>
                                <span class="gray--text caption mb-4 float-left">Recordar cuenta</span>
                                <!-- link auxiliares y boton-->
                                <span class="teal--text caption mb-4 font-weight-medium float-right">Olvide mi contraseña</span>
                                <v-btn
                                    block
                                    color="teal"
                                    large
                                >
                                    <span class="text-capitalize white--text">Iniciar Sesión</span>
                                </v-btn>
                                <!-- opcionales -->
                                <p class="text-center my-4 gray--text">
                                    <span class="">_______</span>
                                    <span class="mx-6  font-weight-bold">o</span>
                                    <span class="">_______</span>
                                </p>
                                <v-btn
                                    block
                                    color="blue darken-4"
                                    large
                                    class="my-3"
                                >
                                    <span class="text-capitalize white--text">Facebook</span>
                                </v-btn>
                                <v-btn
                                    block
                                    color="red darken-3"
                                    large
                                    class="my-3"
                                >
                                    <span class="text-capitalize white--text">Google</span>
                                </v-btn>
                                <!-- crear -->
                                <p class="text-center gray--text caption my-3">¿No tienes una cuenta?</p>
                                <router-link class="text-center d-block teal--text caption font-weight-medium mb-0"
                                    to="/register"
                                >
                                    Crear Aquí
                                </router-link>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
  </div>
</template>

<script>
  export default {
    name:'LoginPage',
    data: () => ({
        /* Formulario */
        valid: false,
        /* Datos Login */
        login:{
            email:null,
            password:null
        },
        /* Reglas Campos */
        passwordRules: [
            v => !!v || 'Contraseña requerida',
        ],
        emailRules: [
            v => !!v || 'El Correo es requerido',
            v => /.+@.+/.test(v) || 'No es una direccion de correo valido',
        ],
    }),
  }
</script>

<style scoped>
#row-main{
    min-height: 100vh;
}
</style>
