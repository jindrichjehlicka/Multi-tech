<template>


    <v-layout justify-center> 
        <v-flex xs12 md8>
       
        <panel title="Products Metadata" >
     <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field
              label="Product Name"
              required
              :rules="[v => !!v || 'Product name is required']"
                v-model="product.companyName"
              ></v-text-field>
              <!-- TODO change companyName to ProductName eveyrywhere -->

            <v-text-field
              label="Model"
              required
              :rules="[v => !!v || 'Model number or name is required']"
                v-model="product.model"
              ></v-text-field>

            <v-text-field
              label="Company Logo URL"
              required
              :rules="[v => !!v || 'Item is required']"
                v-model="product.companyLogo"
              ></v-text-field>
              
       
           
            <v-text-field
              label="Description"
             
              multi-line
                v-model="product.description"
              ></v-text-field>

            <v-text-field
              label="Manual URL"
               required
              :rules="[v => !!v || 'Item is required']"
              multi-line
                v-model="product.url"
              ></v-text-field>
               </v-form>
            </panel>


           <v-alert
            class="ml-4"
            icon="warning"
            :value="error"
            transition="scale-transition"
            error>
            {{error}}
            </v-alert>
      

            

            <v-btn
             dark class = "green darken-2" 
             @click="create">Create Product
            </v-btn>

            <v-btn 
            dark
            class="grey darken-3"
            @click="clear">clear form</v-btn>
            <v-divider class="mt-3 mb-3"></v-divider>

            <v-btn
     
            >Go back to ALL products</v-btn>

   <v-snackbar
      :timeout="timeout"
      :color="color"
      :multi-line="mode === 'multi-line'"
      :vertical="mode === 'vertical'"
      v-model="snackbar"
    >
      {{ text }}
      <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
    
        </v-flex>

    </v-layout>

</template>

<script>

import ProductsService from '@/services/ProductsService'

export  default {
    data () {
        return{
            product:{
            companyName: null,
            model:null,
            description:null,
            companyLogo:null,
            url:null
                },
              error:null,              
          snackbar: false,
             color: 'green',
              mode: '',
              timeout: 5000,
              text: 'Product created',
              valid: true,
            }
           
            },

    methods:{
        
        async create(){
            this.error = null
            this.snackbar = false
            // const areAllFieldsFilledIn = Object.keys(this.product).every(key=> !!this.product[key])
        if(!this.$refs.form.validate()){
            this.error = 'Please fill in all the required fields'
            return
        }
        try{
            if (this.$refs.form.validate()){
             await ProductsService.post(this.product)               
      
        this.$refs.form.reset()
        this.snackbar = true
            }
         } catch (err) {
                    console.log(err)                
                }
            },

             clear () {
        this.$refs.form.reset()
      }
    },
       
    }
</script>

<style scoped>
    
</style>