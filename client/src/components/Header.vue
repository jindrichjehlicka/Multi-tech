/* eslint-disable */
<template>
     <div>
    <v-navigation-drawer
      persistent
      v-model="drawer"
      enable-resize-watcher
      app
      dark
      
    >
    <br/>
      <v-list dense>

        <v-list-tile @click="">
          <v-list-tile-action>
            <i class="fa fa-product-hunt" aria-hidden="true"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Products</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="">
          <v-list-tile-action>
            <i class="fa fa-question" aria-hidden="true"></i> 
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Support</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

         <v-list-tile v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name: 'login'})">
          <v-list-tile-action>
            <i class="fa fa-sign-in" aria-hidden="true"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

         <v-list-tile v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name: 'register'})">
          <v-list-tile-action>
            <i class="fa fa-user-plus" aria-hidden="true"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Sign up</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

         <v-list-tile v-if="$store.state.isUserLoggedIn" @click="">
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>My Profile</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

         <v-list-tile v-if="$store.state.isUserLoggedIn" @click="">
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title >Sign Out</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed class="indigo darken-2" dark dense>
      <v-toolbar-side-icon  @click.stop="drawer = !drawer"><i class="fa fa-bars" aria-hidden="true"></i></v-toolbar-side-icon>
      <v-toolbar-title class="mr4">
   
      <span
      class="home"
        @click="navigateTo({name: 'root'})">
        Multi-tech
      </span><br/>
    </v-toolbar-title>
<br/>
 <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat dark> Products</v-btn>
      <v-btn flat dark> Support</v-btn>
    </v-toolbar-items>
          <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">

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
        
    
    </v-toolbar>




  </div>
</template>

<script>
export default{
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }, 
    data: () => ({
      drawer: true
    }),
    props: {
      source: String
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
