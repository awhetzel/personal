<template>
    <div id="about">
        <v-row>
            <v-col class="col-xs-12">
                <h2> ABOUT ME</h2>
                <p> Throughout my career journey, I've been fortunate to engage in several projects across various
                    domains, each presenting unique challenges and opportunities for growth. Working alongside and
                    mentoring exceptional software engineers has been a privilege, allowing me to contribute to the
                    development of outstanding products.</p>
                <p> From architecting scalable web applications to designing resilient backend systems and crafting
                    seamless user interfaces, my dedication to delivering top-tier software solutions has remained
                    unwavering. I am driven by a relentless pursuit of excellence, constantly striving to surpass
                    expectations with every project I undertake.</p>
                <p> Beyond my technical proficiency, I approach software engineering with a blend of commitment and
                    collaboration. Drawing from my experiences in leadership roles, I deeply value teamwork, humility,
                    and cultivating an enjoyable work environment. I derive immense satisfaction from tackling complex
                    problems and empowering my colleagues to do the same.
                </p>
                <p>Outside the realm of software, I find joy in restoring my 1968 Ford, exploring nature through
                    hikes with my family, and immersing myself in video games.
                </p>
            </v-col>
            <v-col class="col-xs-12 portrait">
                <v-img src="../assets/portrait.jpg" max-width="500px" contain>
                </v-img>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'about'
}
</script>


<style lang="scss" scoped>
#about {
    padding-left: 5%;

    h2 {
        text-transform: uppercase;
        font-weight: bold;
        color: var(--accent-color);
        padding-top: 15px;
    }

    p {
        padding-block: 10px;
        padding-right: 10px;
        font-weight: 400;
        color: var(--gray);
        font-size: 1.3em;
    }

    .portrait{
        padding-top: 5%;
        padding-left: 2%;
    }
}
</style>