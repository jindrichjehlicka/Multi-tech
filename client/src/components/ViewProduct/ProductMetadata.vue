<template>

  <panel title="Product information" class="mb-5">

    <img class="product-logo" :src="product.companyLogo" />
    <div class="product-name ">
      {{product.id}}
    </div>
    <!-- <iframe :src="product.url " ></iframe> -->
    <div class="product-name ">
      {{product.companyName}}
    </div>
    <div>{{product.url}}</div>

    <div class="product-model">
      {{product.model}}
    </div>
    <br/>
    <div class="product-description">
      {{product.description}}
    </div>

    <br/>

    <v-btn center right dark class="indigo darken-3 " :to="{
                    name: 'product-edit',
                     params() {
                       return{
                          productID: product.id
                       }
                       }
                       }">
      <v-icon>fa-pencil-square-o</v-icon>&nbsp Edit
    </v-btn>

    <div class="product-url ">
      <a :href="product.url" target="_blank">
        <v-btn large dark right class="indigo darken-3 ml-4">
          <v-icon left> fa-paperclip</v-icon> Download manual</v-btn>
      </a>
    </div>
    <v-divider class="mt-2"></v-divider>
    <v-layout row justify-center>
      <v-flex xs7 offset-xs1>

        <v-form v-model="valid" ref="form" lazy-validation>
          <v-text-field label="Add product to the user by user ID" required :rules="[v => !!v || 'User ID is required']" v-model.number="user.id" type="number"></v-text-field>
        </v-form>

      </v-flex>
      <v-flex xs5>
        <v-btn center right dark class="green mt-3" @click="addManual">
          Add to user
        </v-btn>
      </v-flex>

      <v-snackbar :timeout="timeout" :color="color" :multi-line="mode === 'multi-line'" :vertical="mode === 'vertical'" v-model="snackbar">
        {{ text }}
        <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
      </v-snackbar>
    </v-layout>

  </panel>

</template>

<script>
import { mapState } from "vuex";
import ManualsService from "@/services/ManualsService";

export default {
  props: ["product"],
  data() {
    return {
      manual: null,
      user: {
        id: null,
        email: null
      },
      error: null,
      snackbar: false,
      color: "green",
      mode: "",
      timeout: 5000,
      text: "Product has been added to the user",
      valid: true
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn"])
  },

  // watch: {
  //   async product() {
  //     if (!this.isUserLoggedIn) {
  //       return;
  //     }
  //     try {
  //       this.manual = (await ManualsService.index({
  //         productId: this.product.id,
  //         userId: this.$store.state.user.id
  //       })).data;
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // },

  methods: {
    async addManual() {
      this.snackbar = false;
      if (!this.$refs.form.validate()) {
        return;
      }
      try {
        if (this.$refs.form.validate()) {
          this.manual = (await ManualsService.post({
            productId: this.product.id,
            userId: this.user.id
          })).data;
          this.$refs.form.reset();
          this.snackbar = true;
        }
      } catch (err) {
        console.log(err);
      }
    }
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
  font-size: 35px;
  color: black;
}

.product-model {
  font-size: 24px;
  color: black;
}
.product-logo {
  width: 40%;
  margin: 0 auto;
}
.product-description {
  font-size: 18px;
  color: black;
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