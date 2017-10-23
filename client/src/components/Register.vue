/* eslint-disable */
<template>
<div>
<page-header/>
 <v-layout column justify-center > 
<v-flex xs12 sm4 offset-sm4 class="mt-5">
<panel title= "Register">
<form
  name="multi-tech-form"
  autocomplete ="on"
  class="mb-1">
  
 <v-text-field
              label="Email"
              v-model="email"
            ></v-text-field>

    <v-text-field
              label="Password"
              type="password"
              v-model="password"
              autocomplete="new-password"
            ></v-text-field>

            <v-text-field
              label="Name of the Mine (optional)"
              v-model="mine"
            ></v-text-field>
            
            </form>
                         
  <v-alert
        class="ml-4"
        :value="error"
        transition="scale-transition"
        error>
        {{error}}
</v-alert>


<br>
<v-btn dark 
 class = "indigo darken-3 pm-2 mb-5" 
@click="register"><span><i class="fa fa-user-plus" aria-hidden="true"></i>&nbsp</span>Sign up
</v-btn>
<div class="mb-3">Already have an account?  <router-link
      class="home"
      tag="span"
      :to="{name: 'root'}"
        >
         Sign in here! 
      </router-link>
      </div>
</panel>


</v-flex>
</v-layout>
</div>
 </template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
   data() {
    return {
      email: '',
      password: '',
      mine:'',
      error: null
    };
  },
 
  methods: {
    async register() {
      try{
     const response = await AuthenticationService.register({
       email: this.email,
       password: this.password,
       mine: this.mine,
       })
      this.$store.dispatch('setToken', response.data.token)
      this.$store.dispatch('setUser', response.data.user)
       this.$router.push({
          name: 'login'
        })
    }catch (error){
        this.error = error.response.data.error
    }
    },
  },
  
};
</script>


<style scoped>
.home{
  cursor: pointer;
  font-size:15px;
  text-decoration: underline;
}
.home:hover{
  color: #0000CD;
  font-size:17px;
}



</style>
