/* eslint-disable */
<template>
  
  <v-layout column>
    <v-flex>
      <products-search-panel />
     
      <products-panel class="mt-5"/>
      </v-flex>

  </v-layout>
     
</template>

<script>
import ProductsPanel from './ProductsPanel'
import ProductsSearchPanel from './ProductsSearchPanel'
import ProductsService from '@/services/ProductsService'

export default{
  methods:{
      navigateTo (route) {
      this.$router.push(route)
    },
  },
    components: {
      
      ProductsPanel,
      ProductsSearchPanel
    },
    data (){
      return{
       products:null
      }
    },
   async mounted(){
      //do a request to the backend for all the products
     this.products = (await ProductsService.index()).data
    }
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
