/* eslint-disable */
<template>
<v-layout justify-center>
  <v-flex xs12 sm9 >
      <v-btn 
        :to="{name: 'products-create'}"    
        slot ="action"
        class="green darken-1"
        dark 
        medium
        fixed
        right
        middle
        fab >
        <v-icon>add</v-icon> 
      </v-btn>
 <panel title="All products">
  
    <v-data-table
    :headers="headers"
    :pagination.sync ="pagination"
    :items="products">

    <template slot = "items" slot-scope = "props">
     <td class="text-xs-right ">
    {{props.item.id}}
    
    </td>
    <td class="text-xs-right">
    {{props.item.companyName}}
    
    </td>

    <td class="text-xs-right">
    {{props.item.model}}
    </td>
      
      
    <v-btn 
                dark 
                class = "green"  small
                   :to="{
                   name: 'product',
                   params: {
                     productId: props.item.id
                   }
                 }">
                      View
                </v-btn>
  
    
    </template>
    </v-data-table>
    </panel>
  </v-flex>
</v-layout>
     
</template>

<script>
import ProductsService from '@/services/ProductsService'

export default {
    data () {
      return {
         headers: [
                   {
                        text:'ID',
                        value:'id'
                    },
                    {
                        text:'Name',
                        value: 'companyName'
                    },
                    {
                        text:'Model',
                        value:'model'
                    },
                    
                ],
                pagination: {
                    sortBy: 'companyName',
                    descending: false
                },
       products:[],
     
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
  width:15%;
  margin: 0 auto;
}

</style>
