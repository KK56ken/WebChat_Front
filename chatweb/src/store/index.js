import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    text: "",
    messages: [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        receiveUserName: 'kensuke',
        sendUserName: 'tarou',
        message: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        receiveUserName: 'kensuke',
        sendUserName: 'momotaro',
        message: `Wish I could come, but I'm out of town this weekend.`,
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        receiveUserName: 'kensuke',
        sendUserName: 'urasima',
        message: '<h1>Do you have Paris recommendations? Have you ever been?</h1>',
      },
    ],
    selectedUserNum: 0,
    items: [
        { name: 'tarou', icon: 'mdi-account' },
        { name: 'momotaro', icon: 'mdi-account' },
        { name: 'urasima', icon: 'mdi-account' },
    ],
    userInfo:{
      name: "kensuke",
      userImage: "",
      userToken:"aaa"
    },
    header_nav:true,
  },
  mutations: {
    setSelectItemIndex(state, num) {
      state.selectedUserNum = num
    },
    pushItem(state, value) {
      var item = { avatar: '', receiveUserName: state.items[state.selectedUserNum].name ,sendUserName: state.userInfo.name, message: value };
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
    signUp(userInfo) {
      axios.post('url', {
        name: userInfo.name,
        password: userInfo.password
      }).then(response => {
        console.log(response);
      });
    },
    pushItem(context, value) {
      context.commit('pushItem', value);
      //state.messages.push(item)
    },
  },
  modules: {
  },
  getters: {
    getName: state => state.userInfo.name,
    //messages: state => Object.filter(state.users, (user) => user.messages.name === state.items[state.selectedUserNum].name)
    messages: state => state.messages.filter((message) => message.sendUserName === state.items[state.selectedUserNum].name || message.receiveUserName === state.items[state.selectedUserNum].name ),
    userToken: state => state.userInfo.userToken
  }
})
