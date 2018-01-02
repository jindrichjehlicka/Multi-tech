<template>
  <v-layout justify-center>
    <v-flex xs12 md8>

      <panel title="Owned products" class="mb-5">
        

<v-layout>
  <v-flex xs5>
    <v-text-field append-icon="search" label="Search" single-line v-model.trim="search"></v-text-field></v-flex>
  <v-flex xs5 class="ml-5">
  <v-text-field label="Delete product from user by ID" v-model.number="manual.id" type="number"></v-text-field>
  </v-flex>
  <v-flex xs2 class="ml-3">
    <v-btn center right dark class="red mt-3" @click="deleteManual">
              
              Delete
            </v-btn>
  </v-flex>
  </v-layout>


          
        <v-data-table v-bind:headers="headers" :pagination.sync="pagination" v-bind:items="manuals" v-bind:search="search" > 

          <template slot="items" slot-scope="props">
            <td class="text-xs-left " >
              {{props.item.id}}
            </td>
            <td class="text-xs-left">
              {{props.item.User.email}}
            </td>
            <td class="text-xs-left">
              {{props.item.Product.companyName}}
            </td>
            <td class="text-xs-left">
              {{props.item.Product.model}}
            </td>


          </template>
        </v-data-table>

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
      search: "",
      headers: [
        {
          text: "ID",
          value: "id",
          align: "left",
          class:"subheading"
        },
        {
          text: "User",
          value: "User.email",
          align: "left"
        },
        {
          text: "Company",
          value: "Product.companyName",
          align: "left"
        },
        {
          text: "Model",
          value: "Product.model",
          align: "left",
         
        }
      ],
      pagination: {
        sortBy: "User.email",
        descending: false
      },
      manuals: [],
      manual:{
        id:null
      }
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn"])
  },
  methods: {
          async deleteManual(){
        try{
       await ManualsService.delete(this.manual.id)
       this.manual = null
      
  
     }catch(err){
       console.log(err)
     }
      },
  },
  async mounted() {
    this.manuals = (await ManualsService.getall()).data;
  },

  


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