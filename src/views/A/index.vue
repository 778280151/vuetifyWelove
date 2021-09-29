<template>
  <v-app>
    <h5>this A page</h5>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
              cols="12"
              md="4"
          >
            <v-text-field
                v-model="form.firstname"
                :counter="10"
                :rules="nameRules"
                label="First name"
                required
            ></v-text-field>
          </v-col>

          <v-col
              cols="12"
              md="4"
          >
            <v-text-field
                v-model="form.lastname"
                :counter="10"
                :rules="nameRules"
                label="Last name"
                required
            ></v-text-field>
          </v-col>

          <v-col
              cols="12"
              md="4"
          >
            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-app>

</template>

<script>
export default {
  name: "index",
  data: () => ({
    valid: false,
    form: {},
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  })
}
</script>

<style scoped>

</style>
