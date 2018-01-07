<template>
    <div>

        <v-layout justify-center>
            <v-flex xs12 sm6 >
                <user-metadata :user="user" />

            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import UserMetadata from "@/components/ViewUser/UserMetadata";
import UsersService from "@/services/UsersService";

export default {
  data() {
    return {
      user: {}
    };
  },
 
  components: {
    UserMetadata
  }
};
</script>

<style scoped>

</style>