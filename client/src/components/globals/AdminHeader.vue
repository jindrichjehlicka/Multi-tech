/* eslint-disable */
<template>
     <div>
       <v-navigation-drawer class="indigo darken-3"
      app
      persistent
      v-model="drawer"
      disable-resize-watcher
      disable-route-watcher
    absolute
    :width="230"
    dark
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

    <v-toolbar  dark fixed flat  class="indigo darken-3" id="navbar">
      <v-toolbar-side-icon class="bars"  @click.stop="drawer = !drawer"><i class="fa fa-bars" aria-hidden="true"></i></v-toolbar-side-icon>
      <v-toolbar-title >
   
      <router-link
      class="home"
      tag="span"
      :to="{name: 'admin'}"
        >
      Admin
      </router-link>
      <br/>
    </v-toolbar-title>
<br/>
 <v-toolbar-items class="hidden-sm-and-down">

      <v-btn flat dark
     
       class="button"
      :to="{
      name: 'admin-products'
     
      }"
     > All Products</v-btn>

     


      <v-btn flat dark 
      class="button"
       :to="{
      name: 'users'
    
      }"
      > Users</v-btn>

    </v-toolbar-items>
          <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">

         <v-btn 
       class="button"
       flat dark 
       
           :to="{
      name: 'root'
     }"> <span>
      <i class="fa fa-home" aria-hidden="true"></i>&nbsp</span><!-- TODO:refactor later -->
        Main page
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
      drawer: false,
       menuItems: [
          {icon: 'supervisor_account', title: 'All products', link: '/admin/products'},
          {icon: 'supervisor_account', title: 'Users', link: '/users'},
          {icon: 'person', title: 'Profile', link: '/profile'},
          {icon: 'face', title: 'Sign up', link: '/signup'},
          {icon: 'lock_open', title: 'Sign in', link: '/signin'}
        ]
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
.button{
  border-radius:12px ;
   padding:  10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
  
}
.bars{
  border:2px solid ;
}


</style>
