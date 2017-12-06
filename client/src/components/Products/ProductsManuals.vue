<template>

    <panel title="Manuals">
    <v-data-table
    :headers="headers"
    :pagination.sync ="pagination"
    :items="manuals">

    <template slot = "items" slot-scope = "props">
    <td class="text-xs-right">
    {{props.item.companyName}}
    </td>

    <td class="text-xs-right">
    {{props.item.model}}
    </td>
    </template>
    </v-data-table>
    </panel>
</template>

<script>
import {mapState} from 'vuex'
import ManualsService from '@/services/ManualsService'
    export  default {
        data () {
            return {
                headers: [
                    {
                        text:'Name',
                        value: 'companyName'
                    },
                    {
                        text:'Model',
                        value:'model'
                    }
                ],
                pagination: {
                    sortBy: 'date',
                    descending: true
                },
                manuals: []
            }
        },
        computed: {
            ...mapState([
                'isUserLoggedin'
            ])
        },
        async mounted () {
            if(this.isUserLoggedin){
                this.manuals = (await ManualsService.index({
                    userId: this.$store.state.user.id
                }))
            }
        }
        
    }
</script>

<style scoped>
    
</style>