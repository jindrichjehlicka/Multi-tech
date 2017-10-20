/* eslint-disable */
<template>
  
  <v-layout column>
    <v-flex>
      <users-search-panel />
     
      <users-panel class="mt-5"/>
      </v-flex>

  </v-layout>
     
</template>

<script>
import UsersPanel from './UsersPanel'
import UsersSearchPanel from './UsersSearchPanel'
import UsersService from '@/services/UsersService'

export default{
  methods:{
      navigateTo (route) {
      this.$router.push(route)
    },
  },
    components: {
      
      UsersPanel,
      UsersSearchPanel
    },
    data (){
      return{
       users:null
      }
    },
   async mounted(){
      //do a request to the backend for all the products
     this.users = (await UsersService.index()).data
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
