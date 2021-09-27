<template>
  <v-list
      class="pl-14"
      shaped
  >
    <v-list-item v-for="v in this.$router.getRoutes()">
      <router-link :to="v.path">{{ v.name }}</router-link>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "item"
}
</script>

<style scoped>

</style>
