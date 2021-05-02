<template>
  <div>
    <v-row class="justify-center">
      <v-col
        cols="8"
      >
        <v-card
          class="pa-12"
        >
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="userInfo.email"
              :rules="emailRules"
              label="メールアドレス"
              required
            ></v-text-field>

            <v-text-field
              v-model="userInfo.password"
              :rules="passwordRules"
              type="password"
              label="パスワード"
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
        </v-card>
        <!-- {{ $store.state.userInfo }} -->
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
        v => !!v || 'メールアドレスを入力してください',
      ],
      passwordRules: [
        v => !!v || 'パスワードを入力してください',
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
