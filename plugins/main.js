import Vue from 'vue'

import PrismicDOM from "prismic-dom"
import htmlSerializer from "prismic-javascript"

Vue.mixin({
  methods: {
    asText(richtext) {
      return PrismicDOM.RichText.asText(richtext, htmlSerializer)
    },
    asHTML(richtext) {
      return PrismicDOM.RichText.asHtml(richtext, htmlSerializer)
    },
    isTextValid(element) {
      if (element && element.length > 0 && element[0].text) {
        return true
      } else {
        return false
      }
    },
    isImgValid(element) {
      if (element && element.url) {
        return true
      } else {
        return false
      }
    },
  }
})
