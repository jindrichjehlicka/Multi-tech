/* eslint-disable */

<template>
  <div>

    <v-card flat class="mt-5 mb-3" id="form">
      <v-card-media class="card-1">
        <v-container fluid fill-height>
          <v-layout justify-center align-left>
            <v-flex xs12 sm4>
              <img src="../images/mts.png" alt="logo">
            </v-flex>
          </v-layout>
        </v-container>

      </v-card-media>

    </v-card>
    <v-layout justify-center d-inline-flex>
      <v-flex xs12 sm8>
        <p id="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis nibh, ullamcorper ut congue vel, pulvinar eget tortor. Ut rhoncus tortor sit amet hendrerit cursus. Etiam fermentum accumsan ligula, non finibus quam placerat non. Pellentesque ante sapien, porta id quam at, tincidunt semper lectus. Aenean commodo nisi leo, ac gravida erat ullamcorper ut. Vestibulum tortor augue, ullamcorper et turpis in, congue sodales dui. Nullam auctor congue augue, eu scelerisque velit. Mauris a sapien in orci convallis ornare. Aliquam sed ultricies orci. Integer sem massa, mattis quis luctus vitae, pellentesque vel ligula.
        </p>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.card-1 {
  background-color: #fafafa;
}

#form {
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

#text {
  line-height: 1.5;
  font-size: 20px;
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
