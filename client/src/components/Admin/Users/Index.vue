/* eslint-disable */
<template>
  <div>
  <admin-header/>
  <v-layout column>
    <v-flex>
      <users-search-panel />
     
      <users-panel class="mt-5"/>
      </v-flex>

  </v-layout>
     </div>
</template>

<script>
import UsersPanel from './UsersPanel'
import UsersSearchPanel from './UsersSearchPanel'
import UsersService from '@/services/UsersService'

export default{

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



</style>
