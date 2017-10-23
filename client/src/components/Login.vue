/* eslint-disable */
<template>
<div>
<page-header/>
 <v-layout column>
<v-flex xs12 sm4 offset-sm4 class="mt-5">
<panel title= "Login">

<form
  name="multi-tech-form"
  autocomplete ="on">
  
 <v-text-field
              label="Email"
              v-model="email"
            ></v-text-field>

    <v-text-field
              label="Password"
              type ="password"
              v-model="password"
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
<v-btn dark class = "indigo darken-3 mb-5" 
@click="login"><span><i class="fa fa-sign-in"></i>&nbsp</span>Sign in
</v-btn>

<div class="mb-3">Don't have an account yet?   <router-link
      class="home"
      tag="span"
      :to="{name: 'root'}"
        >
        Sign up here!
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
      error: null
    };
  },
  methods: {
    async login() {
      try{
    const response = await AuthenticationService.login({
       email: this.email,
       password: this.password,
             })
      this.$store.dispatch('setToken', response.data.token)
      this.$store.dispatch('setUser', response.data.user)
      this.$router.push({
          name: 'multi-tech'
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
