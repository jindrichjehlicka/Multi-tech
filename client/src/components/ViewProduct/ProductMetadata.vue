<template>
  <panel title="Product information" class="mb-5">

    <img class="product-logo" :src="product.companyLogo" />
    <div class="product-name ">
      {{product.id}}
    </div>
    <div class="product-name ">
      {{product.companyName}}
    </div>

    <div class="product-model">
      {{product.model}}
    </div>
    <br/>
    <div class="product-description">
      {{product.description}}
    </div>

    <br/>

    <v-layout row>
      <v-flex xs5 offset-xs2>
        <v-text-field label="User ID" required :rules="[required]" v-model.number="user.id" type="number"></v-text-field>
      </v-flex>
      <v-flex xs6>
        <v-btn v-if="isUserLoggedIn && this.$store.state.user.admin === 1   " center right dark class="indigo darken-3 mt-3" @click="addManual">
          Add to user
        </v-btn>
      </v-flex>
    </v-layout>

    <v-btn v-if="isUserLoggedIn && this.$store.state.user.admin === 1 " center right dark class="indigo darken-3 " :to="{
                    name: 'product-edit',
                     params() {
                       return{
                          productID: product.id
                       }
                       }
                       }">
      <i class="fa fa-pencil-square-o" aria-hidden="true"></i>&nbsp Edit
    </v-btn>
    <!-- Comment here is ok 
                  <v-btn
                  v-if="isUserLoggedIn && this.$store.state.user.admin === 1    "
              center
              right
                dark 
                class = "indigo darken-3 " 
               @click="deleteManual">
                     Delete from user
                </v-btn>
              -->

    <!-- TODO -->
    <div class="product-url ">
      <a :href="product.url" target="_blank">
        <v-btn large dark right class="indigo darken-3 ml-4">
          <v-icon left> fa-paperclip</v-icon> Download manual</v-btn>
      </a>
    </div>

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
        id: null
      },
      error: null,
      required: value => !!value || "Required."
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn"])
  },

  watch: {
    async product() {
      if (!this.isUserLoggedIn) {
        return;
      }
      try {
        this.manual = (await ManualsService.index({
          productId: this.product.id,
          userId: this.$store.state.user.id
        })).data;
      } catch (err) {
        console.log(err);
      }
    }
  },

  methods: {
    async addManual() {
      this.error = null;
      const areAllFieldsFilledIn = Object.keys(this.user).every(
        key => !!this.user[key]
      );
      if (!areAllFieldsFilledIn) {
        this.error = "Please fill in all the required fields";
        return;
      }
      try {
        this.manual = (await ManualsService.post({
          productId: this.product.id,
          userId: this.user.id
        })).data;
      } catch (err) {
        console.log(err);
      }
    }

    //     async deleteManual(){
    //     try{
    //    await ManualsService.delete(this.manual.id)
    //    this.manual = null
    //  }catch(err){
    //    console.log(err)
    //  }
    //   },
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
  width: 60%;
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