<template>
  <div id="movie-filter">
    <h2>Filter Result</h2>
    <div class="filter-group">
      <check-filter v-for="(genre, key) in genres" :key="key" :genre="genre" @check-filter:click="checkFilter">
    </div>
  </div>
</template>

<script>
import genres from "../util/genres";
import CheckFilter from "./CheckFilter";
export default {
  data() {
    return {
      genres,
    };
  },
  components: {
    CheckFilter,
  },
  methods: {
    checkFilter(data) {
      this.$emit('check-filter:click', {
        category: data.category,
        title: data.title,
        checked: data.checked,
      })
    }
  }
};
</script>

<style>
</style>