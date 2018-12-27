<template>
  <nav>
    <div>
      <nuxt-link to="/">
        <img src="/img/logo.png">
      </nuxt-link>
    </div>
    <ul>
      <li><nuxt-link to="/">Accueil</nuxt-link></li>
      <li><nuxt-link to="/agence">Agence</nuxt-link></li>
      <li><nuxt-link to="/realisations">Realisations</nuxt-link></li>
      <li><nuxt-link to="/bulbe">Bulbe</nuxt-link></li>
      <li><nuxt-link to="/contact">Contact</nuxt-link></li>
    </ul>
  </nav>
</template>

<style lang="stylus" scoped>
nav 
  height 10vh
  width 100%
  display flex
  flex-direction row
  align-items center
  justify-content space-between
  div 
    height 100%
    img 
      height 100%
      width auto
  ul 
    li 
      display inline-block
      list-style-type none

</style>