/* eslint-disable */
<template>
  <v-flex xs12 sm8 offset-sm3>
    <panel title="Users">

      <v-data-table :headers="headers" :pagination.sync="pagination" :items="users">

          <template slot="items" slot-scope="props">
            <td class="text-xs-left ">
              {{props.item.id}}

            </td>
            <td class="text-xs-left">
              {{props.item.email}}

            </td>

            <td   class="text-xs-left">
              <div v-if="props.item.admin===1">Admin</div>
              <div v-if="props.item.admin===0">Customer</div>
            </td>

            <v-btn dark class="green" small :to="{
                   name: 'user',
                   params: {
                     userId: props.item.id
                   }
                 }">
              View
            </v-btn>

          </template>
        </v-data-table>

<!-- 
      <div v-for="user in users" class="user" :key="user.id">

        <v-layout>
          <v-flex xs10 hidden-md-and-up>
            <div class="user-email pt-3" id="user-email-small">
              {{user.email}}
            </div>
          </v-flex>
          <v-flex xs2 hidden-md-and-up>
            <v-btn dark small fab class="grey darken-3" :to="{
                    name: 'user',
                     params: {
                       userId: user.id
                       }
                       }">
              <span>
                <i class="fa fa-eye" aria-hidden="true"></i>&nbsp</span>

            </v-btn>

          </v-flex>

          <v-flex sm6 hidden-sm-and-down>

            <div v-if="user.admin === 0" class="user-email pt-3" id="user-email-big">
              {{user.id}}. - {{user.email}} - Customer

            </div>
            <div v-else-if="user.admin === 1" class="user-email pt-3" id="user-email-big">
              {{user.id}}. - {{user.email}} - Admin
            </div>
            <div v-else>
              Account type has not been specified
            </div>

          </v-flex>

          <v-flex sm6 hidden-sm-and-down="py-1">

            <v-btn small dark class="grey darken-3 " :to="{
                    name: 'user',
                     params: {
                       userId: user.id
                       }
                       }">
              <span>
                <i class="fa fa-eye" aria-hidden="true"></i>&nbsp</span>
              VIew
            </v-btn>

          </v-flex>

        </v-layout>

      </div> -->
    </panel>
  </v-flex>
  </v-layout>

</template>

<script>
import UsersService from "@/services/UsersService";

export default {
  data() {
    return {
          headers: [
        {
          text: "User ID",
          value: "id",
          align:"left"
        },
        {
          text: "Email",
          value: "email",
          align:"left"
        },
        {
          text: "Account type",
          value: "admin",
          align:"left"
        }
      ],
      pagination: {
        sortBy: "id",
        descending: false
      },
      users: []
    };
  },
  watch: {
    "$route.query.search": {
      immediate: true,
      async handler(value) {
        this.users = (await UsersService.index(value)).data;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#user-email-big {
  font-size: 18px;
  color: black;
}

#user-email-small {
  font-size: 13px;
  color: black;
}
</style>
