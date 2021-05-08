<template>
  <v-app>
    <v-row class="justify-center">
      <template v-if="userToken">
        <v-col cols="4">
          <router-link to="/Login" class="header-item">
            <v-card style="text-align: center">ログインページ</v-card>
          </router-link>
        </v-col>
        <v-col cols="4">
          <router-link to="/Register" class="header-item">
            <v-card style="text-align: center">登録ページ</v-card>
          </router-link>
        </v-col>
      </template>
    </v-row>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
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