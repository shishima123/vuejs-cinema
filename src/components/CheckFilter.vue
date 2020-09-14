<template>
  <div class="check-filter" @click="checkFilter()" :class="{ active: checked}">
    <span class="checkbox"></span>
    <span class="check-filter-title">{{ genre }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
  name: "check-filter",
  props: ["genre"],
  methods: {
    checkFilter() {
      this.checked = !this.checked;
      this.$emit("check-filter:click", {
        category: "genre",
        title: this.genre,
        checked: this.checked,
      });
    },
  },
};
</script>

<style>
</style>