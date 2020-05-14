<template>
    <v-container style="padding: 0">
        <ul class="responsibilities">
            <li v-for="responsibility in team.responsibilities" v-bind:key="responsibility">
                {{ responsibility }}
            </li>
        </ul>
    </v-container>
</template>
<style scoped>

    /*.responsibilities li {*/
    /*    display: list-item;*/
    /*}*/
</style>
<script>
    export default {
        name: 'Responsibility',
        props: {
            team: {}
        }
    }
</script>