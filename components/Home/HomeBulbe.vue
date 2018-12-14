<template>
  <section>
    <div class="side">
      <div id="right-container">
        <img src="~/assets/img/bulbe.jpg" alt="">
      </div>
    </div>
    <div class="side">
      <div id="left-container">
        <h2>Le Bulbe</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ex amet soluta ea magnam! Error laborum atque sed corporis, reprehenderit officia reiciendis quis animi, eveniet quaerat ducimus hic magni iure?<br><br>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus accusamus corrupti harum fugiat nesciunt voluptate, cupiditate officiis laborum voluptatum, doloremque sequi magnam eaque perspiciatis sint tempora dolor quod recusandae blanditiis?
        </p>
        <nuxt-link to="/bulbe">
          <button>
            Découvrir le Bulbe
          </button>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeFourthBloc',
  // props: ['homepageDatas'],
  methods: {
  },
  created () {
  }
}
</script>

<style lang="sass" scoped>
section 
  width: 100%
  height: 50vh
  display: flex
  text-align: center
  align-items: center
  justify-content: center
  flex-direction: row 
  .side 
    text-align: left
    height: 100%
    width: 50%
    padding: 0 2%
    h2 
      font-size: 30px
      margin-bottom: 10px
    button 
      margin-top: 10px
    div
      height: 100%
      width: 100%
    #right-container
      text-align: center
      img 
        margin: 0 auto
        height: auto
        width: 100%  
</style>
