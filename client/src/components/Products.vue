/* eslint-disable */
<template>
  <v-flex xs6 offset-xs3 class="mt-5">
    <panel title = "Products"> 
      <div 
      v-for="product in products"
      :key="product.title">
          {{product.companyName}} -
          {{product.model}} -
          {{product.description}}
      </div>
    </panel>
  </v-flex>
</v-layout>
     
</template>

<script>
import SongsService from '@/services/ProductsService'
import Panel from '@/components/Panel'
export default{
    components: {
      Panel
    },
    data (){
      return{
       products:null
      }
    },
   async mounted(){
      //do a request to the backend for all the songs
     this.products = await ProductsService.index()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
