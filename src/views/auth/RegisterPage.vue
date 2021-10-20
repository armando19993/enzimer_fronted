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
                                        :rules="validations.text"
                                        v-model="user.last_name"
                                    ></v-text-field>
                                    <v-text-field
                                        class="my-4"
                                        outlined
                                        color="teal"
                                        :rules="validations.email"
                                        label="Correo"
                                        required
                                        v-model="user.email"
                                    ></v-text-field>
                                    <v-text-field
                                        class="my-4"
                                        outlined
                                        color="teal"
                                        label="Celular"
                                        required
                                        :rules="validations.text"
                                        v-model="user.phone"
                                    ></v-text-field>
                                    <v-text-field
                                        class="my-4"
                                        outlined
                                        color="teal"
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
                                        :rules="[passwordConfirmationRule]"
                                        label="Confirmar contraseña"
                                        required
                                        type="password"
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
                                        <v-radio-group v-model="user.id_carera" class="mx-2 mt-2">
                                            <div 
                                                v-for="(item,index) in 4"
                                                :key="index"
                                            >
                                                <p class="h6 teal--text font-weight-bold"><v-icon large color="teal">mdi-bank</v-icon> Carrera {{index}}</p>
                                                <hr class="gray">
                                                <v-radio
                                                    color="teal"
                                                    class="my-4" 
                                                    v-for="(item,index) in 4"
                                                    :key="index"
                                                    :label="'carrera ' + index"
                                                    :value="item.name"
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
                                        :disabled="!user.id_carera"
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
  export default {
    name:'RegisterPage',
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
            name:"",
            last_name:"",
            email:"",
            phone:"",
            password:"",
            password_confirmation:"",
            subscribe:"",
            id_universidad:null,
            id_carera:null
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
                return university.name.toLowerCase().includes(this.university_filter.toLowerCase());
            });
        },
        passwordConfirmationRule() {
            return () => (this.user.password === this.user.password_confirmation) || 'Contraseñas no coinciden'
        }
    },
    mounted()
    {
        if (this.loggedIn) {
            this.$router.push('/');
        }
        var scriptTag = document.createElement("script")
        scriptTag.src = "https://checkout.culqi.com/js/v3"
        document.getElementsByTagName('head')[0].appendChild(scriptTag)

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
            if(this.user.universities){
                this.step = 3
            } 
        },
        checkStep3()
        {
            if(this.user.career){
                this.step = 4
            } 
        },
        selectPlan(item)
        {
            console.log(item)
            this.culqiAPI()
        },
        registerRequest()
        {
            this.$store.dispatch('auth/register', this.user).then(
            data => {
              console.log(data)
            },
            error => {
              console.log(error)
            }
          )
        },
        culqiAPI()
        {
            // Configura tu llave pública
            window.Culqi.publicKey = "sk_test_d8d617d26c11f288"
            // Configura tu Culqi Checkout
            window.Culqi.settings({
                title: 'Culqi Pago Plan',
                currency: 'PEN',
                description: 'Pruebas Angel',
                amount: 5000
            });
            window.Culqi.open()
        }
    }
  }
</script>

<style scoped>
#row-main{
    min-height: 100vh;
}
</style>
