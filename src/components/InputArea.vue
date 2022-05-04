<template>
  <v-form @submit.prevent="submit">
    <v-textarea
      :error-messages="errors"
      v-model="model"
      @input="resetErrors"
      label="Waiting for result of JSON.stringify([{id:1, value: 2} ...])"
    ></v-textarea>
    <v-btn type="submit">Add</v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue'
declare interface Item {
  id: number
  value: number
}
export default Vue.extend({
  data: () => ({
    model: '',
    errors: [] as string[],
  }),
  methods: {
    submit() {
      this.resetErrors()
      if (!this.model) {
        this.errors.push("Empty field")
        return
      }
      try {
        JSON.parse(this.model)
      } catch (error) {
        this.errors.push('Invalid JSON string')
        return
      }
      const arr = JSON.parse(this.model)
      console.log(arr)

      if (
        !arr.every((el: Item) => {
          return (
            Object.prototype.hasOwnProperty.call(el, 'id') &&
            Object.prototype.hasOwnProperty.call(el, 'value') &&
            Object.values(el).every((el2) => typeof el2 === 'number')
          )
        })
      ) {
        this.errors.push(
          'Error parsing string: need an array of objects of type {id: number, value: number}'
        )
        return
      }
      this.$emit('setJson', this.model)
      this.model = ''
    },
    resetErrors() {
      this.errors = []
    },
  },
})
</script>
