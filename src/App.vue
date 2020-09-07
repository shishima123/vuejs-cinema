<template>
  <div id="app">
    <div id="title">
      <img src="/public/logo.png">
      <h1>Vue.js Cinema</h1>
    </div>
    <div id="overview">
      <div class="main">
        <MovieList></MovieList>
        <MovieFilter></MovieFilter>
      </div>
    </div>
  </div>
</template>

<script>
import MovieList from './components/MovieList';
import MovieFilter from './components/MovieFilter'
export default {
  name: 'App',
  components: {
    MovieList,
    MovieFilter
  }
}
</script>

<style>
</style>