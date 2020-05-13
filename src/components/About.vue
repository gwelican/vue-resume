<template>
    <v-container style="padding-bottom: 0; padding-top: 0">
        <v-col>
            <v-row>
                <div class="skills">Skills</div>
            </v-row>
            <v-row>
                <v-divider/>
            </v-row>
            <v-row>
                <span v-for="(skills, key, index) in about.skills" v-bind:key="index">
                    <b>{{ key }}:</b> {{ skills.join(", ") }}
                    <br/>
                </span>
            </v-row>
        </v-col>
    </v-container>
</template>
<script>
    export default {
        name: 'About',
        props: {
            about: {}
        }
    }
</script>
<style scoped>

    .skills {
        font-size: x-large;
        color: #233B64;
    }

    /*.about i {*/
    /*    color: #1DBFAF;*/
    /*}*/

</style>