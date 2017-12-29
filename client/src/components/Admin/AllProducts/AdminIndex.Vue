/* eslint-disable */
<template>

  <v-layout column justify-center>
    <v-flex>
      <admin-products-search-panel v-if="this.$store.state.isUserLoggedIn && this.$store.state.user.admin ===1" class="mb-5" />

      <admin-products-panel  v-if="this.$store.state.isUserLoggedIn && this.$store.state.user.admin ===1" />
     
    </v-flex>

  </v-layout>

</template>

<script>
import AdminProductsPanel from "./AdminProductsPanel";
import AdminProductsSearchPanel from "./AdminProductsSearchPanel";
import ProductsService from "@/services/ProductsService";

export default {
  components: {
    AdminProductsPanel,
    AdminProductsSearchPanel
  },
  data() {
    return {
      products: null
    };
  },
  async mounted() {
    //do a request to the backend for all the products
    this.products = (await ProductsService.index()).data;
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
</style>
