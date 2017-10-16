<template>
    <v-layout>
        <v-flex xs3 offset-xs1>
        <panel title="Products Metadata" class="mt-5 ml-2">
     
            <v-text-field
              label="Product Name"
              required
              :rules="[required]"
                v-model="product.companyName"
              ></v-text-field>
              <!-- TODO change companyName to ProductName eveyrywhere -->

            <v-text-field
              label="Model"
              required
              :rules="[required]"
                v-model="product.model"
              ></v-text-field>

            <v-text-field
              label="Company Logo"
              required
              :rules="[required]"
                v-model="product.companyLogo"
              ></v-text-field>
              </panel>
        </v-flex>

        <v-flex xs6>
            <panel title="Products Structure" class="ml-4 mt-5">
            <v-text-field
              label="Description"
               required
              :rules="[required]"
              multi-line
                v-model="product.description"
              ></v-text-field>

            <v-text-field
              label="Manual"
               required
              :rules="[required]"
              multi-line
                v-model="product.manual"
              ></v-text-field>
            </panel>


           <v-alert
            class="ml-4"
            :value="error"
            transition="scale-transition"
            error>
            {{error}}
            </v-alert>

            

            <v-btn
             dark class = "indigo darken-3 " 
             @click="create">Create Product
            </v-btn>

        </v-flex>

    </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import ProductsService from '@/services/ProductsService'

export  default {
    data () {
        return{
            product:{
            companyName: null,
            model:null,
            description:null,
            companyLogo:null,
            manual:null
                },
                error:null,
                required:(value) => !!value || 'Required.'
            }
            
            },

    methods:{
        async create(){
            this.error = null
            const areAllFieldsFilledIn = Object
            .keys(this.product)
            .every(key=> !!this.product[key])
        if(!areAllFieldsFilledIn){
            this.error = 'Please fill in all the required fields'
            return
        }

            try{
                await ProductsService.post(this.product)
                this.$router.push({
                name: 'products'
        })
                } catch (err) {
                    console.log(err)
                }
            }
    },
        components:{
            Panel
        }
    }
</script>

<style scoped>
    
</style>