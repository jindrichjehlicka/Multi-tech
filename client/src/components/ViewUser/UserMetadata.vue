<template>
<div>
     <panel title = "User information" class="mt-5">
           
        <v-flex>
            <div class="user-email" >
              {{user.email}}
              </div>

              <div class="user-mine">
              {{user.mine}}
              </div>
                <br/>
              <div class="user-admin">
              {{user.admin}}
              </div>

             
            <br/>
          
            <!--  <v-btn
              center
              right
                dark 
                class = "indigo darken-3 " 
                :to="{
                    name: 'user-edit',
                     params: {
                       userID: user.id
                       }
                       }"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>&nbsp
                      Edit
                </v-btn>
                -->
                </v-flex>
                </panel>


               
        <panel title="Edit User" class="mt-5 ml-2">
      <v-flex >
            <v-text-field
              label="User Email"
              required
              :rules="[required]"
                v-model="user.email"
              ></v-text-field>
              

            <v-text-field
              label="Mine"
             
                v-model="user.mine"
              ></v-text-field>

            <v-text-field
              label="Admin"
              required
              :rules="[required]"
                v-model="user.admin"
              ></v-text-field>
              
      
           


           <v-alert
            class="ml-4"
            :value="error"
            transition="scale-transition"
            error>
            {{error}}
            </v-alert>

            

            <v-btn
             dark class = "indigo darken-3 mt-3" 
             @click="save">Save User
            </v-btn>
            </v-flex>
</panel>
        
              
               
            
     
              
            

             
             
            
        
        </div>
</template>

<script>
import UsersService from '@/services/UsersService'

    export  default {
        data () {
        return{
            user:{
            email:null,
            password:null,
            mine: null,
            admin:null,
           
                },
                error:null,
                required:(value) => !!value || 'Required.'
            }
            
            },
             methods:{
        async save () {
            
         

         const userId = this.$store.state.route.params.userId
         try {
              console.log("Hello user")
            await UsersService.put(this.user)
           
            this.$router.push({
                name: 'user',
                params:{
                    userId: userId
                }
        })
        
        } catch (err) {
                    console.log(err)
                }
            }
    }, 
       async mounted () {
            try {
                const userId = this.$store.state.route.params.userId
                this.user = (await UsersService.show(userId)).data
            } catch (err) {
                    console.log(err)
                }
    },
        
        props: [
            'user'
        ],
      }
</script>

<style scoped>


a {
  color: blue;
  text-decoration: none; /* no underline */
}
</style>