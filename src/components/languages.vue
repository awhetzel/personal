<template>
    <v-container id="languages">
        <v-row>

            <v-col class="" xs="12" sm="12" md="4">
                <h2 id="title"> Languages </h2>
            </v-col>

            <v-col class="service-names " xs="12" sm="12" md="4">
                <p> Javascript</p>
                <p> C#</p>
                <p> Java </p>
            </v-col>

            <v-col class="service-names " xs="12" sm="12" md="4">
                <p>C</p>
                <p> Python</p>
                <p> Apex </p>
            </v-col>

        </v-row>

        <v-row class="extra-rows">

            <v-col class="" xs="12" sm="12" md="4">
                <h2 id="title"> Libraries </h2>
            </v-col>

            <div v-for='(chunk, index) in libraryLogoChunks' :key='index'>
                <v-col v-for='logo in chunk' :key='logo.path' sm="12" md="40">
                    <v-tooltip left>
                        <template v-slot:activator="{ on }">
                            <v-img :src=image_path(logo) max-width="100px" contain v-on="on" class="pl-2"> </v-img>
                        </template>
                        <span>{{ logo.toolTip }}</span>
                    </v-tooltip>
                </v-col>
            </div>
        </v-row>
    </v-container>
</template>


<script>
export default {
    name: "languages",

    computed: {
        libraryLogoChunks() {
            return this.$store.getters.libraryLogos
        },

    },

    methods: {
        image_path(logo) {
            return require(`../assets/${logo.path.toLowerCase()}`)
        }
    }
}

</script>

<style lang="scss" scoped>
$small: 300px;
$medium: 900px;

#languages {
    padding: auto;
    margin: auto;
    height: auto;
    background-color: white;

    #title {
        //    width:100vw;
        text-transform: uppercase;
        font-weight: bold;
        color: var(--accent-color);
        padding-top: 15px;

    }

    @media screen and (min-width:$small) {
        padding: 10%;

        #title {
            width: 100vw;
        }
    }

    @media screen and (min-width:$medium) {
        padding-block: 10%;
        padding-left: 15%;

    }

    .service-names {

        margin-inline: 0px;

        p {
            font-family: var(--secondary-font);
            font-size: 3em;
            color: var(--main-bg-color);
            transition: font-size 0.3s ease-in-out;
        }

        p:hover {
            color: var(--gray);
            font-size: 3.3em;
            font-weight: medium;

        }
    }

    .extra-rows {
        margin-top: 80px;
    }

}
</style>