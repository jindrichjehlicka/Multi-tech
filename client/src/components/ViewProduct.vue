<template>
    <v-layout >
        <v-flex xs12 sm6 offset-sm3>
        <panel title = "Product information">
            
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

              <div class="product-manual">
              {{product.manual}}
              </div>

            
           
                
         
            
         

        
        </panel>
        </v-flex>
    </v-layout>
</template>

<script>
import ProductsService from '@/services/ProductsService'
import Panel from '@/components/panel'

    export  default {
        data(){
            return{
                product:{}
            }
        },
        async mounted () {
            const productId = this.$store.state.route.params.productId
            this.product = (await ProductsService.show(productId)).data
        },
        components:{
            Panel
        }
    }
</script>

<style scoped>
    .product{
  padding:30px;
  height: 250px;
  overflow: hidden;
}

.product-name{
  font-size:30px;
}

.product-model{
font-size:24px;
}
.product-logo{
  width:60%;
  margin: 0 auto;
}

</style>