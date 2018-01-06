<template>
 
    
      <v-container fluid grid-list-md class="mb-5">
      <v-layout>
      <v-flex xs12>  
      <panel title="My Products">
      <div >
      <v-form >
      <v-text-field name="input-1" label="Search by name or model" id="testing" v-model="searchText"></v-text-field>
     
          
        
         
     
      
       

        <v-layout row wrap  justify-center class="mb-5">
        
          <v-flex 
          xs10  md4
            v-for="manual in itemsSearched"
            :key="manual.id"
            class="mb-5 "
            id="borders"
          >
            <v-card  hidden-xs-only class="elevation-2 "> 
              <v-card-media class="product-logo hidden-sm-and-down"
                :src="manual.Product.companyLogo"                
                height="150px"              
               
              >                
              </v-card-media>
                <div class="headline " v-text="manual.Product.companyName"></div>
                <div class="headline " v-text="manual.Product.model"></div>
              <v-card-actions class="white ">
                <v-spacer></v-spacer>
                
                <a :href="manual.Product.url" target="_blank">
              <v-btn  light class="grey lighten-2 mt-4">
                <v-icon left></v-icon> Download manual</v-btn>
            </a>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
         </v-form>
      </div>
      </panel>
      </v-flex>
      </v-layout>
      </v-container>
  
</template>
<script>
import { mapState } from "vuex";
import ManualsService from "@/services/ManualsService";
export default {
  data() {
    return {
    show: false,
      manuals: [
       
      ],
      
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
   try  {
     if(this.isUserLoggedIn){
 this.manuals = (await ManualsService.index()).data;
    localStorage.setItem('manuals', JSON.stringify(this.manuals));  
     }   
   }catch(err){
     this.manuals=JSON.parse( localStorage.getItem('manuals' ) )
     console.log(err)    
   }
 }

  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product {
  padding: 30px;
  height: 230px;
  overflow: hidden;
}

.product-name {
  font-size: 30px;
}

.product-model {
  font-size: 24px;
}
.product-logo {
  width: 70%;
  margin: 0 auto;
}

#search-panel {
  position: relative;
  -webkit-animation: mymove 1s; /* Safari 4.0 - 8.0 */
  animation: mymove 1s;
}
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
  width:  70%;
  height:70% ;
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

/* Safari 4.0 - 8.0 */
@-webkit-keyframes mymove {
  0% {
    top: 0px;
    left: -1000px;
  }

  100% {
    top: 0px;
    left: 0px;
  }
}

/* Standard syntax */
@keyframes mymove {
  0% {
    top: 0px;
    left: -1000px;
  }

  100% {
    top: 0px;
    left: 0px;
  }
}

#panel {
  position: relative;
  -webkit-animation: mymove 1s; /* Safari 4.0 - 8.0 */
  animation: mymove2 1s;
}
/* Safari 4.0 - 8.0 */
@-webkit-keyframes mymove2 {
  0% {
    top: 0px;
    left: 1000px;
  }

  100% {
    top: 0px;
    left: 0px;
  }
}

/* Standard syntax */
@keyframes mymove2 {
  0% {
    top: 0px;
    left: 1000px;
  }

  100% {
    top: 0px;
    left: 0px;
  }
}
</style>
