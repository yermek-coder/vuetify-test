<template>
  <v-simple-table>
    <thead>
      <tr>
        <th>ID</th>
        <th>VALUE</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in options" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.value }}</td>
      </tr>
    </tbody>
  </v-simple-table>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

declare interface Item {
  id: number
  value: number
}

export default Vue.extend({
  props: {
    options: {
      type: Array as PropType<Item[]>,
      default: () => [],
    },
  },
})
</script>
