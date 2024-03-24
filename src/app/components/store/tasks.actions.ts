import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Task } from "src/app/models/task.model";

export const TasksActions = createActionGroup({
  source: 'Tasks',
  events: {
    loadTasks: emptyProps(),
    loadTasksSuccess: props<{tasks: Task[]}>()
  }
})
