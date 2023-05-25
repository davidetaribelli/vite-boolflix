<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import axios from 'axios';

export default {
  components: {
    AppHeader,
    AppMain,
  }
}
</script>

<template>
  <AppHeader />
</template>


<style lang="scss">
@use './style/general.scss' as *;
</style>