/* eslint-disable */
<template>
  <v-flex xs12 sm6 offset-sm3 >
    <panel title = "Users"> 
     

    
      <div 
      v-for="user in users"
      class="user"
      :key="user.id">

      <v-layout>
        <v-flex xs12  hidden-sm-and-up>
            <div class="user-email pt-3">
              {{user.email}}
              </div>
              
          <v-btn 
                dark 
                class = "indigo darken-3 " 
                  @click="navigateTo({
                    name: 'user',
                     params: {
                       userId: user.id
                       }
                       })"><span><i class="fa fa-eye" aria-hidden="true"></i>&nbsp</span>
                      View
                </v-btn>
              
            </v-flex>

    <v-flex sm6 hidden-xs-only>
            <div class="user-email pt-3">
              {{user.email}}
              </div>
              
                     </v-flex>

            <v-flex  sm6 hidden-xs-only>
                
                <v-btn 
                dark 
                class = "indigo darken-3 " 
                  @click="navigateTo({
                    name: 'user',
                     params: {
                       userId: user.id
                       }
                       })"><span><i class="fa fa-eye" aria-hidden="true"></i>&nbsp</span>
                      View
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
   methods:{
      navigateTo (route) {
      this.$router.push(route)
    },
  },
    
   
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product{
  padding:30px;
  height: 230px;
  overflow: hidden;
}

.product-name{
  font-size:30px;
}

.product-model{
font-size:24px;
}
.product-logo{
  width:70%;
  margin: 0 auto;
}

</style>
