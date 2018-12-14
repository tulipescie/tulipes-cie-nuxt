<template>
  <section class="container">
    <div>
      <h1 class="title">
        tulipes-cie
      </h1>
      <h2 class="subtitle">
        Site web de Tulipes
      </h2>
      <div v-html="titleHtml">
      </div>
      {{ homepageDatas.homepage_h1 }}
      <div v-html="homepageDatas.homepage_h1"></div>
      <div v-html="homepageDatas.homepage_h2"></div>
      <img :src="homepageDatas.homepage_img.url" :alt="homepageDatas.homepage_img.alt">
    </div>
  </section>
</template>

<script>
// API 
import Prismic from "prismic-javascript"
import htmlSerializer from "prismic-javascript"
import PrismicDOM from "prismic-dom"

export default {
  async asyncData(context) {
    var apiEndpoint = "https://tulipes-cie.prismic.io/api/v2";
    const api = await Prismic.getApi(apiEndpoint);
    
    let homepageDatas = {}
    await api.getSingle('homepage')
    .then((document) => {
      homepageDatas.homepage_h1 = PrismicDOM.RichText.asHtml(document.data.homepage_h1, htmlSerializer)
      homepageDatas.homepage_h2 = PrismicDOM.RichText.asHtml(document.data.homepage_h2, htmlSerializer)
      homepageDatas.homepage_description = PrismicDOM.RichText.asHtml(document.data.homepage_description, htmlSerializer)
      homepageDatas.homepage_img = document.data.homepage_img;
    })


    let data = await api.query("")
    var titleHtml = PrismicDOM.RichText.asHtml(data.results[0].data.projet_description, htmlSerializer)
    return { 
      data: data,
      titleHtml
    }

  }
}

</script>

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
