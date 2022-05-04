<template>
  <v-container>
    <v-tabs>
      <v-tab v-for="tab in tabs" :key="tab.id">{{ tab.title }}</v-tab>
    </v-tabs>
    <router-view></router-view>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HelloWorld',

  data: () => ({
    tabs: [
      {
        id: 1,
        title: 'Text area',
      },
      {
        id: 2,
        title: 'Table',
      },
    ],
  }),
})
</script>
