<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon @click="checkAdmin">mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-row>
        <v-toolbar-title>Application</v-toolbar-title>
      </v-row>
      <v-icon color="blue darken-2" large>mdi-message-text</v-icon>

    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
    >
      <!--  -->
    </v-navigation-drawer>

    <v-main class="grey lighten-2">
      <v-container>
        <v-row>
          <template v-for="n in 4">
            <v-col
                :key="n"
                class="mt-2"
                cols="12"
            >
              <strong>Category {{ n }}</strong>
            </v-col>

            <v-col
                v-for="j in 6"
                :key="`${n}${j}`"
                cols="6"
                md="2"
            >
              <v-sheet height="150"></v-sheet>
            </v-col>
          </template>
        </v-row>

        <v-row class="flex-child">
          <v-col
              class="d-flex"
              cols="12"
              md="4"
          >
            <v-sheet
                class="d-flex"
                color="grey lighten-3"
                height="424"
            >
              <sheet-footer>
                #1: (3r x 2c)
              </sheet-footer>
            </v-sheet>
          </v-col>
          <v-col
              class="d-flex"
              cols="12"
              md="4"
          >
            <v-row class="ma-n3">
              <v-col cols="6">
                <v-sheet
                    class="d-flex"
                    color="green lighten-3"
                    height="150"
                >
                  <sheet-footer>
                    #2: (1r x 1c)
                  </sheet-footer>
                </v-sheet>
              </v-col>

              <v-col cols="6">
                <v-sheet
                    class="d-flex"
                    color="yellow lighten-3"
                    height="150"
                >
                  <sheet-footer>
                    #3: (1r x 1c)
                  </sheet-footer>
                </v-sheet>
              </v-col>

              <v-col cols="12">
                <v-sheet
                    class="d-flex"
                    color="red lighten-3"
                    height="250"
                >
                  <sheet-footer>
                    #5: (2r x 2c)
                  </sheet-footer>
                </v-sheet>
              </v-col>
            </v-row>
          </v-col>

          <v-col
              cols="6"
              md="2"
          >
            <v-sheet
                class="d-flex"
                color="teal lighten-3"
                height="300"
            >
              <sheet-footer>
                #4: (2r x 1c)
              </sheet-footer>
            </v-sheet>
          </v-col>

          <v-col
              class="d-flex"
              cols="6"
              md="2"
          >
            <v-sheet
                class="d-flex mt-auto"
                color="purple lighten-3"
                height="300"
            >
              <sheet-footer>
                #6: (2r x 1c)
              </sheet-footer>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "index",
  data: () => ({
    drawer: null
  }),
  methods: {
    checkAdmin() {
      // this.$parent.show = false
      this.$router.push("/login")
    }
  }
}
</script>

<style scoped>

</style>
