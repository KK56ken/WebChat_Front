import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    text: "",
    messages: [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        name: 'tarou',
        subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        name: 'tarou',
        subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
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
    selectedUserNum: 0,
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
      state.selectedUserNum = num
    },
    pushItem(state, value) {
      var item = { avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', name: 'tarou', subtitle: value }
      console.log(item)
      state.messages.push(item)
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
    //messages: state => Object.filter(state.users, (user) => user.messages.name === state.items[state.selectedUserNum].name)
    messages: state => state.messages.filter((message) => message.name === state.items[state.selectedUserNum].name)
  }
})
