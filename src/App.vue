<template>
  <the-header />

  <div class="container mx-auto p-4 md:p-0">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import TheHeader from 'components/TheHeader.vue';

onMounted(() => {
  feather.replace();
});
</script>

<style scoped></style>
