<template>
    <v-container fluid>
        <v-app-bar color="grey lighten-3" class="mb-4 mt-0 mb-15" elevation="0">  
            <h2 class="text--grey">
                <v-icon color="teal" large>mdi-arrow-right</v-icon>
                Lista de planes disponibles
            </h2>
        </v-app-bar>
        <v-row id="row-main"
                align="center"
                justify="center"
            >
                <!-- Datos Pagos -->
                <v-col
                        cols="12"
                    >
                        <v-row>
                            <v-col
                                cols="12"
                                md="6"
                                lg="3"
                                v-for="(item,index) in planes" 
                                :key="index"
                            >
                                <v-card class="rounded">
                                    <v-card-title class="teal py-10">
                                        <span class="text-h5 mx-auto white--text font-weight-bold">Plan {{item.plan}}</span>
                                    </v-card-title>
                                    <v-card-title class="py-10">
                                        <span class="display-2 mx-auto teal--text font-weight-bold">$ {{item.monto}} <span class="body-2">Usd / Año</span></span>
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
                                            :to="{ name: 'PlanesPayments', params: { payment: item.id } }"
                                        >
                                            Adquirir este plan</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import PlanesServices from "@/services/planes.service";
    export default {
        name:'IndexPlanesPage',
        data: () => ({
            loading:false,
            planes:[]
        }),
        mounted()
        {
            this.searchPlanes()
        },
        methods:{
            searchPlanes()
            {
                this.loading = true
                PlanesServices.getAll().then(
                    response => {
                        this.planes = response.data.data
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
            },
            apiRequest()
            {
                /* this.loading = true
                try {
                    this.$store.dispatch('auth/register', this.user).then(
                        () => {
                            this.$store.state.alert = {
                                                        active: true,
                                                        color: "success",
                                                        message: 'Registro realizado con exito: ' + this.$store.state.auth.user.name + ' ' + this.$store.state.auth.user.last_name}
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
                this.loading = false */
            }
        }
    }
</script>