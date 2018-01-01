<template>
<v-layout>
<v-flex xs6>

  <panel title="My products" class="mb-5">
    <v-text-field name="input-1" label="Search by name or model" id="testing" v-model="searchText"></v-text-field>

    <div v-for="manual in itemsSearched" class="manual" :key="manual.id">

      <v-layout>
        <v-flex xs12 class="mt-4">
          <div class="product-name">
            {{manual.Product.companyName}}
          </div>
          <div class="product-model">
            {{manual.Product.model}}
          </div>
          <div class="product-model">
            {{manual.id}}
          </div>
          <div class="product-model">
            {{manual.User.email}}
          </div>
          <div class="product-url ">
            <a :href="manual.Product.url" target="_blank">
              <v-btn light center class="grey lighten-2 mt-4">
                <v-icon left> fa-paperclip</v-icon> Download manual</v-btn>
            </a>
          </div>
        </v-flex>
       
      </v-layout>
      <v-divider class="grey mt-5"></v-divider>
    </div>
  </panel>

</v-flex>

</v-layout>


  </panel>
</template>

<script>
import { mapState } from "vuex";
import ManualsService from "@/services/ManualsService";
export default {
  data() {
    return { 
      manuals: [],
      searchText: ""
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn"]),
    itemsSearched: function() {
      var self = this;
      if (this.searchText == "") {
        return this.manuals;
      }
      return this.manuals.filter(function(manual) {
        return (
          manual.Product.companyName
            .toLowerCase()
            .indexOf(self.searchText.toLowerCase().trim()) >= 0 ||
          manual.Product.model
            .toLowerCase()
            .indexOf(self.searchText.toLowerCase().trim()) >= 0
        );
      });
    }
  },

  async mounted() {
    if (this.isUserLoggedIn) {
      this.manuals = (await ManualsService.getall()).data;
    // userId: this.$store.state.user.id is no longer neccesary, now it gets id from passport auth
      
    }
  }

  //  watch: {
  //     '$route.query.search':  {
  //       immediate: true,
  //       async handler (value) {
  //          if(this.isUserLoggedIn){
  //                 this.manuals = (await ManualsService.index({
  //                     userId: this.$store.state.user.id
  //                 })).data
  //             }
  //       }
  //     }
  //   },
};
</script>

<style scoped>
.product {
  padding: 30px;
  height: 230px;
  overflow: hidden;
}

.product-name {
  font-size: 30px;
  font-weight: 500;
}

.product-model {
  font-size: 25px;
  font-weight: 400;
}
.product-logo {
  width: 70%;
  margin: 0 auto;
}
.product-url {
  font-size: 15px;
  color: black;
}

a {
  color: blue;
  text-decoration: none; /* no underline */
}
</style>