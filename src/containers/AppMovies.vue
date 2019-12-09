<template>
  <div class="container mt-4">
   <movies-row 
        v-for="movie in movies" 
        :key="movie.id"
        :movie = "movie"/>
  </div>
</template>

<script>
import MoviesRow from '../components/MoviesRow.vue'
import {movies} from '../services/MovieService'

export default {
  components: {
    MoviesRow,
  },

  data() {
      return {
          movies: []
      }
  },

  beforeRouteEnter (to, from, next) {
      movies.getAll().then(({data}) => {
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