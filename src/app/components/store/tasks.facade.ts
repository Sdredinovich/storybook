import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { TasksActions } from "./tasks.actions";

Injectable({providedIn: "root"})

export class TasksFacade {

  store = inject(Store)






  loadTasks(){
    this.store.dispatch(TasksActions.loadTasks())
  }



}


