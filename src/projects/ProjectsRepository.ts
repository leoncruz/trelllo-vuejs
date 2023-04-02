import { Task } from 'models/Task';
import { TaskList } from 'models/TaskList';

export class ProjectsRepository {
  async getLists(): Promise<TaskList[]> {
    const taskLists: TaskList[] = [
      new TaskList({
        name: 'To do',
        status: 'todo',
        tasks: []
      }),
      new TaskList({
        name: 'Doing',
        status: 'doing',
        tasks: []
      }),
      new TaskList({
        name: 'Done',
        status: 'done',
        tasks: []
      })
    ];

    const loremSent =
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.';

    taskLists[0].tasks.push(
      ...[
        new Task({
          id: 1,
          name: 'Task',
          taskList: taskLists[0],
          description: loremSent
        }),
        new Task({
          id: 2,
          name: 'Task',
          taskList: taskLists[0],
          description: loremSent
        }),
        new Task({
          id: 3,
          name: 'Task',
          taskList: taskLists[0],
          description: loremSent
        }),
        new Task({
          id: 4,
          name: 'Task',
          taskList: taskLists[0],
          description: loremSent
        })
      ]
    );

    taskLists[1].tasks.push(
      ...[
        new Task({
          id: 6,
          name: 'Task',
          taskList: taskLists[1],
          description: loremSent
        }),
        new Task({
          id: 7,
          name: 'Task',
          taskList: taskLists[1],
          description: loremSent
        }),
        new Task({
          id: 8,
          name: 'Task',
          taskList: taskLists[1],
          description: loremSent
        }),
        new Task({
          id: 9,
          name: 'Task',
          taskList: taskLists[1],
          description: loremSent
        }),
        new Task({
          id: 10,
          name: 'Task',
          taskList: taskLists[1],
          description: loremSent
        }),
        new Task({
          id: 11,
          name: 'Task',
          taskList: taskLists[1],
          description: loremSent
        }),
        new Task({
          id: 12,
          name: 'Task',
          taskList: taskLists[1],
          description: loremSent
        })
      ]
    );

    taskLists[2].tasks.push(
      ...[
        new Task({
          id: 13,
          name: 'Task',
          taskList: taskLists[2],
          description: loremSent
        }),
        new Task({
          id: 14,
          name: 'Task',
          taskList: taskLists[2],
          description: loremSent
        }),
        new Task({
          id: 15,
          name: 'Task',
          taskList: taskLists[2],
          description: loremSent
        })
      ]
    );

    return taskLists;
  }
}
