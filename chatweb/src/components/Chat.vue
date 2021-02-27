<template>
    <div>
        <v-col class="pt-0 pl-0 pb-0">
            <v-card style='height: 100vh'>
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
        selectedItem:0
    }),
    methods:{
        pushMessage(){

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