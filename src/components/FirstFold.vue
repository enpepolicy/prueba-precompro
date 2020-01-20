<template>
    <v-container fluid class="first-fold py-0">
      <v-row class="fill-height" align-content="space-between">
        <v-col class="py-0" cols="12">
          <v-row>
            <v-col cols="3"  >
              <v-img
              class="pa-3"
              position="left"
              max-height="5em"
              contain
              :src="require('@/assets/img/imdb-logo.png')"/>
            </v-col>
            <v-col cols="6" class="">
              <v-row align="center" justify="center" class="fill-height">
                <v-btn
                class="menu-btn"
                v-for="(btn, i) in menu"
                :key="i"
                text>
                  {{ btn }}
                </v-btn>
              </v-row>
            </v-col>
            <v-col cols="3" class="">
              <v-col>
                <v-row justify="end" align="center" class="fill-height">
                  <v-avatar>
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                    />
                  </v-avatar>
                </v-row>     
              </v-col>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" class="">
          <v-container>
            <v-row align="center" class="">
              <v-col cols="12" class="pb-0">
                <h2 class="font-weight-black white--text main-tit ">THE MARTIAN</h2>
              </v-col>
              <v-col cols="12" class="pt-0">
                <v-row>
                  <v-btn
                  text
                  dark>
                    ADVENTURE
                  </v-btn>

                  <v-btn
                  text
                  dark>
                    SCI-FI
                  </v-btn>

                  <v-btn
                  text
                  dark>
                    THRILLER
                  </v-btn>
                </v-row>
              </v-col>
              <v-col cols="12" class="pt-10">
                <v-btn
                x-large
                color="yellow"
                rounded>
                  <span  
                  class="text-none holaade">
                    Watch Trailer <v-icon right>mdi-play-circle-outline</v-icon>
                  </span>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col 
        class="py-0"
        cols="12">
          <v-container>
            <v-row>
              <v-col class="py-0">
                <h3 class="theaters-text">In theaters</h3>
                <h3 class="theaters-sub-text">15 Oct, 2015</h3>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  data: () => ({
    menu: ["Movies", "Celebs & Photos", "Community", "News"]
    //
  }),
}
</script>

<style>

</style>