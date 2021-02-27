<template>
    <div>
        <v-col class="pt-0 pl-0 pb-0">
        <v-card style='height: 100vh'>
            <v-list three-line>
            <template v-for="(item, index) in $store.state.listItems">
              <v-subheader
                v-if="item.header"
                :key="item.header"
                v-text="item.header"
              ></v-subheader>

              <v-divider
                v-else-if="item.divider"
                :key="index"
                :inset="item.inset"
              ></v-divider>

              <v-list-item
                v-else-if="checkUser(item.name)"
                :key="item.name"
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
        text:""
    }),
    methods:{
        pushMessage(){

        },
        checkUser(name){
            if(!name){
                return false
            }
            if(this.$store.state.items[this.$store.state.selectedItem].name === name){
                console.log(name)
                return true
            }
            return false
        }
    }
}
</script>