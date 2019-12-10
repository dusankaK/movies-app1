<template>
  <div>
    <movie-search @search-term="onSearchTermChanged"/>
    <div class="container mt-4">
      <h3>Selected {{ counterOfSelectedMovies.length }} movie(s).</h3>          
      <movies-row 
        v-for="movie in filterMovies" 
        :key="movie.id"
        :movie="movie"
        @selected-movie = "selectMovie"/>
      <div v-if="filterMovies.length === 0">
        {{ errorMessage }}
      </div>    
    </div>
  </div>
</template>

<script>
import MoviesRow from '../components/MoviesRow.vue'
import MovieSearch from '../components/MovieSearch.vue'
import {movies} from '../services/MovieService'

export default {
  components: {
    MoviesRow,
    MovieSearch
  },

  data() {
      return {
          movies: [],
          title: '',
          errorMessage:'There is no movies on the list.',
          counterOfSelectedMovies: []
      }
  },

  computed:{
   filterMovies(){
     return this.movies.filter(movie => movie.title.toLowerCase().
     includes(this.title.toLowerCase()))
   }
 },
  methods: {
    onSearchTermChanged(title) {
      this.title = title
    },
    selectMovie(movie){
      this.counterOfSelectedMovies.push(movie)
    }
  },

  beforeRouteEnter (to, from, next) {
      movies.index().then(({data}) => {
          next(vm =>{
              vm.movies = data
              
          })
      })
      .catch(err => console.log(err))
  }
}
</script>

<style>
</style>