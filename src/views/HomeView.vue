<template>
  <v-container class="container">
    <v-alert
      ref="alert"
      class="container__alert"
      type="success"
      v-model="success"
      transition="slide-x-transition"
      @click="$refs.alert.toggle()"
      >Object was successfuly added. You can see all the results in Table
      tab</v-alert
    >
    <v-tabs>
      <v-tab v-for="tab in tabs" :key="tab.id" :to="tab.path">
        {{ tab.title }}
      </v-tab>
    </v-tabs>
    <router-view @setJson="saveObject" :options="objects" />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

declare interface Item {
  id: number
  value: number
}

export default Vue.extend({
  name: 'HomeView',
  data: () => ({
    tabs: [
      {
        id: 1,
        title: 'Text area',
        path: '/input',
      },
      {
        id: 2,
        title: 'Table',
        path: '/table',
      },
    ],
    objects: [] as Item[],
    success: false,
  }),
  methods: {
    saveObject(e: string) {
      const temp = JSON.parse(e)
      temp.forEach((el: Item) => this.objects.push(el))
      this.success = true
      setTimeout(() => {
        this.success = false
      }, 2000)
    },
  },
})
// [{"id":1,"value":2}]
</script>
<style lang="sass" scoped>
.container
  position: relative
  &__alert
    position: fixed
    z-index: 999
</style>
