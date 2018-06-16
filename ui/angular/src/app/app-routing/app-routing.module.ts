import { HomeComponent } from './../components/home/home.component';
import { JobsComponent } from './../components/jobs/jobs.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'jobs', pathMatch: 'full', component: JobsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
