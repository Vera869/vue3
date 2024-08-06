<script setup lang="ts">
import {ref} from 'vue';
import { Task, taskList } from './mockData.ts';
import AddTaskForm from './components/addTaskComponent/AddTaskForm.vue';

const tasks: Task[] = ref(taskList);

const onAddTask = (title: string, discription: string) => {
   const newTask: Task = {
      id: tasks.value.length + 1,
      title: title,
      discription: discription,
      completed: false,
   };
   tasks.value = [...tasks.value, newTask];
}
</script>

<template>
   <div class="main">
      <h1 class="main_header">Список задач</h1>
      <div class="main_tasks">
         <ul class="tasks">
            <li class="tasks_title" v-for="task in tasks" v-bind:key="task.id">{{ task.title }}
               <p class="tasks_discript">{{ task.discription }}</p>
            </li>
         </ul>
      </div>
      <AddTaskForm :onAddTask="onAddTask" />
   </div>
</template>

<style scoped>
.main {
   width: 70vw;
   background: hsla(52, 90%, 51%, 0.5) ;
   color: darkgreen;
   border: 2px solid green;
   border-radius: 20px;
   padding: 20px 40px;
   display: block;
}
.main_tasks {
   width: 40vw;
   height: auto;
}
.tasks_title, .tasks_discript {
  width: 60vw;
  padding: 3px;
  word-wrap: break-word;
}

</style>