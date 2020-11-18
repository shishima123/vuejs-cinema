<template>
  <div id="app">
    <div id="title">
      <img src="/public/logo.png" />
      <h1>Vue.js Cinema</h1>
    </div>
    <div id="overview">
      <div class="main">
        <MovieList :movies="movies" :genres="genres" :times="times"></MovieList>
        <MovieFilter @check-filter:click="checkFilter"></MovieFilter>
      </div>
    </div>
  </div>
</template>

<script>
import MovieList from "./components/MovieList";
import MovieFilter from "./components/MovieFilter";
export default {
  data() {
    return {
      movies: [],
      genres: [],
      times: [],
    };
  },
  name: "App",
  components: {
    MovieList,
    MovieFilter,
  },
  methods: {
    checkFilter(category, title, checked) {
      if (checked) {
        this[category].push(title);
      } else {
        this[category] = this[category].filter((item) => item !== title);
      }
    },
  },
  created() {
    this.$http.get('/api').then(response => {
      this.movies = response.data
    }, error => {
      console.log(error)
    })
  }
};
</script>

<style>
</style>