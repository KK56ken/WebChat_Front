
<template>
  <div>
    <v-row>
      <v-col
        cols="12"
      >
        <v-sheet
          class="pa-12 form"
          color="grey lighten-3"
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
            v-model="userInfo.name"
            :counter="10"
            :rules="nameRules"
            label="名前"
            required
          ></v-text-field>

          <v-text-field
            v-model="userInfo.password"
            :rules="passwordRules"
            label="パスワード"
            required
          ></v-text-field>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate()"
          >
            登録
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
        {{ $store.state.userInfo }}
        
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
   data: () => ({
      valid: true,
      userInfo: {
        email:'',
        name: '',
        password: ''
      },
      nameRules: [
        v => !!v || '名前を入力してください',
        v => (v && v.length <= 10) || '名前は１０文字以内にしてください',
      ],
      passwordRules: [
        v => !!v || 'パスワードを入力してください',
      ],
      emailRules: [
        v => !!v || 'メールアドレスを入力してください',
      ],
    }),
    methods: {
      validate() {
        if(this.$refs.form.validate()){
          // console.log(this.userInfo.email, this.userInfo.name,this.userInfo.password )
          var json = { email:this.userInfo.email, name:this.userInfo.name, password:this.userInfo.password, token:"" }
          this.$store.dispatch("signUp", json)
        }else{
          this.$refs.form.validate()
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      }
    },
    mounted(){
      // this.$store.watch(() => this.$store.getters.getName, name => this.renderHome(name))
    }
}


</script>
<style scoped>
.form{
    margin: 80px;
}
</style>