<template>
  <section class="container">
    <div>
      <home-header :homepageDatas="homepageDatas"/>
      <home-agence/>
      <home-realisations/>
      <home-bulbe/>
      <home-clients :clientsList="clientsList"/>
      <home-contact />
    </div>
  </section>
</template>

<script>
import {
  HomeHeader,
  HomeAgence,
  HomeRealisations,
  HomeBulbe,
  HomeClients,
  HomeContact
} from '~/components/Home'

// API
import Prismic from 'prismic-javascript'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeAgence,
    HomeRealisations,
    HomeBulbe,
    HomeClients,
    HomeContact
  },
  head () {
    return {
      title: 'Tulipes et Compagnie',
      meta: [
        { hid: 'description', 
        name: 'description', 
        content: 'Bienvenue chez Tulipes et Compagnie' }
      ]
    }
  },
  async asyncData(context) {
    const api = await Prismic.getApi('https://tulipes-cie.prismic.io/api/v2')
    let homepageDatas = {}
    await api.getSingle('homepage').then(document => {
      homepageDatas = document.data
    })

    let clientsList = []
    await api.getSingle('liste_clients').then(document => {
      clientsList = document.data.clients_list
    })

    return {
      homepageDatas: homepageDatas,
      clientsList: clientsList
    }
  }
}
</script>

<style lang="stylus">
h2 
  color tulipes_blue
</style>