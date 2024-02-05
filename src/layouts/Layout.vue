<script setup lang="ts">
  import Header from './Header.vue'
</script>

<template>
  <div class="h-screen">
    <Header></Header>
    <div class="mt-3">
      <slot></slot>
    </div>
  </div>
</template>

<style>
</style>