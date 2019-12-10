<template>
  <div>
    <movie-search @search-term="onSearchTermChanged"/>
    <div class="container mt-4">
      <h3>Selected {{ counterOfSelectedMovies.length }} movie(s).</h3>          
      <movies-row 
        v-for="movie in filterMovies" 
        :key="movie.id"
        :movie="movie"
        @selected-movie = "selectMovie"
        :isSelected = "isSelected"/>
      <div v-if="filterMovies.length === 0">
        {{ errorMessage }}
      </div>
      <button class="btn btn-primary btn-sm mr-4" @click="selectAll">Select All</button>
      <button class="btn btn-warning btn-sm" @click="deselectAll">Deselect All</button>    
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
          counterOfSelectedMovies: [],
          isSelected : false
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
    },
    selectAll(){
      this.isSelected=true;
      this.counterOfSelectedMovies=[];
      this.movies.map(movie=> this.counterOfSelectedMovies.push(movie));
    },
    deselectAll(){
      this.isSelected=false;
      this.counterOfSelectedMovies=[];
  },

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