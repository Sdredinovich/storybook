import { Store } from '@ngrx/store';
import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TasksActions } from './tasks.actions';
import { map, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Task } from 'src/app/models/task.model';

const tasks = [
  { id: '1', title: 'Something', state: 'TASK_INBOX' },
  { id: '2', title: 'Something more', state: 'TASK_INBOX' },
  { id: '3', title: 'Something else', state: 'TASK_INBOX' },
  { id: '4', title: 'Something again', state: 'TASK_INBOX' },
  { id: '5', title: 'Something again', state: 'TASK_ARCHIVED' },
  { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' }

]



export const loadTasks = createEffect((store = inject(Store), actions = inject(Actions), api = inject(HttpClient))=>{
  return actions.pipe(
    ofType(TasksActions.loadTasks),
    switchMap(()=>{
      return api.get<Task[]>("https://jsonplaceholder.typicode.com/todos").pipe(
        map(task=>TasksActions.loadTasksSuccess({tasks}))
      )
    })
  )
}, {functional: true})
