<template>
  <v-app>
    <!--       <v-navigation-drawer app>-->
    <!--         &lt;!&ndash; &ndash;&gt;-->
    <!--       </v-navigation-drawer>-->

    <v-app-bar app>
      <!-- -->
    </v-app-bar>

    <v-main>

      <v-card
          :loading="loading"
          class="mx-auto my-12"
          max-width="374"
      >
        <template slot="progress">
          <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
          ></v-progress-linear>
        </template>

        <v-img
            :src="imgUrl"
            height="250"
        ></v-img>

        <v-card-title>用户 登录</v-card-title>

        <v-card-text>
          <!--             <v-row-->
          <!--                 align="center"-->
          <!--                 class="mx-0"-->
          <!--             >-->
          <!--               <v-rating-->
          <!--                   :value="4.5"-->
          <!--                   color="amber"-->
          <!--                   dense-->
          <!--                   half-increments-->
          <!--                   readonly-->
          <!--                   size="14"-->
          <!--               ></v-rating>-->

          <!--               <div class="grey&#45;&#45;text ms-4">-->
          <!--                 4.5 (413)-->
          <!--               </div>-->
          <!--             </v-row>-->
          <v-row>
            <v-form ref="form" v-model="form">
              <v-container>
                <v-row>
                  <v-col cols="12" md="4">
                    <v-text-field
                        v-model="form.username"
                        :counter="10"
                        label="用户名"
                        required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="3">
                    <v-text-field
                        v-model="form.password"
                        label="密码"
                        required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-row>
          <div class="my-4 text-subtitle-1">
            $ • Italian, Cafe
          </div>

          <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>今晚 好时光</v-card-title>

        <v-card-text>
          <v-chip-group
              v-model="selection"
              active-class="deep-purple accent-4 white--text"
              column
          >
            <v-chip>5:30PM</v-chip>

            <v-chip>7:30PM</v-chip>

            <v-chip>8:00PM</v-chip>

            <v-chip>9:00PM</v-chip>
          </v-chip-group>
        </v-card-text>

        <v-card-actions>
          <v-btn
              color="deep-purple lighten-2"
              text
              @click="login"
          >
            登录
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-main>

    <v-footer></v-footer>
  </v-app>
</template>

<script>
export default {
  name: "login",
  data: () => ({
    form: {
      username: '',
      password: ''
    },
    selection: null,
    imgUrl: require("@/static/images/cooking.png")
  }),
  methods: {
    login() {
      console.log(this.form)
      this.$router.push("/adminIndex")
    }
  }
}
</script>

<style scoped>

</style>
