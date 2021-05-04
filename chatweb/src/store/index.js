import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

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
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        receiveUserName: 'kensuke',
        sendUserName: 'tarou',
        message: `test`,
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
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        receiveUserName: 'あらた',
        sendUserName: 'kensuke',
        message: '<h1>Do you have Paris recommendations? Have you ever been?</h1>',
      },
    ],
    selectedUserNum: 0,
    friends: [
        { id:1, name: 'tarou', icon: 'mdi-account' },
        { id:2, name: 'momotaro', icon: 'mdi-account' },
        { id:3, name: 'urasima', icon: 'mdi-account' },
    ],
    userInfo: {
      userid:"",
      email: "",
      name: "",
      password: "",
      image: "",
      token:""
    },
    header_nav: true,
  },
  mutations: {
    setSelectItemIndex(state, num) {
      state.selectedUserNum = num
    },
    pushMessage(state, messages) {
      state.messages.push(messages)
    },
    signUp(state, userinfo) {
      state.userInfo.name = userinfo.name
    },
    headerNav(state, isnav) {
      state.header_nav = isnav
    },
    setToken(state, token) {
      state.userInfo.token = token
    },
    setFriends(state, friendsJson) {
      state.friends = friendsJson
    },
    setMessages(state, messages) {
      state.messages = messages
    }
  },
  actions: {
    autoLogin(context) {
      const userToken = localStorage.getItem('userToken');
      if (!userToken) return;
      context.commit('setToken', userToken)

      var token = context.state.userInfo.token
      axios.post('http://localhost:9000/api/autoLogin', {
        Token: token,
      }).then(res => {
        context.state.userInfo.userid = res.data.id
        context.state.userInfo.name = res.data.name
        context.dispatch('getFriends')
        context.dispatch('getMessages')
      });
    },
    signUp(context, userInfo) {
      axios.post('http://localhost:9000/api/register', {
        Email: userInfo.email,
        Name: userInfo.name,
        Password: userInfo.password,
        Token: userInfo.token,
      },).then(response => {
        console.log(response);
        router.push('/login')
      });
    },
    login(context, userInfo) {
      axios.post('http://localhost:9000/api/login', {
        Email: userInfo.email,
        Password: userInfo.password
      }).then(res => {
        localStorage.setItem('userToken',res.data.token);
        context.state.userInfo.userid = res.data.id
        context.state.userInfo.name = res.data.name
        context.state.userInfo.token = res.data.token
        context.dispatch('getFriends')
        context.dispatch('getMessages')
        router.push('/')
      })
    },
    getFriends(context) {
      axios.get('http://localhost:9000/api/friend?id=1')
        .then(res => {
          var i = 0;
          res.data.forEach(item => {
            res.data[i] = JSON.parse(item);
            i++;
          })
          context.commit('setFriends', res.data)
        })
    },
    getMessages(context) {
      axios.get('http://localhost:9000/api/message?id=1')
        .then(res => {
          var i = 0;
          res.data.forEach(item => {
            res.data[i] = JSON.parse(item);
            i++;
          })
          context.commit('setMessages', res.data)
        })
    },
    postMessage(context,messages) {
      console.log(messages)
      axios.post('http://localhost:9000/api/message', {
        SendUserId: messages.sendUserId,
        ReceiveUserId: messages.receiveUserId,
        Message: messages.message
      }).then(res => {
        console.log(res.data)
        context.commit('pushMessage', res.data)
        })
    },
  },
  modules: {
  },
  getters: {
    getName: state => state.userInfo.name,
    messages: state => state.messages.filter((message) => message.sendUserName === state.friends[state.selectedUserNum].name || message.receiveUserName === state.friends[state.selectedUserNum].name),
    userToken: state => state.userInfo.token
  }
})
