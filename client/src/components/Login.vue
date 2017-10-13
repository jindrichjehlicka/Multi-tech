/* eslint-disable */
<template>
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
          

  <div class="error" v-html = "error" />
<br>
<v-btn dark class = "indigo darken-3 " 
@click="login"><span><i class="fa fa-sign-in"></i>&nbsp</span>Login
</v-btn>

</panel>
</v-flex>
</v-layout>


 </template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
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
   components:{
    Panel
  }
};
</script>


<style scoped>




</style>
