<template>
  <div class="check-filter" @click="checkFilter()" :class="{ active: checked}">
    <span class="checkbox"></span>
    <span class="check-filter-title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
  name: "MovieFilterCheck",
  props: ["title", "category"],
  methods: {
    checkFilter() {
      this.checked = !this.checked;
      this.$emit("check-filter:click", this.category, this.title, this.checked);
    },
  },
};
</script>

<style>
</style>