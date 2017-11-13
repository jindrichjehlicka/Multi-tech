/* eslint-disable */

<template>
<div >
     
    <v-navigation-drawer
 persistent
    clipped
 
      v-model="drawer"
      app 
      dark
     class="indigo darken-3"
    >
    <br/>

    
      <v-list dense class="indigo darken-3" >

       <v-list-tile :to="{
         name: 'home'
         }">
          <v-list-tile-action>
            <i class="fa fa-home" aria-hidden="true"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Main page</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      <v-list-tile  :to="{
      name: 'products'
      }" >
          <v-list-tile-action>
            <i class="fa fa-product-hunt" aria-hidden="true"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Products</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile  :to="{
      name: 'support'
      }">
          <v-list-tile-action>
            <i class="fa fa-question" aria-hidden="true"></i> 
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Support</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

         <v-list-tile v-if="!$store.state.isUserLoggedIn"  :to="{
      name: 'login'
      }">
          <v-list-tile-action>
            <i class="fa fa-sign-in" aria-hidden="true"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

         <v-list-tile  v-if="!$store.state.isUserLoggedIn"  :to="{
      name: 'register'
      }">
          <v-list-tile-action>
            <i class="fa fa-user-plus" aria-hidden="true"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Sign up</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

         <v-list-tile v-if="$store.state.isUserLoggedIn"  :to="{
      name: 'profile'
      }">
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

    <v-toolbar app   dark fixed  flat  class="indigo darken-3" >
      <v-toolbar-side-icon class="bars"  @click.stop="drawer = !drawer"><i class="fa fa-bars" aria-hidden="true"></i></v-toolbar-side-icon>
      <v-toolbar-title >
   
      <router-link
      class="home"
      tag="span"
      :to="{name: 'root'}"
        >
        Multi-tech
      </router-link><br/>
    </v-toolbar-title>
<br/>
 <v-toolbar-items class="hidden-sm-and-down">

      <v-btn flat dark
     
       class="button"
      :to="{
      name: 'products'
     
      }"
     > Products</v-btn>

      <v-btn flat dark
      class="button"
        :to="{
      name: 'support'
      
      }"
      > Support</v-btn>


      

    </v-toolbar-items>
          <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
    


     <v-btn flat dark to ="Admin"
      v-if="$store.state.isUserLoggedIn" 
       class="button"
       flat dark 
          :to="{
      name: 'admin'
     }">  <span>
      <i class="fa fa-key" aria-hidden="true"></i></i>&nbsp</span>
          Admin
      </v-btn>

      <v-btn flat dark to ="Login"
       v-if="!$store.state.isUserLoggedIn"
       class="button"
       flat dark 
          :to="{
      name: 'login'
     }"> 
          Login
      </v-btn>

       <v-btn 
       v-if="!$store.state.isUserLoggedIn"
       class="button"
       flat dark 
           :to="{
      name: 'register'
     }"> 
          Sign Up
      </v-btn>

       <v-btn 
       class="button"
       flat dark 
       v-if="$store.state.isUserLoggedIn"
           :to="{
      name: 'profile'
     }"> <span>
      <i class="fa fa-user" aria-hidden="true"></i>&nbsp</span><!-- TODO:refactor later -->
        Profile
      </v-btn>

      <v-btn 
      class="button"
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
import UsersService from '@/services/UsersService'
export default {
     data: () => ({
      drawer: false
    }),
    props: {
      source: String
    },
  methods: {
  
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
  
   
  


     
}
</script>


<style scoped>
.home{
  cursor: pointer;
   padding-top: 2cm;
}
.home:hover{
  background-color: #474A9F;
}
.button{
 
   padding:  10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
  
}
.bars{
  border:2px solid ;
}
</style>