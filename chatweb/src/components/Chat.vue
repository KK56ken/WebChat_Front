<template>
    <div>
        <v-col class="pt-0 pl-0 pb-0">
            <v-card style="height:100vh">
                <v-virtual-scroll
                    :bench="benched"
                    :items="items"
                    height="500"
                    item-height="80"
                >
                    <v-list class="pt-0 pl-0 pr-0" three-line>
                        <v-list-item-group
                            v-model="selectedItem"
                            color="primary"
                        >
                            <template v-for="(item,index) in $store.state.listItems">
                                <v-list-item
                                    v-if="checkUser(item.name)"
                                    :key="index"
                                >
                                    <v-list-item-avatar>
                                    <v-img :src="item.avatar"></v-img>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                    <v-list-item-title v-html="item.name"></v-list-item-title>
                                    <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </template>
                        </v-list-item-group>
                    </v-list>
                </v-virtual-scroll>
                <v-btn @click="pushMessage(text)" color="primary" dark>
                    送信
                </v-btn>
                <v-textarea
                    v-model="text"
                    auto-grow
                    outlined
                    label="メッセージ入力"
                    solo
                    row-height="1"
                ></v-textarea>
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
        //test
    }),
    computed: {
      items () {
        return Array.from({ length: this.length }, (k, v) => v + 1)
      },
      length () {
        return 20
      },
    },
    methods:{
        pushMessage(value){
            if(value.trim()){
                this.$store.commit("pushItem", value);
                this.text = "";
            }
        },
        checkUser(name){
            if(!name){
                return false
            }
            if(this.$store.state.items[this.$store.state.selectedItem].name === name){
                return true
            }
            return false
        }
    }
}
</script>