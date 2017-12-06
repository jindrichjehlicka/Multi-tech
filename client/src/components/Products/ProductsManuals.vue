<template>

    <panel title="Manuals">
    <div 
      v-for="manual in manuals"
      class="manual"
      :key="manual.id"
      >

      <v-layout>
        <v-flex xs12 sm6>
            <div class="product-name">
              {{manual.companyName}}
              </div>
              <div class="product-name">
              {{manual.model}}
              </div>
</v-flex>
 <v-flex sm6 hidden-xs-only>
            <img class="product-logo mt-4" :src="manual.companyLogo"/>
            
          </v-flex>
             
               

              

          
          
        </v-layout>
<v-divider class="grey mt-5"></v-divider>
      </div>
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
                products:null
            }
        },
        computed: {
            ...mapState([
                'isUserLoggedIn'
            ])
        },
        async mounted () {
            if(this.isUserLoggedIn){
                this.manuals = (await ManualsService.index({
                    userId: this.$store.state.user.id
                })).data
            }
        },
//          watch: {
//     '$route.query.search':  {
//       immediate: true,
//       async handler (value) {
//         this.manuals = (await ManualsService.index(value)).data
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
}

.product-model{
font-size:24px;
}
    .product-logo{
  width:100%;
  margin: 0 auto;
}
</style>