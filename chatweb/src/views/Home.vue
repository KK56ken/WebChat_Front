<template>
  <div>
    <v-row>
      <v-col cols='12' class="pb-0">
        <components is='Header'></components>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols='2' class="pa-0">
        <components is='Users'></components>
      </v-col>
      <v-col cols='10' class="pa-0">
        <components is='Chat'></components>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Users from '@/components/Users.vue'
import Chat from '@/components/Chat.vue'

export default {
  data: () => ({
  }),
  components: {
    Header,
    Users,
    Chat
  }
}
</script>
<style scoped>

</style>