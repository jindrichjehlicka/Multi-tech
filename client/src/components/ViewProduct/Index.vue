<template>
    <div>

        <v-layout row justify-center>
            <v-flex xs12 sm6>
                <product-metadata :product="product" />
                <br>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import ProductMetadata from "@/components/ViewProduct/ProductMetadata";
import ProductsService from "@/services/ProductsService";

export default {
  data() {
    return {
      product: {}
    };
  },
  async mounted() {
    const productId = this.$store.state.route.params.productId;
    this.product = (await ProductsService.show(productId)).data;
  },
  components: {
    ProductMetadata
  }
};
</script>

<style scoped>
.product {
  padding: 30px;
  height: 300px;
  overflow: hidden;
}

.product-name {
  font-size: 30px;
}

.product-model {
  font-size: 24px;
}
.product-logo {
  width: 60%;
  margin: 0 auto;
}
</style>