/* eslint-disable */
<template>
  <v-flex xs12 sm6 offset-sm3 >
    <panel title = "Products"> 
      <v-btn 
        :to="{name: 'products-create'}"    
        slot ="action"
        class="green darken-1"
        dark 
        medium
        absolute
        right
        middle
        fab >
        <v-icon>add</v-icon> 
      </v-btn>

    
      <div 
      v-for="product in products"
      class="product"
      :key="product.id">

      <v-layout>
        <v-flex xs12 sm6>
            <div class="product-name">
              {{product.companyName}}
              </div>

              <div class="product-model">
              {{product.model}}
              </div>

                <v-btn 
                dark 
                class = "indigo darken-3 mt-3" 
                  @click="navigateTo({
                    name: 'product',
                     params: {
                       productId: product.id
                       }
                       })"><span><i class="fa fa-eye" aria-hidden="true"></i>&nbsp</span>
                      View
                </v-btn>

              </v-flex>

          <v-flex sm6 hidden-xs-only>
            <img class="product-logo" :src="product.companyLogo"/>
          </v-flex>
        </v-layout>

      </div>
    </panel>
  </v-flex>
</v-layout>
     
</template>

<script>
import ProductsService from '@/services/ProductsService'

export default {
    data () {
      return {
       products:null
      }
    },
  watch: {
    '$route.query.search':  {
      immediate: true,
      async handler (value) {
        this.products = (await ProductsService.index(value)).data
      }
    }
  },
   methods:{
      navigateTo (route) {
      this.$router.push(route)
    },
  },
    
   
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product{
  padding:30px;
  height: 230px;
  overflow: hidden;
}

.product-name{
  font-size:30px;
}

.product-model{
font-size:24px;
}
.product-logo{
  width:70%;
  margin: 0 auto;
}

</style>
