/* eslint-disable */
<template>
  <v-layout row justify-center v-bind="binding">

    <v-flex xs10 md8>

      <manuals-panel class=" pb-5" id="panel" />
    </v-flex>

  </v-layout>

</template>

<script>
import { mapState } from "vuex";
import ManualsPanel from "./ManualsPanel";
import ManualsService from "@/services/ManualsService";

export default {
  components: {
    ManualsPanel
  },
  data() {
    return {
      manuals: null
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn"]),

    binding() {
      const binding = {};

      if (this.$vuetify.breakpoint.mdAndDown) binding.column = true;

      return binding;
    }
  },
  async mounted() {
    if (this.isUserLoggedIn) {
      this.manuals = (await ManualsService.index({
        userId: this.$store.state.user.id
      })).data;
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
