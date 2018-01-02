<template>
  <div>
    <panel title="User information" class="">

      <v-flex>
         <div class="user-email subheading">
         ID: {{user.id}}
        </div>
        <div class="user-email subheading">
          Email : {{user.email}}
        </div>

        <div v-if="user.mine === ''" class="user-mine subheading">
         Mine Name :  Not defined
        </div>
        <div v-else class="user-mine subheading">
         Mine Name : {{user.mine}}
        </div>

        <div v-if="user.admin === 0" class="user-email  subheading" id="user-email-big">
          Customer account
        </div>
        <div v-else-if="user.admin === 1" class="user-email  subheading" id="user-email-big">
          Admin account
        </div>
        <div v-else>
          Account type has not been specified
        </div>

        <div class="user-createdAt subheading">
          {{user.createdAt}}

        </div>

        <br/>

    
      </v-flex>
    </panel>

    <panel title="Edit User" class="mt-5 ml-2">
      <v-flex>
        <v-text-field label="User Email" required :rules="[required]" v-model="user.email"></v-text-field>

        <v-text-field label="Mine name (optional)" v-model="user.mine"></v-text-field>
        <!-- <v-text-field label="Password" v-model="user.password"></v-text-field> -->
          <v-select
              v-bind:items="items"
              v-model="user.admin"
              label="Account type"
              single-line
           
            ></v-select>
        <!-- <v-text-field label="Admin(0-Customer,1-Admin)" required :rules="[required]" v-model="user.admin"></v-text-field> -->

        <v-alert class="ml-4" :value="error" transition="scale-transition" error>
          {{error}}
        </v-alert>

        <v-btn dark class="indigo darken-3 mt-3" @click="save">Save User
        </v-btn>

        <!-- <v-btn class="green mt-3" dark>

          Make admin
        </v-btn> -->
      </v-flex>
    </panel>

  </div>
</template>

<script>
import UsersService from "@/services/UsersService";

export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
        mine: null,
        admin: null
      },
      error: null,
      required: value => !!value || "Required.",
     
       items: [
          { text: 'Admin account',value:1 },
          { text: 'Customer account',value:0 },
        
        ],
      
    }
  },
  methods: {
    async save() {
      const userId = this.$store.state.route.params.userId;
      try {
        await UsersService.put(this.user);
        this.$router.push({
          name: "user",
          params: {
            userId: userId
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  async mounted() {
    try {
      const userId = this.$store.state.route.params.userId;
      this.user = (await UsersService.show(userId)).data;
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style scoped>
a {
  color: blue;
  text-decoration: none; /* no underline */
}
</style>