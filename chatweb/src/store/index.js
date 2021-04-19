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
    message: {
      1: [
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
          message: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        }
      ],
      2: [
        {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        receiveUserName: 'kensuke',
        sendUserName: 'tarou',
        message: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        }
      ]
    }
  },
  mutations: {
    setSelectItemIndex(state, num) {
      state.selectedUserNum = num
    },
    pushItem(state, value) {
      var item = { avatar: '', receiveUserName: state.friends[state.selectedUserNum].name ,sendUserName: state.userInfo.name, message: value };
      state.messages.push(item)
    },
    signUp(state, userinfo) {
      state.userInfo.name = userinfo.name
    },
    headerNav(state, isnav) {
      state.header_nav = isnav
    },
    setToken(state, token) {
      state.userInfo.token = token
    }
  },
  actions: {
    autoLogin({ commit }) {
      const userToken = localStorage.getItem('userToken');
      if (!userToken) return;
      commit('setToken', userToken)
    },
    signUp(context, userInfo) {
      // console.log(userInfo.email)
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
        router.push('/')
        context.dispatch("getFriends")
      })
    },
    getFriends(context) {
      axios.get('http://localhost:9000/api/friend?id=1')
        .then(res => {
          console.log(res.data)
          // console.log(res.data.id)
        })
    },
    pushItem(context, value) {
      context.commit('pushItem', value);
    },
  },
  modules: {
  },
  getters: {
    getName: state => state.userInfo.name,
    //messages: state => Object.filter(state.users, (user) => user.messages.name === state.items[state.selectedUserNum].name)
    messages: state => state.messages.filter((message) => message.sendUserName === state.friends[state.selectedUserNum].name || message.receiveUserName === state.friends[state.selectedUserNum].name ),
    userToken: state => state.userInfo.token
  }
})
