<template>
  <div>
    <componets is="Header"></componets>
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
            v-model="userInfo.name"
            :counter="10"
            :rules="nameRules"
            label="Name"
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
            Submit
          </v-btn>

          <v-btn
            color="error"
            class="mr-4"
            @click="reset"
          >
            Clear
          </v-btn>
        </v-form>
        </v-sheet>
        {{ $store.state.userInfo}}
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
   data: () => ({
      valid: true,
      userInfo: {
        name: '',
        password: '',
      },
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      passwordRules: [
        v => !!v || 'password is required',
      ],
    }),

    methods: {
      validate(userInfo) {
        if(this.$refs.form.validate()){
          this.$store.commit("signUp", userInfo)
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
      remderHome(name){
        if(name !== ""){
          this.$router.push("/").catch(()=>{})
        }
      }
    },
    mounted(){
      // this.$store.watch(() => this.$store.getters.getName, name => this.renderHome(name))
    }

}


</script>
