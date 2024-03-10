<template>
    <v-container fluid class='homepage ma-0 pa-0' app>
        <navigation id='nav'></navigation>
        <banner />
        <languages />
        <about />
        <portfolio></portfolio>
        <!-- <contact></contact> -->
        <myFooter></myFooter>
    </v-container>
</template>

<script>
import banner from "../components/banner.vue"
import languages from "../components/languages.vue"
import about from "../components/about.vue"
import portfolio from '../components/portfolio.vue'
//TODO: uncomment this when backend is hooked up 
// import contact from '../components/contact.vue'
import myFooter from '../components/footer.vue'
import navigation from '../components/navigation.vue'

export default {
    name: 'homepage', components: {
        navigation,
        banner,
        languages,
        about,
        portfolio,
        // contact,
        myFooter,
    }
}

</script>

<style scoped>
#nav {
    position: fixed;
    z-index: 4;
}
</style>
