/* eslint-disable */
<template>
<v-container fluid grid-list-md > 
  <v-layout column justify-center>

    <v-flex xs12 md4 
    >

      <v-card v-for="manual in itemsSearched" class="manual" :key="manual.id">
        <v-card-media
        class="product-logo mt-4" 
          :src="manual.Product.companyLogo"
          height="150px"
        >
         <v-container fluid fill-height>
          <v-layout justify-center align-left>
            <v-flex xs12 sm4>
              <img   :src="manual.Product.companyLogo" alt="logo">
            </v-flex>
          </v-layout>
        </v-container>
        </v-card-media>
        <v-card-title primary-title>
          
            <div class="headline">{{manual.Product.companyName}}</div>
          
        </v-card-title>    
        <v-card-title primary-title>          
            <div class="headline">{{manual.Product.model}}</div>
          
        </v-card-title>
        <v-card-actions>
         <a :href="manual.Product.url" target="_blank">
              <v-btn light center class="grey lighten-2 mt-4">
                <v-icon left> bookmark</v-icon> Download manual</v-btn>
            </a>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
            {{manual.Product.description}}
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
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
      manuals: [],
      searchText: ""
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn"]),
    itemsSearched: function() {
      var self = this;
      if (this.searchText == "") {
        return this.manuals; }
      return this.manuals.filter(function(manual) {
        return (
          manual.Product.companyName
            .toLowerCase()
            .indexOf(self.searchText.toLowerCase().trim()) >= 0 ||
          manual.Product.model
            .toLowerCase()
            .indexOf(self.searchText.toLowerCase().trim()) >= 0 );
      }); } },
  async mounted() {
    try {
      if (this.isUserLoggedIn) {
        this.manuals = (await ManualsService.index()).data;
        localStorage.setItem("manuals", JSON.stringify(this.manuals)); }
    } catch (err) {
      this.manuals = JSON.parse(localStorage.getItem("manuals"));
      console.log(err);}
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
  width: 50%;
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
