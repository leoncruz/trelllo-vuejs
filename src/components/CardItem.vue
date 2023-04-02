<template>
  <p class="text-center">{{ props.task.name }} - #{{ props.task.id }}</p>
  <p class="truncate">
    {{ props.task.description }}
  </p>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

import { Task } from 'models/Task';

const props = defineProps<{ task: Task }>();
</script>

<style scoped></style>
