<template>
    <div>
        <v-col class="pt-0 pl-0 pb-0">
            <v-card style="height:100vh">
                <v-virtual-scroll
                    :bench="benched"
                    :items="[0]"
                    height="850"
                    item-height="80"
                >
                    <v-list class="pt-1 pl-0 pr-0" three-line>
                        <v-list-item-group
                            v-model="selectedItem"
                            color="primary"
                        >
                            <template v-for="(user,index) in userMessages">
                                <v-list-item
                                    :key="index"
                                >
                                    <v-list-item-avatar>
                                    <v-img :src="user.avatar"></v-img>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                    <v-list-item-title v-html="user.sendUserName"></v-list-item-title>
                                    <v-list-item-subtitle v-html="user.message"></v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </template>
                        </v-list-item-group>
                    </v-list>
                </v-virtual-scroll>
                <v-row  class="pa-0">
                    <v-col class="pr-0 pb-0" cols="11">
                        <v-textarea
                            v-model="text"
                            auto-grow
                            outlined
                            label="メッセージ入力"
                            solo
                            row-height="1"
                        ></v-textarea>
                    </v-col>
                    <v-col class="pl-0" cols="1">
                        <v-btn @click="pushMessage(text)" style="width:100%; height:55px" color="primary" dark>
                            送信
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </div>
</template>
<script>
export default {
    data:() =>  ({
        text:"",
        selectedItem:0,
        benched: 0,
    }),
    computed: {
        userMessages(){
            console.log(this.$store.getters.messages)
            return this.$store.getters.messages;
        },
    },
    methods:{
        pushMessage(value){
            var validate = value.trim();
            if(validate){
                this.$store.dispatch('pushItem', value);
                this.text = "";
            }
        },
    }
}
</script>