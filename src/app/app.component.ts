import { Component, inject } from '@angular/core';
import { TasksFacade } from './components/store/tasks.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'taskbox';
  facade = inject(TasksFacade)

  ngOnInit(){
    this.facade.loadTasks()
  }

}
