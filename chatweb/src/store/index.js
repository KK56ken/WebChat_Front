import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    text: "",
    listItems: [
    { header: 'Today' },
    {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      name: 'kensuke',
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
    {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      name: 'kensuke',
      subtitle: `hello`,
    },
    ],
    selectedItem: 0,
    items: [
        { name: 'kensuke', icon: 'mdi-account' },
        { name: 'momotaro', icon: 'mdi-account' },
        { name: 'urasima', icon: 'mdi-account' },
    ],
  },
  mutations: {
    setSelectItemIndex(state, num) {
      state.selectedItem = num
    },
    pushItem(state, value) {
      var item = {avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', name: 'kensuke', subtitle: value}
      state.listItems.push(item)
    }
  },
  actions: {
  },
  modules: {
  }
})
