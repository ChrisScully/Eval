import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';


import {RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { ProfileComponent } from './profile/profile.component';
import { HeadingComponent } from './heading/heading.component';
import { SearchComponent } from './search/search.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ReviewComponent } from './review/review.component';
import { CourseComponent } from './course/course.component';

// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';

//List of Pages for Web App
const appRoutes: Routes = [
  {path: '', redirectTo: '/search', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'search', component: SearchComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'review', component: ReviewComponent},
  {path: 'course', component: CourseComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProfileComponent,
    HeadingComponent,
    SearchComponent,
    SearchBarComponent,
    ReviewComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <- For Debugging
    ),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
