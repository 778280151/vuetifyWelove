<template>

  <!--    <v-list-item-->
  <!--        v-for="n in 5"-->
  <!--        :key="n"-->
  <!--        link-->
  <!--    >-->
  <!--      <v-list-item-content>-->
  <!--        <v-list-item-title>Item {{ n }}</v-list-item-title>-->
  <!--      </v-list-item-content>-->
  <!--    </v-list-item>-->
  <item></item>

</template>

<script>
import item from '@/views/admindarshboard/item'

export default {
  name: "index",
  components: {
    item
  },
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>

</style>
