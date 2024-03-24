import { action } from '@storybook/addon-actions';
import { TasksActions } from './tasks.actions';
import { createFeature, createReducer, on } from "@ngrx/store";
import { Task } from "src/app/models/task.model";

export interface TasksState  {
  tasks: Task[]
  loading: boolean;
  error: null | string
}

export const tasksInitialState: TasksState  = {
  tasks: [],
  loading: false,
  error: null
}

export const tasksFeature = createFeature({
  name: 'tasks',
  reducer: createReducer(
    tasksInitialState,
        on(TasksActions.loadTasks, (state) => ({
      ...state,
      loading: true
    })),
    on(TasksActions.loadTasksSuccess, (state, {tasks})=>({
      ...state, tasks: [...tasks], loading: false
    }))
  )
})
