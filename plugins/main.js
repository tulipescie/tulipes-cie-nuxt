import Vue from 'vue'

import PrismicDOM from "prismic-dom"
import htmlSerializer from "prismic-javascript"

Vue.mixin({
	methods: {
	    asText (richtext) {
            return PrismicDOM.RichText.asText(richtext, htmlSerializer)
        },
	    asHTML (richtext) {
            return PrismicDOM.RichText.asHtml(richtext, htmlSerializer)
        }
	}
})