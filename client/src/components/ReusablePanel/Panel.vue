/* eslint-disable */
<template>

    <div class="white elevation-7">
        <v-toolbar dense flat class="indigo lighten-1 white--text">
            <v-toolbar-title>{{title}} </v-toolbar-title>
            <slot name="action" />
        </v-toolbar>
        <div class="pl-4 pr-4 ">
            <slot>
                No slot content defined
            </slot>
        </div>
    </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
