<template>
  <v-app>
   <v-main>
      <template v-if="userToken">
        <router-link to="/Login" class="header-item">ログイン</router-link>
        <router-link to="/Register" class="header-item">登録</router-link>
      </template>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  methods:{
  },
  computed:{
    userToken(){
      return this.$store.getters.userToken ? false : true;
    }
  }
};
</script>
<style scoped>
.header-item{
    margin-left:80px;
    font-size:30px;
    padding-left: 10px;
}
</style>