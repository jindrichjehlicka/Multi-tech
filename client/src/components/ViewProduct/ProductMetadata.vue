<template>
     <panel title = "Product information" class="mt-5">
           
        <img class="product-logo" :src="product.companyLogo"/>
            <div class="product-name " >
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
          
              <v-btn
              center
              right
                dark 
                class = "indigo darken-3 " 
                  @click="navigateTo({
                    name: 'product-edit',
                     params: {
                       productId: product.id
                       }
                       })"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>&nbsp
                      Edit
                </v-btn>
              
                <!-- TODO -->
                 <div class="product-url ">
              <a :href="product.url" target="_blank"><v-btn
              dark 
              right
                class = "indigo darken-3 ml-4" 
              ><i class="fa fa-download" aria-hidden="true"></i>&nbsp Download manual</v-btn></a>
              </div>
            
     
              
            

             
             
            
        
        </panel>
</template>

<script>
import Panel from '@/components/Panel'

    export  default {
        
        props: [
            'product'
        ],
        methods: {
          navigateTo (route){
            this.$router.push(route)
          },
       
        manualLink(){
          res.$route.redirect(product.url)
        }
          
    
        },
        components:{
            Panel
        }
            
       }
</script>

<style scoped>
        .product{
  padding:30px;
  height: 300px;
  overflow: hidden;
}

.product-name{
  font-size:35px;
  color:black;
}

.product-model{
font-size:24px;
color:black;
}
.product-logo{
  width:60%;
  margin: 0 auto;
}
.product-description{
font-size:18px;
color:black;
}
.product-url{
font-size:15px;
color:black;
}

a {
  color: blue;
  text-decoration: none; /* no underline */
}
</style>