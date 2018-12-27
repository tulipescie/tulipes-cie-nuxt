<template>
  <div id="blog-posts-container">
    <div class="blog-post" 
    v-for="(post, index) in datas" :key="'blog-post-' + index">
      <div>
      <nuxt-link :to="`/blog/${post.uid}`">
        <h1>{{ asText(post.data.blog_title) }}</h1>
        <br>
        <div v-html="asHTML(post.data.blog_chapeau)"></div>
      </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPreview',
  props: ['datas'],
  components: { },
  data() {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
// #blog-posts-container 
//   border: 2px solid red
//   width: 30%
</style>
