<template>
    <v-container class="second-fold px-12">
        <v-row align="center" justify="start" class="">
            <v-col cols="10" class="pb-0">
                <v-tabs
                center-active
                show-arrows
                background-color="transparent"
                color="yellow"
                >
                    <v-tab
                    v-for="(item, i) in menu"
                    :key="i">{{ item }} <v-icon v-if="item === 'MORE'"> mdi-menu-down </v-icon> </v-tab>
                </v-tabs>
            </v-col>
            <v-col cols="2" class="pb-0">
                <v-btn 
                block
                color="yellow"
                dark>
                    <v-icon>mdi-star</v-icon> 179

                </v-btn>
            </v-col>
            <v-col cols="12" class="pt-0">
                <v-divider class="px-12"></v-divider>
            </v-col>
        </v-row>
        <v-row align="center">
            <v-col cols="2">
                <v-btn
                icon>
                    <v-icon>
                        mdi-menu
                    </v-icon>
                </v-btn>
                <v-btn
                icon>
                    <v-icon>
                        mdi-apps
                    </v-icon>
                </v-btn>
            </v-col>
            <v-col
            cols="6">
                <v-row no-gutters>
                    <v-col cols="12">
                        <v-subheader class="">IMDb Rating</v-subheader>
                    </v-col>
                    <v-col cols="12">
                        <v-slider
                        v-model="slider"
                        hide-details
                        color="yellow"
                        thumb-label="always"
                        track-color="rgba(0,0,0,0.1)">

                        </v-slider>
                    </v-col>
                </v-row>
            </v-col>
            <v-col
            cols="4">
                <v-col cols="12">
                    <v-text-field
                    hide-details
                    append-icon="mdi-magnify" />
                </v-col>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" md="4" v-for="(movie, i) in movies" :key="i">
                <v-card
                @click="showCard(i)"
                color="rgba(255,255,255, 1)"
                hover>
                    <v-img
                    height="300px"
                    position="bottom"
                    eager
                    :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"/>
                    <v-col cols="12" class="card-content-box">
                        <v-row align-content="space-between" class="fill-height">
                            <v-col cols="12" class="py-0">
                                <h3>
                                    {{ movie.original_title }}
                                </h3>
                                <h4 v-if="movie.genre_ids" class="yellow--text pb-2 movie-subt">
                                    <span :key="i" v-for="(genre, i) in movie.genre_ids">
                                        {{ `${genres.find(({id}) => id === genre).name}` }}
                                    </span>
                                </h4>
                            </v-col>
                            <v-col cols="12" class="py-0">
                                <p class="pb-0 mb-0">
                                    <v-icon color="red">mdi-heart</v-icon>
                                    {{ `${movie.vote_average} ` }}
                                </p>
                            </v-col>
                        </v-row>

                    </v-col>
                </v-card>
                <v-overlay
                opacity="0.5"
                :value="selectedOverlay.id === i && selectedOverlay.show">

                    <v-container class="movie-card white pa-0">
                        <v-row align="end" class="white" >
                            <v-col cols="5" class="red pa-0 movie-card-image">
                                <v-img
                                class="fill-height"
                                eager
                                :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"/>
                            </v-col>
                            <v-col class="white pa-0 fill-height">
                                
                                <v-col cols="12" class="white">
                                    <v-col cols="12">
                                        <h2 class="black--text">{{ movie.original_title }}</h2>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-row justify="space-between">
                                            <v-col cols="6">
                                                <h4 v-if="movie.genre_ids" class="pb-2">
                                                    <span class="blue--text" :key="i" v-for="(genre, i) in movie.genre_ids">
                                                        {{ `${genres.find(({id}) => id === genre).name}` }}
                                                    </span>
                                                </h4>
                                            </v-col>
                                            <v-col cols="6"
                                            class="text-end">
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-divider light></v-divider>
                                    <v-col cols="12">
                                        <v-row class="black--text">
                                            <v-col 
                                            cols="4" class="text-center">
                                                <v-icon 
                                            color="red">mdi-heart</v-icon> {{ `${movie.vote_average} ` }} <br>
                                                Rating
                                            </v-col>
                                            <v-col
                                            class="text-center" cols="4">
                                                <v-icon color="blue">mdi-thumb-up</v-icon>{{ ` ${movie.vote_count} ` }} <br>
                                                Vote Count
                                            </v-col>
                                            <v-col
                                            class="text-center" cols="4">
                                                <v-icon color="yellow">mdi-trophy</v-icon>{{ ` ${movie.popularity} ` }} <br>
                                                Popularity
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-col>
                                <v-spacer class="fill-height"></v-spacer>

                                <v-col cols="12" class="">
                                    <v-col cols="12" class="black--text">
                                        {{ movie.overview }}
                                    </v-col>
                                    <v-col cols="12">
                                        <a class="no-underline" href="http://google.com">FULL MOVIE PROVILE <v-icon 
                                        color="blue">mdi-arrow-right</v-icon></a>
                                    </v-col>
                                </v-col>
                                <v-col cols="12" class="pa-0 fill-height">
                                    <v-row no-gutters class="fill-height">
                                        <v-col cols="6">
                                            <v-btn
                                            color="yellow"
                                            tile
                                            x-large
                                            block>
                                                <span class="text-none">
                                                    Watch Trailer <v-icon>
                                                        mdi-play</v-icon> 
                                                </span>
                                            </v-btn>
                                        </v-col>
                                         <v-col cols="6">
                                            <v-btn
                                            color="grey"
                                            tile
                                            x-large
                                            block>
                                                <span
                                                class="text-none yellow--text">
                                                    To Watchlist
                                                    <v-icon color="yellow">mdi-star</v-icon>
                                                </span>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-col>


                                    
                            </v-col>
                        </v-row>
                        <v-btn
                        color="grey"
                        absolute
                        right
                        top
                        icon
                        @click="selectedOverlay.show = !selectedOverlay.show"
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-container>
                    
                </v-overlay>
            </v-col>
        </v-row>
    </v-container>  
</template>

<script>
import axios from 'axios'

export default {
  data: function(){
      return {
        menu: ["IN THEATERS", "COMING SOON", "CHARTS", "TV SERIES", "TRAILERS", "MORE"],
        slider: 75,
        movies: [],
        genres: [],
        selectedOverlay:{
            show: false,
            id: -1
        }
      }
  },
  created: function(){
      this.getGenres()
      this.getMovies()
    },
    methods: {
        getMovies(){
            axios.get('https://api.themoviedb.org/3/discover/movie?api_key=2c1358119aa412af013455158e6a9459&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
            .then((response)=>{
                this.movies = response.data.results;
                console.log(this.movies)
            })
            .catch((error)=>{
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        },
        getGenres(){
            axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=2c1358119aa412af013455158e6a9459&language=en-US')
            .then((response)=>{
                this.genres = response.data.genres;
                console.log(this.genres)
            })
            .catch((error)=>{
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        },
        showCard(id){
            this.selectedOverlay.show = true;
            this.selectedOverlay.id = id;
        }
    }
}
</script>

<style>

</style>