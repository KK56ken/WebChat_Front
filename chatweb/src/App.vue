<template>
  <v-app>
   <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  created: function(){
     if(!this.$store.state.userInfo.name){
        this.$router.push("/").catch(()=>{})
      }
      // else{
      //   this.$router.push("/")
      // }
  },
  methods:{
  }

};
</script>
