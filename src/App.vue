<script setup lang="ts">
import Layout from "./layouts/Layout.vue"
</script>

<template>
  <Layout>
    <router-view #default="{ Component }">
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
    </router-view>
  </Layout>
</template>

<style scoped></style>