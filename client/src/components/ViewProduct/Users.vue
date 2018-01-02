/* eslint-disable */
<template>
  <v-layout justify-center>
    <v-flex >
     
      <panel title="Users List">

        <v-data-table :headers="headers" :pagination.sync="pagination" :items="users">

          <template slot="items" slot-scope="props">
            <td class="text-xs-left ">
              {{props.item.id}}

            </td>
            <td class="text-xs-left">
              {{props.item.email}}
            </td>

            

       

          </template>
        </v-data-table>
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

</style>
