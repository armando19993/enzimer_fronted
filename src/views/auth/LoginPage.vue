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
                    <v-card class="px-15 py-5 rounded">
                        <v-card-text>
                            <p class="text-center teal--text font-weight-bold text-h5 pt-16">Iniciar Sesion</p>
                            <p class="text-center gray--text caption mb-4">La herramienta perfecta para mejorar tus estudios pre-universitarios</p>
                            <v-form
                                v-model="valid"
                                @submit.prevent="requestLogin"
                            >
                                <!-- inputs -->
                                <v-text-field
                                    class="my-4"
                                    outlined
                                    color="teal"
                                    name="login.email"
                                    :disabled="loading"
                                    :loading="loading"
                                    :rules="validations.email"
                                    v-model="login.email"
                                    label="Correo electronico"
                                    required
                                ></v-text-field>
                                <v-text-field
                                    class="my-4"
                                    outlined
                                    color="teal"
                                    name="login.password"
                                    v-model="login.password"
                                    :rules="validations.password"
                                    label="Contraseña"
                                    required
                                    :disabled="loading"
                                    :loading="loading"
                                    type="password"
                                ></v-text-field>
                                <v-checkbox
                                    class="gray--text mt-n2 float-left"
                                    color="teal"
                                    :loading="loading"
                                    v-model="login.remember"
                                ></v-checkbox>
                                <span class="gray--text caption mb-4 float-left">Recordar cuenta</span>
                                <!-- link auxiliares y boton-->
                                <span class="teal--text caption mb-4 font-weight-medium float-right">Olvide mi contraseña</span>
                                <v-btn
                                    block
                                    color="teal"
                                    :loading="loading"
                                    large
                                    :disabled="!valid"
                                    @click="requestLogin"
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
                                    :loading="loading"
                                    class="my-3"
                                >
                                    <span class="text-capitalize white--text">Facebook</span>
                                </v-btn>
                                <v-btn
                                    block
                                    color="red darken-3"
                                    large
                                    :loading="loading"
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
    import rulesFile from '@/rules/rules'
    export default {
        name:'LoginPage',
        mounted()
        {
            if(this.loggedIn)
            {
                this.$router.push('/')
            }
        },
        /* Data */
        data: () => ({
            /* Formulario */
            valid: false,
            loading:false,
            /* Datos Login */
            login:{
                email:"",
                password:"",
                remember:null,
            },
            /* Reglas Campos */
            validations: {
                email:[rulesFile.email()],
                password:[rulesFile.required()],
            },
        }),
        computed: {
            loggedIn() {
                return this.$store.state.auth.status.loggedIn;
            }
        },
        created() {
            if (this.loggedIn) {
                this.$router.push('/');
            }
        },
        /* Metodos */
        methods: {
            async requestLogin() {
                this.loading = true
                try {
                    this.$store.dispatch('auth/login', this.login).then(
                        () => {
                            this.$store.state.alert = {
                                                        active: true,
                                                        color: "success",
                                                        message: 'Bienvenido: ' + this.$store.state.auth.user.name + ' ' + this.$store.state.auth.user.last_name}
                            this.$router.push('/');
                        },
                        error => {
                            this.$store.state.alert = {
                                                        active: true,
                                                        color: "error",
                                                        message: error }
                        }
                    )
                    
                } catch (error) {
                    alert(error)
                }
                this.loading = false
            },
        }
    }
</script>

<style scoped>
#row-main{
    min-height: 100vh;
}
</style>
