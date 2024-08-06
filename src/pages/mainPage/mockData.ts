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
      discription: '123456789',
      completed: false,
   },
   {
      id: 2,
      title: 'Задача 2',
      discription: '0987654321',
      completed: true,
   },
   {
      id: 3,
      title: 'Задача 3',
      discription: '0192837465',
      completed: false,
   }
]