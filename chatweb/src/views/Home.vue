<template>
  <div>
    <v-row>
      <v-col cols='12' class="pb-0">
        <components is='Header'></components>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pt-0 pr-0">
        <v-card
          tile
        >
          <v-list shaped>
            <v-subheader>Recent chat</v-subheader>
            <v-list-item-group
              v-model="selectedItem"
              color="primary"
            >
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col class="pt-0 pl-0">
        <v-card height="500px" >
          <v-form>
            <v-text-field
              label="メッセージ入力"
              solo
              hide-details="auto"
            ></v-text-field>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'

export default {
  data: () => ({
    selectedItem: 1,
    screenHeight: 0,
    items: [
      { text: 'kensuke', icon: 'mdi-account' },
      { text: 'momotaro', icon: 'mdi-account' },
      { text: 'urasima', icon: 'mdi-account' },
    ],
  }),
  created(){
    this.setScreenHeight()
  },
  methods:{
    setScreenHeight(){
      this.screenHeight = window.innerHeight;
    }
  },
  components: {
    Header
  }
}
</script>
