<script setup lang="ts">
import DisplayAward from '../components/DisplayAward.vue';
import DisplayGame from '../components/DisplayGame.vue';
import DisplayMemberSort from '../components/DisplayMemberSort.vue';

// 9800

// 2000 * 1
// 1200 * 1
// 1000 * 1
// 800 * 3
// 600 * 3
// 200 * 7

</script>

<template>
  <div class="flex gap-5 p-5">
    <div class="flex-auto border-2">
      <display-award></display-award>
    </div>
    <div class="flex-auto border-2">
      <display-game></display-game>
    </div>
    <div class="flex-auto border-2">
      <display-member-sort></display-member-sort>
    </div>
  </div>
</template>

<style>
</style>