<template>
  <div>
    <v-row>
      <v-col cols='12' class="pr-0 pb-0">
        <components v-show="false" is='Header'></components>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-show="$store.state.header_nav" cols='2' class="pa-0">
        <components is='Users'></components>
      </v-col>
      <v-col cols='10' class="pa-0">
        <components is='Chat'></components>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Users from '@/components/Users.vue'
import Chat from '@/components/Chat.vue'

export default {
  data: () => ({
  }),
  components: {
    Users,
    Chat
  }
}
</script>
<style scoped>

</style>