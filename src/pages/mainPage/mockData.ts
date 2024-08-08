export interface Task {
   id: number,
   title: string,
   discription: string,
   completed: boolean,
}

export const taskList: Task[] = [
   {
      id: 1,
      title: 'Задача 1',
      discription: 'Создать приложение vue',
      completed: true,
   },
   {
      id: 2,
      title: 'Задача 2',
      discription: 'Изучить семантику vue',
      completed: false,
   },
   {
      id: 3,
      title: 'Задача 3',
      discription: 'Протестировать приложение',
      completed: false,
   }
]