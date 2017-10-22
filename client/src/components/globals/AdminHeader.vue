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
      <v-list-tile  :to="{
      name: ''
      }">
          <v-list-tile-action>
            <i class="fa fa-product-hunt" aria-hidden="true"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Products</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile  :to="{
      name: ''
      }">
          <v-list-tile-action>
            <i class="fa fa-question" aria-hidden="true"></i> 
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Users</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      
       

         <v-list-tile v-if="$store.state.isUserLoggedIn"  :to="{
      name: 'profile'
      }">
        

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

    <v-toolbar  dark fixed flat  class="indigo darken-3" >
      <v-toolbar-side-icon  @click.stop="drawer = !drawer"><i class="fa fa-bars" aria-hidden="true"></i></v-toolbar-side-icon>
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
      :to="{
      name: 'products'
      }"
     > Products</v-btn>

    

      <v-btn flat dark 
       :to="{
      name: 'users'
      }"
      > Users</v-btn>

    </v-toolbar-items>
          <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">

     

     

       <v-btn 
       
       flat dark 
       v-if="$store.state.isUserLoggedIn"
           :to="{
      name: 'profile'
      }"> <span>
      <i class="fa fa-user" aria-hidden="true"></i>&nbsp</span><!-- TODO:refactor later -->
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
export default {
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
