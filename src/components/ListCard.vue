<template>
  <h3 class="text-2xl">{{ props.taskList.name }}</h3>

  <div
    v-for="task in props.taskList.tasks"
    :key="task.id"
    class="shadow border rounded max-w-[300px] p-4"
  >
    <CardItem :task="task"></CardItem>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

import CardItem from 'components/CardItem.vue';
import { TaskList } from 'models/TaskList';

const props = defineProps<{ taskList: TaskList }>();
</script>

<style scoped></style>
