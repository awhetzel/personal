import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        Sociallinks: [
            {
                icon: 'mdi-linkedin',
                src: 'https://www.linkedin.com/in/aaron-whetzel-042379115/'
            },
            {
                icon: 'mdi-github',
                src: '#'
            },
        ],
        projects: [
            {
                name: "House of Design",
                description: "Industrial Robotics, SAAS",
                role: "Software Engineer (2018 - 2022)",
                tech_stack: ["html5", "nodejs", "mongodb", "express"],
                img: 'hod.jpg',
                url: "https://thehouseofdesign.com/"
            },
            {
                name: "Medical Network Solutions ",
                description: "SASS solution for facility management and compliance",
                role: "Software Engineer (2022 - 2024)",
                tech_stack: ["Django"],
                img: "mns.jpg",
                url: null,
            },

        ],

        libraryLogos: [
           
            {
                path: 'nodejs.png',
                toolTip: 'Node.js'
            },
            {
                path: 'mongodb.png',
                toolTip: 'MongoDB'
            },
            {
                path: 'logo.png',
                toolTip: 'Vue.js'
            },
            {
                path: 'express.png',
                toolTip: 'Express.js'
            },
            {
                path: 'html5.png',
                toolTip: 'Express.js'
            },
            {
                path: 'postgresql.png',
                toolTip: 'PostgreSQL'
            },
            {
                path: 'dotnet.png',
                toolTip: '.NET'
            },
            {
                path: 'flask.png',
                toolTip: 'Flask'
            }
        ]
    },
    getters: {
        projectChunks(state) {
            return _.chunk(state.projects, 2)
        },
        libraryLogos(state){
            return _.chunk(state.libraryLogos, 2)
        }
    },
})
