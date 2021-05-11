import { PractiseComponent } from './practise/practise.component';
import { PractiseHomeComponent } from './practise-home/practise-home.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CovidTrackerComponent } from './covid-tracker/covid-tracker.component';
import { PractiseFooterComponent} from './practise-footer/practise-footer.component';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Title } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { BodyComponent } from './body/body.component';
import { ToDoBodyComponent } from './toDo/to-do-body/to-do-body.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { ToDoViewComponent } from './toDo/to-do-view/to-do-view.component';
import { ClipboardModule } from 'ngx-clipboard';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';
import { DialogYesornoComponent } from './dialog-yesorno/dialog-yesorno.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrPageComponent } from './err-page/err-page.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { SettingComponent } from './setting/setting.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NewsComponent } from './news/news.component';
import { News2Component } from './news2/news2.component';
import { NgxLoadingModule,ngxLoadingAnimationTypes } from 'ngx-loading';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { MoviesComponent } from './movies/movies.component';
@NgModule({
  declarations: [
    AppComponent,
    CovidTrackerComponent,
    BodyComponent,PractiseFooterComponent,PractiseHomeComponent,
    PractiseComponent,
    ToDoBodyComponent,
    DialogBodyComponent,
    ToDoViewComponent,
    DialogEditComponent,
    DialogYesornoComponent,
    ProfileComponent,
    ErrPageComponent,
    SettingComponent,
    EditProfileComponent,
    ChangePassComponent,
    NewsComponent,
    News2Component,
    DictionaryComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.circleSwish,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '60px',
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff'
  }),


    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
MatProgressSpinnerModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,

    MatPaginatorModule,
    MatIconModule,
    MatTabsModule,
    MatMenuModule,
    MatToolbarModule,
    MatSortModule,
    MatListModule,MatGridListModule,MatBadgeModule,MatButtonToggleModule,MatDialogModule,
    ClipboardModule,
    MatTooltipModule,
MatTableModule,
MatSnackBarModule,
MatFormFieldModule,
MatInputModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
