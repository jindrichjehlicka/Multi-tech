
<template>    
  <div id="app">
 <v-app id="inspire"  >
    <v-navigation-drawer 
      app
      persistent
      v-model="drawer"
      disable-resize-watcher
      disable-route-watcher
    absolute
    :width="230"
    
    class="indigo darken-3"
    dark
    >
  <v-list dense class="indigo darken-3" >
 <v-list-tile exact
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
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
            <v-list-tile-title >Go to <a id="multitech">Multitechwa</a></v-list-tile-title>
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
      style="cursor: pointer"
      :to="{name: 'root'}"
        >
        Multi-tech
      </router-link><br/>
    </v-toolbar-title>
<v-spacer></v-spacer>
 <v-toolbar-items class="hidden-sm-and-down">

       <v-btn
       exact
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}

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

    
      
       
         <router-view> <v-container fluid ></v-container></router-view>
       
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
      drawer: false,
      
    }),
    props: {
      source: String
    }, 
    computed: {
      menuItems () {
        let menuItems = [
          
          {icon: 'face', title: 'Sign in', link: '/login'},
          {icon: 'lock_open', title: 'Sign up', link: '/register'},
          
        ]
        if (this.$store.state.isUserLoggedIn) {
          menuItems = [
            {icon: 'supervisor_account', title: 'View Meetups', link: '/profile'},
         
           
          ]
        }
         if (this.$store.state.isUserLoggedIn && this.$store.state.user.admin ===1) {
          menuItems = [
            {icon: 'supervisor_account', title: 'View Meetups', link: '/profile'},
            
            {icon: 'room', title: 'Organize Meetup', link: '/support'},
          ]
        }
        return menuItems
      },
     
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
