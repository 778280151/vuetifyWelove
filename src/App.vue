<template>
  <div id="app">
    <dashboard v-show="!show"></dashboard>
    <welove v-show="show"></welove>
  </div>
</template>

<script>
import dashboard from "@/views/adminhome/home";
import welove from "@/views/welovehome/index";

export default {
  name: 'App',
  components: {
    welove, dashboard
  },
  data: () => ({
    show: true
  })
}
</script>

<style>
</style>
