<template>

       
    <panel title="Search" >
    <v-text-field
              label="Search by product name or model"
              v-model="search"
            ></v-text-field>
    </panel>
    
    
</template>

<script>
    export  default {
        data () {
            return {
                search:''
            }
        },
        watch:{
            //changes url dynamically
            search (value){
                const route = {
                    name: 'products'
                }
                if (this.search !== '') {
                    route.query = {
                        search: this.search
                    }
                }
                this.$router.push(route)
            },
            //changes to value from url
            '$route.query.search':{
                immediate: true,
                handler (value) {
                    this.search = value
                }
            }
        }
    }
</script>

<style scoped>
 
</style>