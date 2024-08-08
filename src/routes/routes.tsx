import AboutPage from "@/pages/aboutPage/AboutPage.vue";
import MainPage from "@/pages/mainPage/MainPage.vue";
import TaskPage from "@/pages/taskPage/TaskPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
   {
      path: '/',
      name: 'home',
      component: MainPage,
      children: [
         {
            path: '/task/:id',
            name: 'task',
            componnent: TaskPage,
         }
      ]
   },
   {
      path: '/about',
      component: AboutPage
   },
   {
      path: '/ex',
      component: TaskPage
   },
]

export const router = createRouter(
   {
      history: createWebHistory(),
      routes
   }
)