<template>
  <div id="movie-list">
    <div v-if="filteredMovies.length > 0">
      <movie-item
              class="movie"
              v-for="(movie, key) in filteredMovies"
              :key="movie.id"
              :movie="movie.movie"
              :sessions="movie.sessions"
              :times="times"
              :sessionPassesTimeFilter="sessionPassesTimeFilter"
      ></movie-item>
    </div>
    <div v-else-if="movies.length > 0" class="no-results">
      {{ noResults }}
    </div>
    <div v-else class="no-results">
      Loading...
    </div>
  </div>
</template>

<script>
  import MovieItem from "./MovieListItem";
  import timesConst from "../util/times";
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
    sessionPassesTimeFilter(session) {
      let currentDate = this.$moment.now()

      if (!this.$moment(session.time).isSame(currentDate, 'date')) {
        return false;
      } else if (this.times.length === 0 || this.times.length === Object.keys(timesConst).length) {
        return true;
      } else if (this.times[0] === timesConst.AFTER_6PM) {
        return this.$moment(session.time).hour() >= 18
      } else {
        return this.$moment(session.time).hour() < 18
      }
    }
  },
  computed: {
    filteredMovies() {
      return this.movies
              .filter(this.moviePassesGenreFilter)
              .filter(movie => movie.sessions.find(this.sessionPassesTimeFilter));
    },
    noResults() {
      let times = this.times.join(', ')
      let genres = this.genres.join(', ')
      return `No result for ${times}${times.length && genres.length ? ', ' : ''}${genres}`
    }
  },
  components: {
    MovieItem
  }
};
</script>

<style>
</style>