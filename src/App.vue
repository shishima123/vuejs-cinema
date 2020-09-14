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
import genreConst from "./util/genres";
export default {
  data() {
    return {
      movies: [
        { title: "The Hobbit", genre: genreConst.FANTASY },
        { title: "The Avenger", genre: genreConst.DRAMA },
        { title: "The End Game ", genre: genreConst.DRAMA },
      ],
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
    checkFilter(data) {
      if (data.checked) {
        this.genres.push(data.title);
      } else {
        this.genres = this.genres.filter((item) => item != data.title);
      }
    },
  },
};
</script>

<style>
</style>