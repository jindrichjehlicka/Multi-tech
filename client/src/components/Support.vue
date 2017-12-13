<template>
    
    <v-layout justify-center> 
        <v-flex xs12 md8>
       
        <panel title="Products Metadata" >
     <v-form  ref="form" >
            <v-text-field
            type="text"
            v-model="name"
              label=" Name"
                   
              ></v-text-field>

                <v-text-field
            type="text"
            v-model="company"
              label=" Company Name"
                    
              ></v-text-field>   

              <v-text-field
            type="text"
            v-model="email"
              label=" Email"
                   
              ></v-text-field>   

              <v-text-field
            type="text"
            v-model="phone"
              label="Phone Number"
                    
              ></v-text-field>

              
              <v-text-field
            type="text"
            v-model="message"
              label="Message"
                  multi-line
              ></v-text-field>
                
                
               </v-form>
            </panel>


       

            

            <v-btn
             dark class = "green darken-2" 
             @click="send">Send
            </v-btn>

        
    
        </v-flex>

    </v-layout>

</template>

<script>
import EmailService from '@/services/EmailService'
    export  default{
           data() {
    return {
      name: '',
      company: '',
      email:'',
      phone:'',
      message: ''
    };
  },
 
  methods: {
    send() {
      if(this.email != ''){
           EmailService.post({
        name :this.name,
        company : this.company,
        phone : this.phone,
        message: this.message
     }) 
      }
  
    },
  },
    }
</script>

<style scoped>
   
</style>