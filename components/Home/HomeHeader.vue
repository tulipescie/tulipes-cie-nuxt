<template>
  <header>
    <div v-html="asText(homepageDatas.homepage_h1)"></div>
    <div v-html="asText(homepageDatas.homepage_h2)"></div>
    <div id="scroll">scroll down</div>
  </header>
</template>

<script>
export default {
  name: 'HomeFirstBloc',
  props: ['homepageDatas'],
  methods: {
  },
  created () {
  }
}
</script>

<style lang="sass" scoped>
header 
  width: 100%
  height: 70vh
  display: flex
  text-align: center
  align-items: center
  justify-content: center
  flex-direction: column 
  div
    /deep/ h1 
    font-size: 30px
  #scroll 
    margin-top: 10vh

</style>
