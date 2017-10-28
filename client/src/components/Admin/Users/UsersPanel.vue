/* eslint-disable */
<template>
  <v-flex xs12 sm6 offset-sm3 >
    <panel title = "Users"> 
     

    
      <div 
      v-for="user in users"
      class="user"
      :key="user.id">

      <v-layout>
        <v-flex xs10  hidden-md-and-up>
            <div class="user-email pt-3" id="user-email-small">
              {{user.email}}
              </div>
              </v-flex>
              <v-flex xs2  hidden-md-and-up>
          <v-btn 
                dark 
                small 
              fab
                class = "grey darken-3" 
                  :to="{
                    name: 'user',
                     params: {
                       userId: user.id
                       }
                       }"><span><i class="fa fa-eye" aria-hidden="true"></i>&nbsp</span>
                     
                </v-btn>
              
            </v-flex>

    <v-flex sm6 hidden-sm-and-down>
    
            <div v-if="user.admin === 0" class="user-email pt-3" id="user-email-big">
               {{user.id}}. - {{user.email}}  - Not ADMIN
             
              </div>
              <div v-else-if="user.admin === 1" class="user-email pt-3" id="user-email-big">
                {{user.id}}. - {{user.email}} - ADMIN 
              </div>
              
              
                     </v-flex>

            <v-flex  sm6 hidden-sm-and-down="py-1">
                
                <v-btn 
                small
               
                dark 
                class = "grey darken-3 " 
                  :to="{
                    name: 'user',
                     params: {
                       userId: user.id
                       }
                       }"><span><i class="fa fa-eye" aria-hidden="true"></i>&nbsp</span>
                      VIew
                </v-btn>

              </v-flex>

          
        </v-layout>

      </div>
    </panel>
  </v-flex>
</v-layout>
     
</template>

<script>
import UsersService from '@/services/UsersService'

export default {
    data () {
      return {
       users:null
      }
    },
  watch: {
    '$route.query.search':  {
      immediate: true,
      async handler (value) {
        this.users = (await UsersService.index(value)).data
      }
    }
  },
 
   
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#user-email-big{
 font-size:18px;
 color:black;
}

#user-email-small{
 font-size:13px;
 color:black;
}




</style>
