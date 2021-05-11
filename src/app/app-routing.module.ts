import { MoviesComponent } from './movies/movies.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { News2Component } from './news2/news2.component';
import { NewsComponent } from './news/news.component';
import { SettingComponent } from './setting/setting.component';
import { ErrPageComponent } from './err-page/err-page.component';
import { ProfileComponent } from './profile/profile.component';
import { ToDoViewComponent } from './toDo/to-do-view/to-do-view.component';
import { ToDoBodyComponent } from './toDo/to-do-body/to-do-body.component';
import { PractiseComponent } from './practise/practise.component';
import { BodyComponent } from './body/body.component';
import { CovidTrackerComponent } from './covid-tracker/covid-tracker.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: PractiseComponent},
  { path: 'login', component: PractiseComponent},
  { path: 'home', component: ToDoBodyComponent},
  {path: 'add', component: ToDoBodyComponent },
  { path: 'view', component: ToDoViewComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingComponent },
  { path: 'covid-tracker', component: CovidTrackerComponent },
  { path: 'error', component: ErrPageComponent },
  { path: 'news', component: News2Component },
  { path: 'news', component: News2Component },
  { path: 'dictionary', component: DictionaryComponent },
  { path: 'movies', component: MoviesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
