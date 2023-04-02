<template>
  <div
    v-for="(taskList, index) in props.tasksLists"
    :key="index"
    class="shadow border rounded max-w-[400px] h-fit flex items-center flex-col p-4 space-y-2"
  >
    <ListCard :task-list="taskList"></ListCard>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

import ListCard from 'components/ListCard.vue';
import { TaskList } from 'models/TaskList';

const props = defineProps<{ tasksLists: TaskList[] }>();
</script>

<style scoped></style>
