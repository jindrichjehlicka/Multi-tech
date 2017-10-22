/* eslint-disable */
<template>
<div>
<page-header/>
 <v-layout column>
<v-flex xs12 sm6 offset-sm3 class="mt-5">
<div class = "white elevation-24">
<v-toolbar flat dense class class = "indigo darken-2 white--text" >
<v-toolbar-title >Support</v-toolbar-title>
</v-toolbar>

<div class = "pl-4 pr-4 pt-2 pb-2">
    <v-form v-model="valid" ref="form" lazy-validation>
   
   
    <v-select
      label="Why are you writing to us?"
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      required
    ></v-select>
   
   <v-text-field box multi-line label="Message"></v-text-field>

    <v-btn
      @click="submit"
      :disabled="!valid"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
     </div>
     </div>
</v-flex>
     </v-layout>
     </div>
</template>

<script>
 export default {
    $validates: true,
    data () {
      return {
        message:'',
       select: null,
        items: [
          'Issues with product',
          'Issues with website',
          'Feedback',
          'Others'
        ],
        
      }
    },
    methods: {
      submit () {
        this.$validator.validateAll()
      },
      clear () {
        t
       this.message ='',
        this.select = null
       
        this.$validator.clean()
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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

.card-1{
  background-color:#FAFAFA;
}

</style>
