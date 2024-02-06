<script setup lang="ts">
import DisplayAward from '../components/DisplayAward.vue';
import DisplayGame from '../components/DisplayGame.vue';
import DisplayMemberSort from '../components/DisplayMemberSort.vue';
import DisplayCurrentInfo from '../components/DisplayCurrentInfo.vue';
</script>

<template>
  <div class="p-5">
    <div class="mb-5 border-2">
      <display-current-info />
    </div>
    <div class="flex gap-5">
      <div class="flex-auto border-2">
        <display-award />
      </div>
      <div class="flex-auto border-2">
        <display-game />
      </div>
      <div class="flex-auto border-2">
        <display-member-sort />
      </div>
    </div>
  </div>
</template>

<style>
</style>