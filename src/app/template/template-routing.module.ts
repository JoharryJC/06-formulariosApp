import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './basicos/basicos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'basicos', component: BasicosComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  /*exports: [
    RouterModule
  ]*/
})
export class TemplateRoutingModule { }
