<template>
    <v-row>
        <v-col cols="12" class="pb-0">
                <!-- elevation="16" -->
            <v-card
                max-width="auto"
                style='height: 100vh'
                class="mx-auto"
            >
                <v-virtual-scroll
                    :bench="benched"
                    :items="$store.getters.messages"
                    height="800"
                    item-height="80"
                    id="test"
                >
                    <!-- v-chat-scroll -->
                    <template v-slot:default="{ item }">
                        <v-list-item :key="item.message" class="pt-0 pl-0 pr-0">
                            <v-list-item-avatar class="ma-5">
                                <v-img :src="item.avatar"></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title>{{ item.sendUserName }}</v-list-item-title>
                                <v-list-item-subtitle class="test">{{ item.message }}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                </v-virtual-scroll>
                <v-row>
                    <v-col cols="10" class="pr-0 pb-0">
                        <v-textarea
                            v-model="text"
                            outlined
                            label="メッセージ入力"
                            solo
                            height=130
                            row-height="1"
                            hide-details
                        ></v-textarea>
                    </v-col>
                    <v-col cols="2" class="pl-0">
                        <v-btn @click="pushMessage(text)" style="width:100%; height:130px" color="primary" dark>
                            送信
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>
<script>
// import {debounce} from 'lodash'
export default {
    data:() =>  ({
        text:"",
        selectedItem:0,
        benched:0,
        scrollHeight:0
    }),
    mounted(){
        var container = this.$el.getElementsByClassName('v-virtual-scroll__container');
        this.scrollHeight = container[0].style.height.replace(/[^0-9]/g, '');
        var container2 = this.$el.querySelector('#test');
        // console.log(container2.scrollTop)
        // console.log(Number(this.scrollHeight));
        container2.scrollTop = Number(this.scrollHeight);
        // console.log(container2.scrollTop)
    },
    computed: {
        userMessages(){
            // console.log(this.$store.getters.messages)
            return this.$store.getters.messages;
        },
    },
    updated(){
        // console.log(this.$store.getters.messages)
        var container = this.$el.getElementsByClassName('v-virtual-scroll__container');
        // console.log(container)
        this.scrollHeight = container[0].style.height.replace(/[^0-9]/g, '');
        var container2 = this.$el.querySelector('#test');
        container2.scrollTop = Number(this.scrollHeight);
        // console.log(container2.scrollTop)
    },
    methods:{
        pushMessage(value){
            if(value != ""){
                this.$store.dispatch('pushItem', value);
                this.text = "";
            }
        }
    },
}
</script>
<style scoped>
.test{
    white-space: pre-wrap;
}
</style>