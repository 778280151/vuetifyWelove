<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon @click.native="checkAdmin">mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-app-bar
        app
        clipped-right
        flat
        height="72"
    >
      <v-spacer></v-spacer>

      <v-responsive max-width="156">
        <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
        ></v-text-field>
      </v-responsive>
    </v-app-bar>

    <!--    左侧边栏-->
    <v-navigation-drawer
        v-model="drawer"
        app
        width="300"
    >
      <v-navigation-drawer
          v-model="drawer"
          absolute
          color="grey lighten-3"
          mini-variant
      >

        <v-avatar
            class="d-block text-center mx-auto mt-4"
            color="grey darken-1"
            size="36"
            @click="alert('fff')"
        ></v-avatar>

        <v-divider class="mx-3 my-5"></v-divider>


        <v-avatar
            v-for="n in 6"
            :key="n"
            class="d-block text-center mx-auto mb-9"
            color="grey lighten-1"
            size="28"
        ></v-avatar>
      </v-navigation-drawer>

      <v-sheet
          color="grey lighten-5"
          height="128"
          width="100%"
      ></v-sheet>

      <dashBoard></dashBoard>
    </v-navigation-drawer>

    <!--    右侧边栏-->
    <v-navigation-drawer
        app
        clipped
        right
    >
      <v-list>
        <v-list-item
            v-for="n in 5"
            :key="n"
            link
        >
          <v-list-item-content>
            <v-list-item-title>Item {{ n }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!--    主内容展示-->
    <v-main>
      <!--  -->
      <router-view></router-view>
    </v-main>

    <v-footer
        app
        color="transparent"
        height="72"
        inset
    >
      <v-text-field
          background-color="grey lighten-1"
          dense
          flat
          hide-details
          rounded
          solo
      ></v-text-field>
    </v-footer>
  </v-app>
</template>

<script>
import dashBoard from '/src/views/admindarshboard/index'

export default {
  name: "dashboard",
  components: {
    dashBoard
  },
  data: () => ({
    drawer: null
  }),
  methods: {
    checkAdmin() {
      // this.$parent.show = true
      this.$router.push("weLoveIndex")
    }
  }
}
</script>

<style scoped>

</style>
