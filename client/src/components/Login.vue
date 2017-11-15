/* eslint-disable */
<template>
<div id="form">
<page-header/>
 <v-layout column>
<v-flex xs12  class="mt-5">
<panel title= "Login" >

<form
  name="multi-tech-form"
  autocomplete ="on"
 >
  
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

<div class="mb-3" id="signup">Don't have an account yet?   <router-link
      class="home"
      tag="span"
      :to="{name: 'register'}"
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
          name: 'root'
        })
    }catch (error){
        this.error = error.response.data.error
    }
    },
  },
  
};
</script>


<style scoped>
#form{
  margin-top:2cm;
}
.home{
  cursor: pointer;
 
  text-decoration: underline;
  
}
.home:hover{
  color: #0000CD;
  font-size: 15px;
}
.btn{
  display: inline-block;
  color: #fff;
  text-decoration: none;
  padding: 1rem 2rem;
  border: #fff 1px solid;
  margin-top:40px;
  opacity: 0;
  animation-name: btn;
  animation-duration: 3s;
  animation-delay: 0s;
  animation-fill-mode: forwards;

  transition-property: transform;
  transition-duration: 0.5s;
}

.btn:hover {
  transition-property: transform;
   transform:scale(1.1,1.1);
  transition-duration: 0.3s;
}

@keyframes btn {
  0%   {opacity:0}
  100% {opacity: 1}
}


 #form{
    position: relative;
    -webkit-animation: mymove 1s ; /* Safari 4.0 - 8.0 */
    animation: mymove 1s ;
}

/* Safari 4.0 - 8.0 */
@-webkit-keyframes mymove {
     0%   {top: -1000px; left: 0px; }
    50% {top: 50px; left: 0px; }
    100% {top: 0px; left: 0px; }
}

/* Standard syntax */
@keyframes mymove {
    0%   {top: -1000px; left: 0px; }
    50% {top: 50px; left: 0px; }
    100% {top: 0px; left: 0px; }
}


</style>
