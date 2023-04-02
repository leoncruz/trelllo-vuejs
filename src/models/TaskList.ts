import { Task } from 'models/Task';

export class TaskList {
  constructor(data: Partial<TaskList>) {
    Object.assign(this, data);
  }

  name: string;
  status: string;
  tasks: Task[];
}
