<script setup lang="ts">
import './MainPage.css'
import {ref} from 'vue';
import { type Task, taskList } from './mockData';
import AddTaskForm from './components/addTaskComponent/AddTaskForm.vue';

const tasks: Task[] = ref(taskList);
const errorMessage: string = "Пожалуйста, укажите название задачи и описание задачи";
let errorState: boolean = ref(false);

const onAddTask = (title: string, discription: string) => {
   const newTask: Task = {
      id: tasks.value.length + 2,
      title: title,
      discription: discription,
      completed: false,
   };
   if(!title || !discription) {
      errorState.value = true;
      console.log(errorState.value);
   } else {
      tasks.value = [...tasks.value, newTask];
   }
}

const deleteTaskHandle = (id: number) => {
   tasks.value = tasks.value.filter(el => el.id !== id);
}

const toggleCompleted = (id: number) => {
   const index = tasks.value.findIndex(el => el.id === id);
   const taskById = tasks.value[index];

   tasks.value[index] = {...taskById, completed: !taskById.completed};
}

</script>

<template>
   <div class="main">
      <h1 class="main_header">Список задач</h1>
      <div class="main_tasks">
         <ul class="tasks">
            <li class="task" 
               v-for="task in tasks" 
               v-bind:key="task.id">
               <div class="task_heder">
                  <input class="task_checkbox" 
                        @click="() => toggleCompleted(task.id)" 
                        :checked="task.completed" 
                        type="checkbox"/>
                  <p class="task_title">{{ task.title }}</p>
                  <span class="task-delete" @click="() => deleteTaskHandle(task.id)" >X</span>
               </div>
               <p class="task_discript">{{ task.discription }}</p>
            </li>
         </ul>
      </div>
      <AddTaskForm :onAddTask="onAddTask" />
      <p :class="{task_error: true, task_error_active: errorState.value===true}">{{errorMessage}}</p>
   </div>
</template>
