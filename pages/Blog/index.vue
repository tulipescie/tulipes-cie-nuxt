<template>
  <section class="container">
    <h1>Blog</h1>
    <div>
      <blog-preview :datas="blogPosts"/>
    </div>
  </section>
</template>

<script>
// API
import Prismic from 'prismic-javascript'

// components
import BlogPreview from '~/components/Blog/BlogPreview.vue'

export default {
  name: 'Realisations',
  components: { BlogPreview },
  async asyncData(context) {
    var apiEndpoint = 'https://tulipes-cie.prismic.io/api/v2'
    const api = await Prismic.getApi(apiEndpoint)

    let blogPosts = {}
    await api
      .query(Prismic.Predicates.at('document.type', 'blog'), {
        orderings: '[my.projet.date desc]'
      })
      .then(response => {
        blogPosts = response.results
      })

    return {
      blogPosts: blogPosts
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
