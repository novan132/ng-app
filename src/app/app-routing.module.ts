import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FirstCompComponent } from './first-comp/first-comp.component';

const routes: Routes = [
  {
    path: 'home',
    component: FirstCompComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
