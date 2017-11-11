<template>
<div>
<admin-header/>
    <v-layout>
        <v-flex xs3 offset-xs1>
        <panel title="User Metadata" class="mt-5 ml-2">
     
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
              </panel>
      
           


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

    </v-layout>
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
       
    }
</script>

<style scoped>
    
</style>