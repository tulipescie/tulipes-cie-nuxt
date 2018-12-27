<template>
  <div>
    <navigation />
    <nuxt keep-alive />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    Navigation
	}
}
</script>

<style>
</style>
