/* eslint-disable */
<template>
 <v-layout column>
<v-flex xs6 offset-xs3>
<div class = "white elevation-24">
<v-toolbar flat dense class class = "indigo darken-2 white--text" >
<v-toolbar-title >Register</v-toolbar-title>
</v-toolbar>

<div class = "pl-4 pr-4 pt-2 pb-2">
 <v-text-field
              label="Email"
              v-model="email"
            ></v-text-field>

    <v-text-field
              label="Password"
              v-model="password"
            ></v-text-field>

            <v-text-field
              label="Name of mine (optional)"
              v-model="mine"
            ></v-text-field>

  <div class="error" v-html = "error" />
<br>
<v-btn class = "indigo darken-3 " 
@click="register"><span class = " white--text">Register </span>
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
    async register() {
      try{
     await AuthenticationService.register({
       email: this.email,
       password: this.password,
       mine: this.mine,
       })
    }catch (error){
        this.error = error.response.data.error
    }
    },
  },
};
</script>


<style scoped>




</style>
