/* eslint-disable */
<template>
  <v-layout justify-center>
    <v-flex >
     
      <panel title="Users List">
   <v-text-field
        append-icon="search"
        label="Search"
        single-line
        hide-details
        v-model="search"
      ></v-text-field>
        <v-data-table v-bind:headers="headers" :pagination.sync="pagination" v-bind:items="users"  v-bind:search="search">

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
      users: [],
      search: '',
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
