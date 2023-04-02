import { TaskList } from 'models/TaskList';

export class Task {
  constructor(data: Partial<Task>) {
    Object.assign(this, data);
  }

  id: number;
  name: string;
  description: string;
  taskList: TaskList;
}
