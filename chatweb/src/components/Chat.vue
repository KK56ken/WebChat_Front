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
                >
                    <template v-slot:default="{ item }">
                        <v-list-item :key="item.message" class="pt-0 pl-0 pr-0"  three-line>
                            <v-list-item-avatar>
                                <v-img :src="item.avatar"></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title>{{ item.sendUserName }}</v-list-item-title>
                                <v-list-item-subtitle class="test">{{ item.message }}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                    </template>
                </v-virtual-scroll>
                <v-row>
                    <v-col cols="10" class="pr-0">
                        <v-textarea
                            v-model="text"
                            auto-grow
                            outlined
                            label="メッセージ入力"
                            solo
                            row-height="1"
                        ></v-textarea>
                    </v-col>
                    <v-col cols="2" class="pl-0">
                        <v-btn @click="pushMessage(text)" style="width:100%; height:55px" color="primary" dark>
                            送信
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>
<script>
export default {
    data:() =>  ({
        text:"",
        selectedItem:0,
        benched:0
    }),
    computed: {
        userMessages(){
            console.log(this.$store.getters.messages)
            return this.$store.getters.messages;
        },
    },
    methods:{
        pushMessage(value){
            if(value != ""){
                this.$store.dispatch('pushItem', value);
                this.text = "";
            }
        },
    }
}
</script>
<style scoped>
.test{
    white-space: pre-wrap;
}
</style>