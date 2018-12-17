// import Vuex from 'vuex'
// import Prismic from "prismic-javascript"

// const createStore = () => {
//   return new Vuex.Store({
//     state: {
//       datas: {}
//     },
//     mutations: {
//       SET_HOMEPAGE: (state, datas) => {
//         state.datas.homepage = datas
//       },
//       SET_DATASET: (state, datas) => {
//         state.datas.all = datas
//       },
//       SET_CLIENTS: (state, datas) => {
//         state.datas.clients = datas
//       },
//       SET_REALISATIONS: (state, datas) => {
//         state.datas.realisations = datas
//       }
//     },
//     actions: {
//       // Prismic
//       async PRISMIC_CALL({
//         commit
//       }) {
//         function queryAll(api) {
//           api.query("")
//             .then(response => {
//               let querydatas = response.results
//               commit('SET_DATASET', querydatas)
//             })
//           api.getSingle('homepage')
//             .then(document => {
//               let homepagedatas = document.data
//               commit('SET_HOMEPAGE', homepagedatas)
//             })
//           api.getSingle('liste_clients')
//             .then(document => {
//               let listclients = document.data.clients_list
//               commit('SET_CLIENTS', listclients)
//             })
//           api.query(Prismic.Predicates.at('document.type', 'projet'), {
//               orderings: '[my.projet.date desc]'
//             })
//             .then(response => {
//               let realisations = response.results
//               commit('SET_REALISATIONS', realisations)
//             })
//         }

//         function initApi() {
//           let api = Prismic.getApi("https://tulipes-cie.prismic.io/api/v2")
//           return api
//         }
//         await initApi().then(function (api) {
//           queryAll(api)
//         }).catch(err => console.log(err))
//       },

//       //Nuxt Server Init
//     //   async nuxtServerInit({
//     //     commit,
//     //     dispatch
//     //   }) {
//     //     await dispatch('PRISMIC_CALL');
//     //   }
//     }
//   })
// }

// export default createStore
