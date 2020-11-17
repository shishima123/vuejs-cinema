<template>
  <div id="movie-list">
    <div v-if="filteredMovies.length > 0">
      <movie-item class="movie" v-for="(movie, key) in filteredMovies" :key="movie.id" :movie="movie.movie"></movie-item>
    </div>
    <div v-else-if="movies.length > 0" class="no-results">
      No result for {{ filteredGenes }}
    </div>
    <div v-else class="no-results">
      Loading...
    </div>
  </div>
</template>

<script>
  import MovieItem from "./MovieItem";
export default {
  name: "MovieList",
  props: ["movies", "genres", "times"],
  methods: {
    moviePassesGenreFilter(movie) {
      if (this.genres.length > 0) {
        let movieGenres = movie.movie.Genre.split(',')
        let matched = false
        this.genres.forEach(genres => {
          if (movieGenres.includes(genres)) {
            matched = true
          }
        })
        return matched;
      }
      return true;
    },
  },
  computed: {
    filteredMovies() {
      return this.movies.filter(this.moviePassesGenreFilter);
    },
    filteredGenes() {
      return this.genres.join(', ')
    }
  },
  components: {
    MovieItem
  }
};
</script>

<style>
</style>