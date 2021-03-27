import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    text: "",
    user1: {
      listItems:[{
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        name: 'tarou',
        subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },]
    },
    listItems: [
    {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      name: 'momotaro',
      subtitle: `Wish I could come, but I'm out of town this weekend.`,
    },
    {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      name: 'urasima',
      subtitle: '<h1>Do you have Paris recommendations? Have you ever been?</h1>',
    },
    ],
    selectedItem: 0,
    items: [
        { name: 'tarou', icon: 'mdi-account' },
        { name: 'momotaro', icon: 'mdi-account' },
        { name: 'urasima', icon: 'mdi-account' },
    ],
    userInfo:{
      name: "",
      token:""
    },
    header_nav:true,
  },
  mutations: {
    setSelectItemIndex(state, num) {
      state.selectedItem = num
    },
    pushItem(state, value) {
      var item = { avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', name: 'tarou', subtitle: value }
      console.log(item)
      state.user1.listItems.push(item)
    },
    signUp(state, userinfo) {
      state.userInfo.name = userinfo.name
    },
    headerNav(state, isnav) {
      state.header_nav = isnav
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getName: state => state.userInfo.name,
    getMessage: state => state.user1.listItems,
    getMessageLength: state => state.user1.listItems.length
  }
})
