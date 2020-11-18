<template>
  <div id="movie-filter">
    <h2>Filter Result</h2>
    <h3>By time of day</h3>
    <div class="filter-group">
      <check-filter v-for="(time, key) in times" category="times" :key="key" :title="time" @check-filter:click="checkFilter" />
    </div>

    <h3>By genre</h3>
    <div class="filter-group">
      <check-filter v-for="(genre, key) in genres" category="genres" :key="key" :title="genre" @check-filter:click="checkFilter" />
    </div>
  </div>
</template>

<script>
import genres from "../util/genres";
import times from "../util/times"
import CheckFilter from "./MovieFilterCheck";
export default {
  data() {
    return {
      genres,
      times,
    };
  },
  components: {
    CheckFilter,
  },
  methods: {
    checkFilter(category, title, checked) {
      this.$emit('check-filter:click', category, title, checked)
    }
  }
};
</script>

<style>
</style>