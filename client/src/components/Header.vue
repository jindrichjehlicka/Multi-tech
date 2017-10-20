/* eslint-disable */
<template>
     <div>
    <v-navigation-drawer
      persistent
      v-model="drawer"
     enable-resize-watcher
     clipped
   temporary
      app
   dark 
  
      class="indigo darken-3"
    >
    <br/>
      <v-list dense class="indigo darken-3">

        <v-list-tile @click="navigateTo({name: 'products'})">
          <v-list-tile-action>
            <i class="fa fa-product-hunt" aria-hidden="true"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Products</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="navigateTo({name: 'support'})">
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

         <v-list-tile  v-if="!$store.state.isUserLoggedIn" @click="navigateTo({name: 'register'})">
          <v-list-tile-action>
            <i class="fa fa-user-plus" aria-hidden="true"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Sign up</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

         <v-list-tile v-if="$store.state.isUserLoggedIn" @click="navigateTo({name: 'profile'})">
          <v-list-tile-action>
            <i class="fa fa-user" aria-hidden="true"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Profile</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

         <v-list-tile v-if="$store.state.isUserLoggedIn" target="_blank" @click="logout">
          <v-list-tile-action>
            <i class="fa fa-sign-out" aria-hidden="true"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title >Sign Out</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        
          
         <v-list-tile class="mt-5 pt-5 " @click="externalLink" >
           
          <v-list-tile-action>
            <i class="fa fa-external-link" aria-hidden="true"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title >Go back to multitechwa.com</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>



      </v-list>
    </v-navigation-drawer>

    <v-toolbar  fixed dark  class="indigo darken-3" >
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

      <v-btn flat dark
      @click="navigateTo({name: 'products'})"
      > Products</v-btn>

      <v-btn flat dark
      to="support"
      > Support</v-btn>


      <v-btn flat dark to="users"
     
      > Users</v-btn>

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
       
       flat dark 
       v-if="$store.state.isUserLoggedIn"
          @click="navigateTo({name:'profile'})"
          > <span><i class="fa fa-user" aria-hidden="true"></i>&nbsp</span><!-- TODO:refactor later -->
        Profile
      </v-btn>

<v-btn 
       v-if="$store.state.isUserLoggedIn"
       flat dark 
          @click="logout"
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
    },
    logout (){
    this.$store.dispatch('setToken', null)
    this.$store.dispatch('setUser', null)
    this.$router.push({
      name:'root'
    }) 
   
    },
    externalLink () {
      
      window.location= 'http://www.multitechwa.com'
      
    }
  }, 
    data: () => ({
      drawer: true
    }),
    props: {
      source: String
    },

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
