<template>
    <v-row>
      <v-col class="pb-0">
        <v-card
          tile
          style='height: 100vh'
        >
          <v-list shaped>
            <v-subheader>Recent chat</v-subheader>
            <v-list-item-group
              v-model="selectedItem"
              color="primary"
            >
              <v-list-item
                v-for="(item, i) in $store.state.friends"
                :key="i"
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.name"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
</template>
<script>
export default {
    data:() => ({
        selectedItem:0,
    }),
    watch:{
        selectedItem: function(newValue, oldValue){
            if(newValue == 0){
                this.$store.commit("setSelectItemIndex", newValue)
            }
            else if(!newValue){
                this.$store.commit("setSelectItemIndex", oldValue)
            }else{
                this.$store.commit("setSelectItemIndex", newValue)
            }
        }
    },
    methods:{
    }
}
</script>