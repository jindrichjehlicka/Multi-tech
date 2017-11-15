/* eslint-disable */
<template>
  
  
  <v-layout column>
    <v-flex>
      <products-search-panel id="search-panel"/>
     
      <products-panel class="mt-5" id="panel"/>
      </v-flex>

  </v-layout>
    
</template>

<script>
import ProductsPanel from './ProductsPanel'
import ProductsSearchPanel from './ProductsSearchPanel'
import ProductsService from '@/services/ProductsService'

export default{
 
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

#search-panel {
  position: relative;
  -webkit-animation: mymove 1s; /* Safari 4.0 - 8.0 */
  animation: mymove 1s;
}


/* Safari 4.0 - 8.0 */
@-webkit-keyframes mymove {
   0% {
    top: 0px;
    left: -1000px;
  }

  100% {
    top: 0px;
    left: 0px;
  }
}

/* Standard syntax */
@keyframes mymove {
  0% {
    top: 0px;
    left: -1000px;
  }

  100% {
    top: 0px;
    left: 0px;
  }
}

#panel {
  position: relative;
  -webkit-animation: mymove 1s; /* Safari 4.0 - 8.0 */
  animation: mymove2 1s;
}
/* Safari 4.0 - 8.0 */
@-webkit-keyframes mymove2 {
 0% {
    top: 0px;
    left: 1000px;
  }

  100% {
    top: 0px;
    left: 0px;
  }
}

/* Standard syntax */
@keyframes mymove2 {
  0% {
    top: 0px;
    left: 1000px;
  }

  100% {
    top: 0px;
    left: 0px;
  }
}
</style>
