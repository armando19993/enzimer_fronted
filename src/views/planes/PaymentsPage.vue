<template>
    <v-container fluid>
        <v-app-bar color="grey lighten-3" class="mb-4 mt-0 mb-15" elevation="0">  
            <h2 class="text--grey">
                <v-icon color="teal" large>mdi-arrow-right</v-icon>
                Realizar Pago
            </h2>
        </v-app-bar>
        <v-row id="row-main"
                align="center"
                justify="center"
            >
                <!-- Datos Pagos -->
                <v-col
                    cols="12"
                    md="10"
                    lg="8"
                >
                    <v-card class="rounded mt-15" elevation="0">
                        <v-row>
                            <v-col 
                                cols="12"
                                md="6"
                            >
                                <v-card-title primary-title>
                                    Detalles del plan
                                </v-card-title>
                                <v-card-text>
                                    <div class="pa-5 headline grey lighten-2">Plan: Lorem, ipsum dolor.</div>
                                    <v-form>
                                        <!-- inputs -->
                                        <v-text-field
                                            class="mt-10"
                                            outlined
                                            color="teal"
                                            label="¿Tienes un cupon? Ingresa el codigo"
                                            required
                                        ></v-text-field> 
                                    </v-form>
                                    <div class="pa-3 title">Monto: 100</div>
                                    <v-divider></v-divider>
                                    <div class="pa-3 title">Descuento: 10%</div>
                                    <v-divider></v-divider>
                                    <div class="pa-3 title">Total: 90</div>
                                </v-card-text>
                            </v-col>
                            <v-col 
                                cols="12"
                                md="6"
                            >
                                <v-card-title primary-title>
                                    Detalles de Tarjeta
                                </v-card-title>
                                <v-card-text>
                                    <v-form>
                                                <!-- inputs -->
                                                <v-text-field
                                                    class="my-4"
                                                    outlined
                                                    color="teal"
                                                    label="Numero de Trajeta"
                                                    required
                                                ></v-text-field>
                                                <v-text-field
                                                    class="my-4"
                                                    outlined
                                                    color="teal"
                                                    label="11/21"
                                                    required
                                                ></v-text-field>
                                                <v-text-field
                                                    class="my-4"
                                                    outlined
                                                    color="teal"
                                                    label="CVV"
                                                    required
                                                ></v-text-field>
                                                <v-btn
                                                    block
                                                    color="teal"
                                                    :loading="loading"
                                                    large
                                                >
                                                    <span class="text-capitalize white--text">Pagar</span>
                                                </v-btn>
                                    </v-form>
                                </v-card-text>
                            </v-col>
                        </v-row>
                    </v-card>
                        
                </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import axios from 'axios'
    export default {
        name:'PlanesPayments',
        data: () => ({
            loading:false,
            data:{"amount":50,"currency":"PEN","customer":{"email":"jose@gmail.com"}}
        }),
        mounted()
        {
            this.apiRequest()
        },
        methods:{
            searchPlanes()
            {
                this.loading = true
                axios
                this.step = 2
                this.loading = false
            },
            /* apiRequest()
            {
                this.loading = true
                try {
                    axios.post('https://api.micuentaweb.pe/api-payment/V4/Charge/CreatePayment',this.data)
                    .then( response => {
                        console.log(response)
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    
                } catch (error) {
                    alert(error)
                    console.log(error)
                }
                this.loading = false
            } */
        }
    }
</script>