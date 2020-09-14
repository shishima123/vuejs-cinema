<template>
  <div id="movie-list">
    <div>
      <div class="movie" v-for="(movie, key) in filteredMovies" :key="key">{{ movie.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieList",
  props: ["movies", "genres", "times"],
  methods: {
    moviePassesGenreFilter(movie) {
      if (this.genres.length > 0) {
        return this.genres.find((genre) => genre === movie.genre);
      }
      return true;
    },
  },
  computed: {
    filteredMovies() {
      return this.movies.filter(this.moviePassesGenreFilter);
    },
  },
};
</script>

<style>
</style>