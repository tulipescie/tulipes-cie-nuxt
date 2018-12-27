import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      content: {},
      posts: {}
    },
    mutations: {
      setPage: (state, content) => {
        state.content = content
      },
      setPosts: (state, posts) => {
        state.posts = posts
      },
      setCurrentPost: (state, post) => {
        state.post = post
      }
    },
    actions: {
      async getPosts({
        commit
      }) {
        let ref = await axios.get('https://tulipes-cie.prismic.io/api/v2')
        ref = ref.refs[0].ref
        const data = await axios.get(
          'https://tulipes-cie.prismic.io/api/v2/documents/search?ref=' + ref + '&q=[[at(document.type,"homepage")]]'
        )
        commit('setPosts', data)
      },
      async getPost({
        commit,
        store
      }, id) {
        let { data } = await axios.get(`posts/${id}`)
        commit('setCurrentPost', data)
      },
      async nuxtServerInit({
        commit
      }) {
        let ref = await this.$axios.$get('https://tulipes-cie.prismic.io/api/v2')
        ref = ref.refs[0].ref
        const data = await this.$axios.$get(
          'https://tulipes-cie.prismic.io/api/v2/documents/search?ref=' + ref
          // 'https://tulipes-cie.prismic.io/api/v2/documents/search?ref=' + ref + '&q=[[at(document.type,"homepage")]]'
        )
        commit('setPage', data)
      }
    }
  })
}

export default createStore
