
<template>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700%7CMaterial+Icons' rel="stylesheet">
        <link href="https://unpkg.com/vuetify/dist/vuetify.min.css" rel="stylesheet">
        <link href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet'>
        </head>
        <body>
 
  <div id="app">
 <v-app>
  
  <page-header />

     <main>
       <v-container fluid>
       
         <router-view></router-view>
       </v-container>
     </main>
     <page-footer/>
    </v-app>  
     </div>
     
     </body>
     </html>
</template>

<script>
import PageHeader from '@/components/Header.vue'
import PageFooter from '@/components/Footer.vue'


export default {
  name: 'app',
  components:{
    PageHeader,
    PageFooter
  }
};
</script>

<style>

#app {
  font-family: 'Open sans';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
