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
                        <v-form v-model="valid">
                            <v-card-text>
                                <!-- Datos Usuarios -->
                                <div v-show="step == 1">
                                    <p class="text-center teal--text font-weight-bold text-h5 pt-5">Nuevo usuario</p>
                                    <p class="text-center gray--text caption mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <v-text-field
                                        class="my-4"
                                        label="Nombres"
                                        required
                                        v-model="user.firstname"
                                    ></v-text-field>
                                    <v-text-field
                                        class="my-4"
                                        label="Apellidos"
                                        required
                                        v-model="user.lastname"
                                    ></v-text-field>
                                    <v-text-field
                                        class="my-4"
                                        :rules="emailRules"
                                        label="Correo"
                                        required
                                        v-model="user.email"
                                    ></v-text-field>
                                    <v-text-field
                                        class="my-4"
                                        label="Celular"
                                        required
                                        v-model="user.phone"
                                    ></v-text-field>
                                    <v-text-field
                                        class="my-4"
                                        :rules="passwordRules"
                                        label="Contraseña"
                                        required
                                        v-model="user.password"
                                    ></v-text-field>
                                    <v-text-field
                                        class="my-4"
                                        :rules="passwordRules"
                                        label="Confirmar contraseña"
                                        required
                                        v-model="user.password_confirmation"
                                    ></v-text-field>
                                    <v-checkbox
                                        class="gray--text mt-n2 float-left"
                                        color="teal"
                                        v-model="user.subscribe"
                                    ></v-checkbox>
                                    <p class="gray--text caption mb-4 float-left">Quieres recibir ofertas y notificaciones de parte de <span class="teal--text caption mb-4 font-weight-medium">ENZIMER</span></p>
                                    <!-- link auxiliares y boton-->
                                    <v-btn
                                        block
                                        color="teal"
                                        large
                                        class="my-2"
                                        :disabled="!valid"
                                        @click="checkStep1"
                                    >
                                            <span class="text-capitalize white--text" >Continuar</span>
                                    </v-btn>
                                </div>
                                <!-- Datos Universidad -->
                                <div v-show="step == 2">
                                    <p class="text-center teal--text font-weight-bold text-h5 pt-5">Seleccionar universidad</p>
                                    <p class="text-center gray--text caption mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <v-text-field
                                        v-model="university_filter"
                                        label="Buscar Universidad"
                                        color="teal"
                                    ></v-text-field>
                                    <v-radio-group v-model="user.university" class="universiti-div mt-2">
                                        <v-radio
                                            color="teal"
                                            class="my-4" 
                                            v-for="(item,index) in universitiesSearch"
                                            :key="index"
                                            :label="item.name"
                                            :value="item.name"
                                        ></v-radio>
                                    </v-radio-group>
                                    <!-- link auxiliares y boton-->
                                    <v-btn
                                        block
                                        color="teal"
                                        large
                                        class="my-2"
                                        :disabled="!user.university"
                                        @click="checkStep2"
                                    >
                                            <span class="text-capitalize white--text" >Continuar</span>
                                    </v-btn>
                                </div>
                            </v-card-text>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
  </div>
</template>

<script>
  export default {
    name:'Register',
    data: () => ({
        /* Formulario */
        valid: false,
        step:1,
        /* Universidades */
        universities:[
            {name : 'universidad1'},
            {name : 'universidad2'},
            {name : 'universidad3'},
            {name : 'universidad4'},
            {name : 'universidad5'},
            {name : 'universidad6'},
            {name : 'universidad7'},
            {name : 'universidad8'}
        ],
        university_filter:"",
        /* Datos usuario */
        user:{
            firstname:"",
            lastname:"",
            email:"",
            phone:"",
            password:"",
            password_confirmation:"",
            subscribe:"",
            university:null
        },
        /* Reglas Campos */
        passwordRules: [
            v => !!v || 'Contraseña requerida',
            v => v.length >= 8 || 'Contraseña debe tener míminimo de 8 caracteres',
        ],
        emailRules: [
            v => !!v || 'El Correo es requerido',
            v => /.+@.+/.test(v) || 'No es una direccion de correo valido',
        ],
    }),
    computed: {
        universitiesSearch() {
            return this.universities.filter((university) => {
                return university.name.toLowerCase().includes(this.university_filter.toLowerCase());
            });
        }
    },
    methods:{
        checkStep1()
        {
            if(this.valid){
                this.step = 2
            } 
        },
        checkStep2()
        {
            if(this.valid){
                this.step = 3
            } 
        }
    }
  }
</script>

<style scoped>
#row-main{
    min-height: 100vh;
}
</style>
