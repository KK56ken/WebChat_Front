<template>
  <div>
    <v-row>
      <v-col
        cols="12"
      >
        <v-sheet
          class="pa-12"
          color="grey lighten-3"
        >
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="userInfo.email"
            :counter="10"
            :rules="emailRules"
            label="Email"
            required
          ></v-text-field>

          <v-text-field
            v-model="userInfo.password"
            :rules="passwordRules"
            label="password"
            required
          ></v-text-field>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate(userInfo)"
          >
            ログイン
          </v-btn>

          <v-btn
            color="error"
            class="mr-4"
            @click="reset"
          >
            入力すべて削除
          </v-btn>
        </v-form>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
   data: () => ({
      valid: true,
      userInfo: {
        email: '',
        password: '',
      },
      emailRules: [
        v => !!v || 'password is required',
      ],
      passwordRules: [
        v => !!v || 'password is required',
      ],
    }),

    methods: {
      validate(userInfo) {
        if(this.$refs.form.validate()){
          this.$store.dispatch("login", userInfo)
        }else{
          this.$refs.form.validate()
        }
        // console.log(this.$refs.form.validate())
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
}
</script>
