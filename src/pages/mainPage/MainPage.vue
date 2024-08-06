<script setup lang="ts">
import {ref} from 'vue';
import { Task, taskList } from './mockData.ts';

const tasks: Task[] = ref(taskList);
console.log(tasks);
</script>

<template>
   <h1>Список задач</h1>
   <div>
      <ul>
         <li v-for="task in tasks" v-bind:key="task.id">{{ task.title }}</li>
      </ul>
   </div>
</template>

<style>
</style>