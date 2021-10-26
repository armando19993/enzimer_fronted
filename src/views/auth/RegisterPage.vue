<template>
  <div class="background-responsive" :style="{'background-image':'url(auth.jpg)'}">
    <v-form v-model="valid">
        <v-container>
            <v-row id="row-main"
                align="center"
                justify="center"
            >
                    <!-- Datos Usuarios -->
                    <v-col
                        v-show="step == 1"
                        cols="12"
                        md="7"
                        lg="6"
                    >
                        <v-card class="px-15 py-5 rounded">
                            <v-card-text>
                                <div >
                                    <p class="text-center teal--text font-weight-bold text-h5 pt-5">Nuevo usuario</p>
                                    <p class="text-center gray--text caption mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <v-text-field
                                        class="my-4"
                                        outlined
                                        :loading="loading"
                                        :disabled="loading"
                                        color="teal"
                                        label="Nombres"
                                        required:ripple="false"
                                        :rules="validations.text"
                                        v-model="user.name"
                                    ></v-text-field>
                                    <v-text-field
                                        class="my-4"
                                        outlined
                                        color="teal"
                                        label="Apellidos"
                                        required
                                        :loading="loading"
                                        :disabled="loading"
                                        :rules="validations.text"
                                        v-model="user.last_name"
                                    ></v-text-field>
                                    <v-text-field
                                        class="my-4"
                                        outlined
                                        color="teal"
                                        :loading="loading"
                                        :disabled="loading"
                                        :rules="validations.email"
                                        label="Correo"
                                        required
                                        v-model="user.email"
                                    ></v-text-field>
                                    <v-text-field
                                        class="my-4"
                                        outlined
                                        color="teal"
                                        :loading="loading"
                                        :disabled="loading"
                                        label="Celular"
                                        required
                                        :rules="validations.text"
                                        v-model="user.phone"
                                    ></v-text-field>
                                    <v-text-field
                                        class="my-4"
                                        outlined
                                        color="teal"
                                        :loading="loading"
                                        :disabled="loading"
                                        :rules="validations.password"
                                        label="Contraseña"
                                        type="password"
                                        required
                                        v-model="user.password"
                                    ></v-text-field>
                                    <v-text-field
                                        class="my-4"
                                        outlined
                                        color="teal"
                                        :loading="loading"
                                        :disabled="loading"
                                        :rules="[passwordConfirmationRule]"
                                        label="Confirmar contraseña"
                                        required
                                        type="password"
                                        v-model="user.password_confirmation"
                                    ></v-text-field>
                                    <v-checkbox
                                        class="gray--text mt-n2 float-left"
                                        color="teal"
                                        :loading="loading"
                                        :disabled="loading"
                                        v-model="user.subscribe"
                                    ></v-checkbox>
                                    <p class="gray--text caption mb-4 float-left">Quieres recibir ofertas y notificaciones de parte de <span class="teal--text caption mb-4 font-weight-medium">ENZIMER</span></p>
                                    <!-- link auxiliares y boton-->
                                    <v-btn
                                        block
                                        color="teal"
                                        large
                                        :loading="loading"
                                        class="my-2"
                                        :disabled="!valid"
                                        @click="checkStep1"
                                    >
                                        <span class="text-capitalize white--text" >Continuar</span>
                                    </v-btn>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <!-- Datos Universidad -->
                    <v-col
                        cols="12"
                        md="7"
                        lg="6"
                        v-show="step == 2"
                    >
                        <v-card class="px-15 py-5 rounded">
                            <v-card-text>
                                <div>
                                    <p class="text-center teal--text font-weight-bold text-h5 pt-5">Seleccionar universidad</p>
                                    <p class="text-center gray--text caption mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <v-text-field
                                        v-model="university_filter"
                                        label="Buscar Universidad"
                                        outlined
                                        color="teal"
                                    ></v-text-field>
                                    <v-radio-group v-model="user.id_universidad" class="universiti-div ma-2 mx-2 pa-2">
                                        <v-radio
                                            color="teal"
                                            class="my-4" 
                                            v-for="(item,index) in universitiesSearch"
                                            :key="index"
                                            :label="item.universidad"
                                            :value="item.id"
                                            :loading="loading"
                                        :disabled="loading"
                                        ></v-radio>
                                    </v-radio-group>
                                    <!-- link auxiliares y boton-->
                                    <v-btn
                                        block
                                        color="teal"
                                        large
                                        class="my-2"
                                        :loading="loading"
                                        :disabled="!user.id_universidad"
                                        @click="checkStep2"
                                    >
                                            <span class="text-capitalize white--text" >Continuar</span>
                                    </v-btn>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <!-- Datos Carrera -->
                    <v-col
                        cols="12"
                        md="7"
                        lg="6"
                        v-show="step == 3"
                    >
                        <v-card class="px-15 py-5 rounded">
                            <v-card-text>
                                <div>
                                    <p class="text-center teal--text font-weight-bold text-h5 pt-5">Seleccionar Carrera</p>
                                    <p class="text-center gray--text caption mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <div class="universiti-div">
                                        <v-radio-group v-model="user.id_carrera" class="mx-2 mt-2">
                                            <div 
                                                v-for="(area,index) in areas"
                                                :key="index"
                                            >
                                                <p class="h6 teal--text font-weight-bold"><v-icon large color="teal">mdi-bank</v-icon> {{area.area}}</p>
                                                <hr class="gray">
                                                <v-radio
                                                    color="teal"
                                                    class="my-4" 
                                                    :loading="loading"
                                                    :disabled="loading"
                                                    v-for="(carrera,index) in area.carreras"
                                                    :key="index"
                                                    :label="carrera.carrera"
                                                    :value="carrera.id"
                                                ></v-radio>
                                            </div>
                                        </v-radio-group>
                                    </div>
                                    <!-- link auxiliares y boton-->
                                    <v-btn
                                        block
                                        color="teal"
                                        large
                                        class="my-2"
                                        :loading="loading"
                                        :disabled="!user.id_carrera"
                                        @click="checkStep3"
                                    >
                                            <span class="text-capitalize white--text" >Continuar</span>
                                    </v-btn>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <!-- Datos Pagos -->
                    <v-col
                        cols="12"
                        v-show="step == 4"
                    >
                        <v-row>
                            <v-col
                                cols="12"
                                md="6"
                                lg="3"
                                v-for="item in 4" 
                                :key="item"
                            >
                                <v-card class="rounded">
                                    <v-card-title class="teal py-10">
                                        <span class="text-h5 mx-auto white--text font-weight-bold">Plan 1 GB</span>
                                    </v-card-title>
                                    <v-card-title class="py-10">
                                        <span class="text-h5 mx-auto teal--text font-weight-bold">$ 1 <small class="caption">Usd / Año</small></span>
                                    </v-card-title>
                                    <v-card-text class="white">
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title class="my-3" v-for="item in 5" :key="item">
                                                    <v-icon color="teal">mdi-wifi</v-icon> 
                                                    Lorem ipsum
                                                    <span class="teal--text">{{item}}GB</span>
                                                </v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn 
                                            block 
                                            color="teal" 
                                            class="py-6 text-capitalize" 
                                            dark
                                            @click="selectPlan(item)"
                                        >
                                            Adquirir este plan</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
            </v-row>
        </v-container>
    </v-form>
  </div>
</template>

<script>
import rulesFile from '../../rules/rules'
import UniversityService from '@/services/universities.service'

  export default {
    name:'RegisterPage',
    mounted()
        {
            if(this.loggedIn)
            {
                this.$router.push('/')
            }
        },
    data: () => ({
        /* Formulario */
        valid: false,
        step:1,
        loading:false,
        /* Universidades */
        universities:[],
        university_filter:"",
        /* Carreras */
        areas:[],
        /* Datos usuario */
        user:{
            name:"juan",
            last_name:"perez",
            email:"juan@gmail.com",
            phone:"12731827381",
            password:"26153290",
            password_confirmation:"26153290",
            subscribe:"",
            id_universidad:null,
            id_carrera:null
        },
        password_check:true,
        /* Reglas Campos */
        validations: {
            email:[rulesFile.email(),rulesFile.required()],
            text:[rulesFile.required()],
            password:[rulesFile.required(),rulesFile.minText(8)],
        },
    }),
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        },
        universitiesSearch() {
            return this.universities.filter((university) => {
                return university.universidad.toLowerCase().includes(this.university_filter.toLowerCase())
            })
        },
        passwordConfirmationRule() {
            return () => (this.user.password === this.user.password_confirmation) || 'Contraseñas no coinciden'
        }
    },
    methods:{
        checkStep1()
        {
            if(this.valid){
                this.loading = true
                UniversityService.getAll().then(
                    response => {
                        this.universities = response.data.data
                    },
                    error => {
                        this.$store.state.alert = {
                                                        active: true,
                                                        color: "error",
                                                        message: error }
                    }
                )
                this.step = 2
                this.loading = false
            } 
        },
        checkStep2()
        {
            if(this.user.id_universidad){
                if(this.valid){
                    this.loading = true
                    UniversityService.universityAreas(this.user.id_universidad).then(
                        response => {
                            this.areas = response.data.data
                        },
                        error => {
                            this.$store.state.alert = {
                                                            active: true,
                                                            color: "error",
                                                            message: error }
                        }
                    )
                    this.step = 2
                    this.loading = false
                } 
                this.step = 3
            } 
        },
        checkStep3()
        {
            if(this.user.id_carrera){
                this.registerRequest()
            } 
        },
        registerRequest()
        {
            this.loading = true
            try {
                this.$store.dispatch('auth/register', this.user).then(
                    () => {
                        this.$store.state.alert = {
                                                    active: true,
                                                    color: "success",
                                                    message: 'Registro realizado con exito: ' + this.$store.state.auth.user.name + ' ' + this.$store.state.auth.user.last_name}
                        this.$router.push('/planes');
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
        }
    }
  }
</script>

<style scoped>
#row-main{
    min-height: 100vh;
}
</style>
