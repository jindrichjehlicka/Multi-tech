<template>
<div>
<page-header/>
    <v-layout >
        <v-flex xs12 sm6 offset-sm3>
            <user-metadata :user = "user" />
     
        </v-flex>
    </v-layout>
    </div>
</template>

<script>
import UserMetadata from '@/components/ViewUser/UserMetadata'
import UsersService from '@/services/UsersService'


    export  default {
        data(){
            return{
                user:{}
            }
        },
        async mounted () {
            const userId = this.$store.state.route.params.userId
            this.user = (await UsersService.show(userId)).data
        },
        components:{
              
            UserMetadata
        }
    }
</script>

<style scoped>


</style>