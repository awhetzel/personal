<template>
    <v-footer ref='footer' paddless default class='footer' id='footer'>
       
        <v-container class="social-icons" >
            <v-btn icon  color='#f1f1f1' class='d-inline-block ma-2 pa-2 icon'
               tile  v-for='i in socialmedia ' :key='i.icon' 
                :href='i.src' target="_blank" elevation='10'
                large
                >
                <v-icon >
                    {{i.icon}}
                </v-icon>
                
            </v-btn>
            <v-btn icon @click='scrolltop' color='white' class='d-inline-block ma-2 pa-2  icon up' elevation='10' tile>
                <v-icon>
                    mdi-chevron-double-up
                </v-icon>
            </v-btn>
        </v-container>
    </v-footer>
</template>
<script>
    export default { 
        name: 'myFooter',components: {

        },
        data(){
            return{
                
            }
            
        },
        computed:{
            socialmedia(){
                return this.$store.state.Sociallinks
            },
            year(){
                var d = new Date();
                return  d.getFullYear();
            }
        },
        methods:{
            scrolltop(){
                this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 50)
      }, 20)
            }

        }
    }    
</script>
<style scoped>

#footer {
    background-color:var(--main-bg-color);
}

.social-icons {
    display: block;
    
    text-align: left;
    padding:auto;
}
.icon {
    vertical-align: middle;
    background-color:var(--gray);
    margin: auto;
    padding: auto;
    height: 40x;
}

.up{
    height:44px;
    margin: auto;
    margin-top:-18px;
    
}
.copyright{
    margin-top:5px;
    font-size:16px;
    color:var(--gray);
    font-weight:bold;
    text-align: left;
}      
.copyright>span{
    color :var(--highlight-color);
}

.credit{
    padding-block: 10px;
    color: var(--gray);
    font-family:  var(--secondary-font);
    font-weight: medium ;
}
</style>
