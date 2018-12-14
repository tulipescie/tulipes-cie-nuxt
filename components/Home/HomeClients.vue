<template>
  <section>
    <h2>
      nos derniers clients
    </h2>
    <ul>
      <li v-for="(client, index) in clientsList" 
      :key="'client-' + index">
          <a :href="client.client_link.url" target="_blank">
          <img :src="client.client_logo.url" :alt="client.client_logo.alt">
          </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'HomeFifthBloc',
  props: ['clientsList'],
  methods: {
  },
  created () {
  }
}
</script>

<style lang="sass" scoped>
section 
  background: $tulipes-black
  width: 100%
  height: 50vh
  ul    
    display: flex
    li 
      max-width: 10%
      img
        width: 100%
        height: auto


</style>
