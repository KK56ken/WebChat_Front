<template>
    <v-row class="pb-0">
        <v-col cols="12" class="pb-0">
            <v-list class="pt-0">
                <v-list-item-group
                    color="primary"
                >
                    <v-virtual-scroll
                        :bench="benched"
                        :items="$store.getters.messages"
                        :height="height"
                        item-height="80"
                        id="virtual-scroll"
                    >
                        <template v-slot:default="{ index, item }">
                            <v-list-item @click="setIndex(index)" :key="item.time"  class="pt-0 pl-0 pr-0">
                                <v-list-item-avatar class="ma-5">
                                    <v-img :src="item.avatar"></v-img>
                                </v-list-item-avatar>

                                <v-list-item-content>
                                    <v-list-item-title>{{ item.sendUserName }}</v-list-item-title>
                                    <v-list-item-subtitle class="white-space">{{ item.message }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </template>
                    </v-virtual-scroll>
                </v-list-item-group>
            </v-list>
        </v-col>
        <v-col cols="12" class="pt-0 pb-0">
            <v-row>
                <v-col cols="10" class="pt-0 pr-0 pb-0">
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
                <v-col cols="2" class="pt-0 pl-0 pb-0">
                    <v-btn @click="pushMessage(text); send(text)" style="width:100%; height:130px" color="primary" dark>
                        送信
                    </v-btn>
                </v-col>
            </v-row >
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
        scrollHeight:0,
        //以下よりwebSocketで使用
        ws: null,
        sendUserId: 0,
        receiveUserId: 0,
        message: "",
        height: 0
    }),
    mounted(){
        var container = this.$el.getElementsByClassName('v-virtual-scroll__container');
        this.scrollHeight = container[0].style.height.replace(/[^0-9]/g, '');
        var container2 = this.$el.querySelector('#virtual-scroll');
        container2.scrollTop = Number(this.scrollHeight);
        this.height = window.innerHeight - 130;
    },
    computed: {
        userMessages(){
            return this.$store.getters.messages;
        },
    },
    updated(){
        // var container = this.$el.getElementsByClassName('v-virtual-scroll__container');
        // this.scrollHeight = container[0].style.height.replace(/[^0-9]/g, '');
        // var container2 = this.$el.querySelector('#virtual-scroll');
        // container2.scrollTop = Number(this.scrollHeight);
        
    },
    methods:{
        wsPushMessage(message){
            this.$store.dispatch('wsPushMessage', message);
        },
        pushMessage(value){
            if(value != ""){
                var sname = Number(this.$store.state.userInfo.userid)
                var rname = Number(this.$store.state.friends[this.$store.state.selectedUserNum].id)
                var messages = {sendUserId: sname, receiveUserId: rname, message: value};
                this.$store.dispatch('postMessage', messages);
            }
        },
        send(value){
            var sname = Number(this.$store.state.userInfo.userid)
            var rname = Number(this.$store.state.friends[this.$store.state.selectedUserNum].id)
            console.log("value",value,"this.text",this.text)
            this.ws.send(
                JSON.stringify({
                    Id: 0,
                    sendUserId: sname,
                    receiveUserId: rname,
                    Message: value
                })
            )
            this.text = "";
        },
        setIndex(index){
            this.selectedItem = index
        }
    },
    created(){
        var self = this;
        this.ws = new WebSocket('ws://localhost:9000/ws');
        this.ws.addEventListener('message', function(e) {
            var strMessage = JSON.parse(e.data);
            var objMessage = JSON.parse(strMessage);
            self.wsPushMessage(objMessage)
        });
        this.ws.onopen = function() {
            console.log("WebSocket is open now.");
        };
    },
}
</script>
<style scoped>
.white-space{
    white-space: pre-wrap;
}
.responsiv{
        height: 800px;
}

@media screen and (min-width: 481px){
    .responsiv{
        height: 300px;
    }
}
@media screen and (min-width: 640px){
    .responsiv{
        height: 500px;
    }
}
@media screen and (max-width: 1024px){
    .responsiv{
        height: 500px;
    }
}
</style>