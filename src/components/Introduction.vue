<template>
    <v-card flat tile>

        <v-card-title class="header-title py-2">
            <v-col>
                <v-row class="name py-2">
                    {{introduction.name}}
                </v-row>
                <v-row class="job-title header-title">
                    {{introduction.jobTitle}}
                </v-row>
            </v-col>

        </v-card-title>
        <v-card-subtitle>
            <v-row justify="center">
                <v-col class="text-no-wrap text-center">
                    <v-icon x-small>fas fa-envelope</v-icon>
                    {{introduction.email}}
                </v-col>
                <v-col class="text-no-wrap text-center">
                    <v-icon x-small>fab fa-linkedin</v-icon>
                    {{introduction.linkedin.text}}
                </v-col>
                <v-col class="text-no-wrap text-center">
                    <v-icon x-small>fab fa-github</v-icon>
                    {{introduction.github.text}}
                </v-col>
                <v-col class="text-no-wrap text-center">
                    <v-icon x-small class="fa-flip-horizontal">fas fa-phone</v-icon>
                    {{introduction.phone}}
                </v-col>
            </v-row>
            <v-divider></v-divider>
        </v-card-subtitle>
        <v-card-text style="padding-bottom: 0">
            <div class="font-italic" v-html="introduction.header"/>
        </v-card-text>
    </v-card>
</template>
<script>
    export default {
        name: 'Introduction',
        props: {
            introduction: {}
        }
    }
</script>
<style scoped>

    .job-title {
        color: #233B64;
    }

    .name {
        font-size: xx-large;
    }

    .header-title {
        font-weight: bold;
        font-size: x-large;
    }

</style>