import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { tasksFeature } from './components/store/tasks.reducer';
import { TasksFacade } from './components/store/tasks.facade';
import { loadTasks } from './components/store/tasks.effects';
import { articlesEffects } from './components/store';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    StoreModule.forRoot({
      [tasksFeature.name]: tasksFeature.reducer
    }, {}),
    EffectsModule.forRoot([articlesEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [TasksFacade],
  bootstrap: [AppComponent]
})
export class AppModule { }
