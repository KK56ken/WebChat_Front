<template>
    <div>
        <v-app-bar
        color="deep-purple accent-4"
        dark
        >
            <v-app-bar-nav-icon @click="showDrawer()"></v-app-bar-nav-icon>

            <v-toolbar-title>ChatWeb</v-toolbar-title>

            <v-spacer></v-spacer>

            <!-- <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn> -->
        </v-app-bar>
    </div>
</template>
<script>
export default {
    data:() =>({
        drawer: false,
        group: null
    }),
    methods:{
        showDrawer(){
            this.drawer = !this.drawer;
            this.$store.commit("headerNav", this.drawer);
        }
    }
}
</script>