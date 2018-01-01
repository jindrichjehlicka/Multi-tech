<template>
  <v-layout>
    <v-flex xs12>

      <panel title="All Owned products" class="mb-5">
           <v-text-field
        append-icon="search"
        label="Search"
        single-line
       
        v-model.trim="search"
      ></v-text-field>
        <!-- <v-text-field name="input-1" label="Search by name or model" id="testing" v-model="searchText"></v-text-field> -->
        <v-data-table 
        v-bind:headers="headers" 
        :pagination.sync="pagination" 
        v-bind:items="manuals"
        v-bind:search="search">

          <template slot="items" slot-scope="props">
            <td class="text-xs-right ">
              {{props.item.id}}
            </td>
            <td class="text-xs-right">
              {{props.item.Product.companyName}}
            </td>
            <td class="text-xs-right">
              {{props.item.Product.model}}
            </td>
             <td class="text-xs-right">
              {{props.item.User.email}}
            </td>
           

          </template>
        </v-data-table>
        <!-- 
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
        
        </v-flex>
       
      </v-layout>
      <v-divider class="grey mt-5"></v-divider>
    </div> -->
      </panel>

    </v-flex>

  </v-layout>

 
</template>

<script>
import { mapState } from "vuex";
import ManualsService from "@/services/ManualsService";
export default {
  data() {
    return {
      search:'',
       headers: [
        {
          text: "ID",
          value: "id"
        },
        {
          text: "Company",
          value: "Product.companyName"
        },
        {
          text: "Model",
          value: "Product.model"
        },
         {
          text: "Model",
          value: "User.email"
        }
      ],
      pagination: {
        sortBy: "id",
        descending: false
      },
      manuals: [],
      
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn"]),
    // itemsSearched: function() {
    //   var self = this;
    //   if (this.searchText == "") {
    //     return this.manuals;
    //   }
    //   return this.manuals.filter(function(manual) {
    //     return (
    //       manual.Product.companyName
    //         .toLowerCase()
    //         .indexOf(self.searchText.toLowerCase().trim()) >= 0 ||
    //       manual.Product.model
    //         .toLowerCase()
    //         .indexOf(self.searchText.toLowerCase().trim()) >= 0
    //     );
    //   });
    // }
  },

  async mounted() {
   
      this.manuals = (await ManualsService.getall()).data;
     
    
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