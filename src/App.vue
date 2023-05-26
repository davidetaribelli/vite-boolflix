<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import axios from 'axios';
import { store } from './data/store';


export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    }
  },
  mounted() {
    axios.get(this.store.urlApi).then(films => {
      this.store.film = films.data.results

    })

    axios.get(this.store.urlApiSerie).then(serie => {
      this.store.serieTv = serie.data.results
    })
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>


<style lang="scss">
@use './style/general.scss' as *;
</style>