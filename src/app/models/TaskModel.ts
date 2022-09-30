export class TaskModel {
  id: number = 0
  userId: number = 0
  title: string
  completed: boolean

  constructor(id: number, titleTask: string, userId: number, isCompleted: boolean = false) {
    this.title = titleTask
    this.id = id
    this.userId = userId
    this.completed = isCompleted
  }
}
