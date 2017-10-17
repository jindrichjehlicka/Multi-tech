<template>
     <panel title = "Product information" class="mt-5">
           
        <img class="product-logo" :src="product.companyLogo"/>
            <div class="product-name " >
              {{product.companyName}}
              </div>

              <div class="product-model">
              {{product.model}}
              </div>
                <br/>
              <div class="product-description">
              {{product.description}}
              </div>

              <div class="product-manual mb-5">
              {{product.manual}}
              </div>
            
           
              <v-btn
              center
                dark 
                class = "indigo darken-3 " 
                  @click="navigateTo({
                    name: 'product-edit',
                     params: {
                       productId: product.id
                       }
                       })"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>&nbsp</span>
                      Edit
                </v-btn>
              
                <!-- TODO -->
                  <v-btn 
                  right
                dark 
                class = "indigo darken-3 " 
                  @click="navigateTo({
                    name: '',
                     params: {
                      
                       }
                       })"><i class="fa fa-download" aria-hidden="true"></i>&nbsp</span>
                      Download manual
                </v-btn>
                 
        
        </panel>
</template>

<script>
import Panel from '@/components/Panel'

    export  default {
        props: [
            'product'
        ],
        methods: {
          navigateTo (route){
            this.$router.push(route)
          }
        },
        components:{
            Panel
        }
            
       }
</script>

<style scoped>
        .product{
  padding:30px;
  height: 300px;
  overflow: hidden;
}

.product-name{
  font-size:35px;
  color:black;
}

.product-model{
font-size:24px;
color:black;
}
.product-logo{
  width:60%;
  margin: 0 auto;
}
.product-description{
font-size:18px;
color:black;
}
.product-manual{
font-size:15px;
color:black;
}
</style>