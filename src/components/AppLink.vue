<template>
  <router-link
    :to="path"
    :class="active ? 'bg-black text-white rounded' : ''"
    class="py-2 px-4"
    >{{ props.name }}</router-link
  >
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps<{ path: string; name: string }>();
const route = useRoute();

const active = computed(() => {
  return route.path === props.path;
});
</script>

<style scoped></style>
