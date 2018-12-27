<template>
  <article class="container">
    <header>
      <h1>{{ asText(post.data.blog_title) }}</h1>
      <div v-html="asHTML(post.data.blog_chapeau)"></div>
    </header>
    <section>
      <article>
        <div v-for="(content, index) in post.data.blog_content_list" :key="'post-' + index">
          <div>
            <img
              v-if="isImgValid(content.blog_content_img_first)"
              :src="content.blog_content_img_first.url"
              :alt="content.blog_content_img_first.alt"
            >
            <img
              v-if="isImgValid(content.blog_content_img_second)"
              :src="content.blog_content_img_second.url"
              :alt="content.blog_content_img_second.alt"
            >
          </div>
          <div>
            <h3
              v-if="isTextValid(content.blog_content_subtitle)"
            >{{ asText(content.blog_content_subtitle)}}</h3>
            <div v-html="asHTML(content.blog_content_text)"></div>
          </div>
        </div>
      </article>
    </section>
  </article>
</template>

<script>
// API
import Prismic from 'prismic-javascript'

export default {
  name: 'Projet',
  async asyncData({ params, error }) {
    const api = await Prismic.getApi('https://tulipes-cie.prismic.io/api/v2')
    let projet = {}
    return api
      .getByUID('blog', params.uid)
      .then(document => {
        if (document.data.length === 0) {
          throw { statusCode: 404, message: 'Blog post not found' }
        }
        return { post: document }
      })
      .catch(e => {
        error({ statusCode: 404, message: 'Blog post not found' })
      })
  },
  methods: {}
}
</script>

<style lang="stylus" scoped>
</style>