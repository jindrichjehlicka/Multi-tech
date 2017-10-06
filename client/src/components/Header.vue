/* eslint-disable */
<template>
  <v-toolbar fixed class="indigo darken-2" dark>
    <v-toolbar-title class="mr4">
   
      <span
      class="home"
        @click="navigateTo({name: 'root'})">
        Multi-tech
      </span>
    </v-toolbar-title>

    <v-toolbar-items >
      <v-btn flat dark> Products</v-btn>
      <v-btn flat dark> Support</v-btn>
    </v-toolbar-items>
          <v-spacer></v-spacer>
    <v-toolbar-items >

      <v-btn flat dark to ="Login"
       v-if="!$store.state.isUserLoggedIn"
       flat dark 
         @click="navigateTo({name: 'login'})"
           > <!-- TODO:refactor later -->
          Login
      </v-btn>

       <v-btn 
       v-if="!$store.state.isUserLoggedIn"
       flat dark 
          @click="navigateTo({name: 'register'})"> <!-- TODO:refactor later -->
          Sign Up
      </v-btn>

       <v-btn 
       v-if="$store.state.isUserLoggedIn"
       flat dark 
          @click="navigateTo({name: ''})"
          > <!-- TODO:refactor later -->
          My profile
      </v-btn>

<v-btn 
       v-if="$store.state.isUserLoggedIn"
       flat dark 
          @click="navigateTo({name: ''})"
          > <!-- TODO:refactor later -->
          Sign out
      </v-btn>

      
      
    </v-toolbar-items>
        
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default{
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  } 
}
</script>


<style scoped>

.home{
  cursor: pointer;
}
.home:hover{
  color: #DCDCDC;
}

</style>
