/* eslint-disable */
<template>
 <v-layout column>
<v-flex xs4 offset-xs4>
<div class = "white elevation-24">
<v-toolbar flat dense class class = "indigo darken-2 white--text" >
<v-toolbar-title >Login</v-toolbar-title>
</v-toolbar>

<div class = "pl-4 pr-4 pt-2 pb-2">
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
          

  <div class="error" v-html = "error" />
<br>
<v-btn class = "indigo darken-3 " 
@click="login"><span class = " white--text">Login </span>
</v-btn>
</div>

</div>
</v-flex>
</v-layout>


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
    }catch (error){
        this.error = error.response.data.error
    }
    },
  },
};
</script>


<style scoped>




</style>
