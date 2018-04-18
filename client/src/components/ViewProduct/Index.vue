<template>
    <div>

        <v-layout  v-bind="binding" >
          <v-flex xs8 offset-xs2 md3 offset-md1 class="mb-3">
            <users />
            </v-flex>
            <v-flex xs10 offset-xs1  md6 offset-md1 class="mb-5 ">
              
                <product-metadata :product="product" />                
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import ProductMetadata from "@/components/ViewProduct/ProductMetadata";
import Users from "@/components/ViewProduct/Users";
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
  computed: {
      binding () {
        const binding = {}

        if (this.$vuetify.breakpoint.xs) binding.column = true

        return binding
      }
    },
  components: {
    ProductMetadata,
    Users
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