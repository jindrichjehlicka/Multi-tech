
<template>    
  <div id="app">
 <v-app >
    <v-navigation-drawer class="indigo darken-3"
      app
      persistent
      v-model="drawer"
      enable-resize-watcher
      absolute
    >
      <v-list dense class="indigo darken-3">
        <v-list-tile v-for="item in menuItems" :key="item.title" router :to="item.link" >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app   dark fixed  flat  class="indigo darken-3" >
      <v-toolbar-side-icon class="bars"  @click.stop="drawer = !drawer"><i class="fa fa-bars" aria-hidden="true"></i></v-toolbar-side-icon>
      <v-toolbar-title id="title">
   
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
     :ripple="false"> Products</v-btn>

      <v-btn flat dark
      class="button"
        :to="{
      name: 'support'
      
      }"
      :ripple="false"
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
     }"
     :ripple="false">  <span>
      <i class="fa fa-key" aria-hidden="true"></i></i>&nbsp</span>
          Admin
      </v-btn>

      <v-btn flat dark to ="Login"
       v-if="!$store.state.isUserLoggedIn"
       class="button"
       flat dark 
          :to="{
      name: 'login'
     }"
     :ripple="false"> 
          Login
      </v-btn>

       <v-btn 
       v-if="!$store.state.isUserLoggedIn"
       class="button"
       flat dark 
           :to="{
      name: 'register'
     }"
     :ripple="false"> 
          Sign Up
      </v-btn>

       <v-btn 
       class="button"
       flat dark 
       v-if="$store.state.isUserLoggedIn"
           :to="{
      name: 'profile'
     }"
     :ripple="false"> <span>
      <i class="fa fa-user" aria-hidden="true"></i>&nbsp</span><!-- TODO:refactor later -->
        Profile
      </v-btn>

      <v-btn 
      class="button"
       v-if="$store.state.isUserLoggedIn"
       flat dark 
          @click="logout"
          
          :ripple="false"
          > <!-- TODO:refactor later -->
          Sign out
      </v-btn>

      
      
    </v-toolbar-items>
        
    
    </v-toolbar>
  <v-content>

    
       <v-container fluid>
       
         <router-view></router-view>
       </v-container>
     </v-content>
     <page-footer/>
    </v-app>  
     </div>     
     </template>

<script>

import PageFooter from '@/components/Footer.vue'
import UsersService from '@/services/UsersService'
export default {
  name: 'app',
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
      
      window.open ( 'http://www.multitechwa.com','_blank')
      
    }
    
  },
  components:{
    
    PageFooter
  }
};
</script>

<style>

#app {
  font-family: 'Open sans';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.home{
  cursor: pointer;

   
}
#title{
 padding: 0.7em 1.5em;
}
#title:hover{
  background-color:#474A9F;

}


.button{
 
  
    text-align: center;
    
    display: inline-block;
      padding: 1em 2em;
  
  
}


.bars{
  border:2px solid ;
}

#drawer{
width:230px;
}

#multitech{
  font-weight: bold;
  font-size:14px;
}
</style>
