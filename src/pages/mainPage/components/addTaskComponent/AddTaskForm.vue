<script setup lang="ts">
import {ref} from 'vue';

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
      <button @click="addTaskHendle" class="form_button">Добавить</button>
   </div>
</template>

<style scoped>
.form {
   display: flex;
   flex-direction: column;
   gap: 12px;
   margin: 20px;
}
.form_input {
   width: 30vw;
   height: 3vw;
   outline:none;
   border: none;
   border-radius: 20px;
   border-bottom: 2px solid green;
   background: hsla(52, 90%, 51%, 0.5);
   color: green;
   padding: 1rem;
   &:action, hover, focus {
      border-color: green;
   }
}
.form_button {
   width: 20vw;
   height: auto;
   outline:none;
   border: none;
   border: 2px solid green;
   border-radius: 20px;
   background: hsla(52, 90%, 51%, 0.5);
   color: green;
   padding: 1rem;
   &:hover {
      background: greenyellow;
   }
   &:active {
      background:green;
   }
}

</style>