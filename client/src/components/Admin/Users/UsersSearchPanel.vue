<template>
    <v-layout>
        <v-flex xs12 sm4 offset-sm4>
            <panel title="Search">
                <v-text-field label="Search by email" v-model="search"></v-text-field>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
  data() {
    return {
      search: ""
    };
  },
  watch: {
    //changes url dynamically
    search(value) {
      const route = {
        name: "users"
      };
      if (this.search !== "") {
        route.query = {
          search: this.search
        };
      }
      this.$router.push(route);
    },
    //changes to value from url
    "$route.query.search": {
      immediate: true,
      handler(value) {
        this.search = value;
      }
    }
  }
};
</script>

<style scoped>

</style>