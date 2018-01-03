/* eslint-disable */
<template>
  <div id="form">

    <v-layout column justify-center>
      <v-flex xs10 offset-xs1 md6 offset-md3>
        <panel title="Register">
          <form name="multi-tech-form" autocomplete="on" class="mb-1">

            <v-text-field label="Email" v-model="email"></v-text-field>

            <v-text-field label="Password" type="password" v-model="password" autocomplete="new-password"></v-text-field>

            <v-text-field label="Name of the Mine (optional)" v-model="mine"></v-text-field>

          </form>

          <v-alert class="ml-4" :value="error" transition="scale-transition" error>
            {{error}}
          </v-alert>

          <br>
          <v-btn dark large class="green elevation-12 mb-5" @click="register">
            <v-icon left class="mb-1">fa-user-plus</v-icon>Sign up
          </v-btn>

          <div class="mb-3">Already have an account?
            <router-link class="home" tag="span" :to="{name: 'login'}">
              Sign in here!
              <v-icon right>fa-sign-in</v-icon>
            </router-link>

          </div>
        </panel>

      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import EmailRegisterService from "@/services/EmailRegisterService";

export default {
  data() {
    return {
      email: "",
      password: "",
      mine: "",
      error: null
    };
  },

  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
          mine: this.mine
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        EmailRegisterService.post({
             
             email: this.email,
             mine: this.mine || "Not defined"
          });
        this.$router.push({
          name: "login"
        });
        
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>


<style scoped>
.home {
  cursor: pointer;

  text-decoration: underline;
}
.home:hover {
  color: #0000cd;
  font-size: 15px;
}

.btn {
  display: inline-block;
  color: #fff;
  text-decoration: none;
  padding: 1rem 2rem;
  border: #fff 1px solid;
  margin-top: 40px;
  opacity: 0;
  animation-name: btn;
  animation-duration: 5s;
  animation-delay: 0s;
  animation-fill-mode: forwards;

  transition-property: transform;
  transition-duration: 0.5s;
}

.btn:hover {
  transform: scale(1.1, 1.1);
}

@keyframes btn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#form {
  position: relative;
  -webkit-animation: mymove 1s; /* Safari 4.0 - 8.0 */
  animation: mymove 1s;
}

/* Safari 4.0 - 8.0 */
@-webkit-keyframes mymove {
  0% {
    top: -1000px;
    left: 0px;
  }
  50% {
    top: 50px;
    left: 0px;
  }
  100% {
    top: 0px;
    left: 0px;
  }
}

/* Standard syntax */
@keyframes mymove {
  0% {
    top: -1000px;
    left: 0px;
  }
  50% {
    top: 50px;
    left: 0px;
  }
  100% {
    top: 0px;
    left: 0px;
  }
}
</style>
