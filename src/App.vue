<template>
  <v-app>
    <FirstFold/>
    <Movies/>
  </v-app>
</template>

<script>
import FirstFold from '@/components/FirstFold'
import Movies from '@/components/Movies'

export default {
  name: 'App',

  components: {
    FirstFold,
    Movies
  },

  data: () => ({
    //
  })
};
</script>

<style lang="scss">
@import '@/assets/css/style.scss';
</style>
