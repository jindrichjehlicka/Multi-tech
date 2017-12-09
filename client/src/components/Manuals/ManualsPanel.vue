<template>

<panel title="My products" class="mb-5">
 <v-text-field
              name="input-1"
              label="Search by name or model"
              id="testing"
              v-model="searchText"
            ></v-text-field>

    <div 
      v-for="manual in itemsSearched"
      class="manual"
      :key="manual.id"
      >

      <v-layout>
        <v-flex xs12 class="mt-4">
            <div class="product-name"
            >
              {{manual.Product.companyName}}
              </div>
              <div class="product-model">
              {{manual.Product.model}}
              </div>
              <div class="product-url ">
              <a :href="manual.Product.url" target="_blank"><v-btn
              light
              center
                class ="grey lighten-2 mt-4" 
              ><v-icon left> fa-paperclip</v-icon> Download manual</v-btn></a>
              </div>
</v-flex>
 <v-flex sm12 hidden-xs-only>
            <img class="product-logo mt-4" :src="manual.Product.companyLogo"/>
            
          </v-flex>         
            </v-layout>
<v-divider class="grey mt-5"></v-divider>
      </div>
      </panel>

    
    <!--<v-data-table
    :headers="headers"
    :pagination.sync ="pagination"
    :items="manuals">

    <template slot = "items" slot-scope = "props">
    <td class="text-xs-right">
    {{props.item.companyName}}
    </td>

    <td class="text-xs-right">
    {{props.item.model}}
    </td>
    </template>
    </v-data-table>-->
    </panel>
</template>

<script>
import {mapState} from 'vuex'
import ManualsService from '@/services/ManualsService'
    export  default {
        data () {
            return {
                // headers: [
                //     {
                //         text:'Name',
                //         value: 'companyName'
                //     },
                //     {
                //         text:'Model',
                //         value:'model'
                //     }
                // ],
                // pagination: {
                //     sortBy: 'date',
                //     descending: true
                // },
                manuals: [],
                searchText: ''
            }
        },
        computed: {
            ...mapState([
                'isUserLoggedIn'
            ]),
               itemsSearched : function(){
        var self = this;
        if( this.searchText == ''){
          return this.manuals;
        }
        return this.manuals.filter(function(manual){
          return manual.Product.companyName.toLowerCase().indexOf(self.searchText.toLowerCase().trim()) >= 0 || 
          manual.Product.model.toLowerCase().indexOf(self.searchText.toLowerCase().trim()) >= 0;
        
        });
      }
        },
        
        async mounted () {
            if(this.isUserLoggedIn){
                this.manuals = (await ManualsService.index({
                    userId: this.$store.state.user.id
                })).data
            }
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
    }
</script>

<style scoped>
.product{
  padding:30px;
  height: 230px;
  overflow: hidden;
}

.product-name{
  font-size:30px;
  font-weight: 500;
}

.product-model{
font-size:25px;
font-weight: 400;
}
    .product-logo{
  width:70%;
  margin: 0 auto;
}
.product-url{
font-size:15px;
color:black;
}

a {
  color: blue;
  text-decoration: none; /* no underline */
}
</style>