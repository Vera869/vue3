<script setup lang="ts">
import {ref} from 'vue';
import './form.css';

const props = defineProps<{
   onAddTask:(taskTitle: string) => void;
}>()

const inputTitle = ref("");
const inputDiscription = ref("");

const handleTitleChange = (e: Event) => {
   const target = e.target as HTMLInputElement;
   inputTitle.value = target.value;
}

const handleDiscriptionChange = (e: Event) => {
   const target = e.target as HTMLInputElement;
   inputDiscription.value = target.value;
}

const addTaskHendle = () => {
   props.onAddTask(inputTitle.value, inputDiscription.value);
   inputTitle.value = "";
   inputDiscription.value = "";
}

</script>

<template>
   <div class="form">
      <input class="form_input" 
         @change="handleTitleChange" 
         type="text" 
         placeholder="название задачи" 
         :value="inputTitle" 
      />
      <input class="form_input" 
         @change="handleDiscriptionChange" 
         type="text" 
         placeholder="описание задачи" 
         :value="inputDiscription" 
      />
      <button class="form_button" @click="addTaskHendle" >Добавить</button>
   </div>
</template>
