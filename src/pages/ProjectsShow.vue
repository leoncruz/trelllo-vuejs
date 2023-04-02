<template>
  <h1 class="text-3xl">Project {{ route.params.id }}</h1>

  <div class="mt-4 flex flex-row flex-nowrap justify-evenly space-x-4">
    <ProjectBoard :tasks-lists="tasksLists"></ProjectBoard>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

import ProjectBoard from 'components/ProjectBoard.vue';

import { TaskList } from '@/models/TaskList';
import { ProjectsRepository } from '@/projects/ProjectsRepository';

const route = useRoute();

const projectsRepo = new ProjectsRepository();

const tasksLists = ref([] as TaskList[]);

onMounted(async () => {
  tasksLists.value = await projectsRepo.getLists();
});
</script>

<style scoped></style>
