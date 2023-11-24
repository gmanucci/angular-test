import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TestIndexComponent } from './test-index/test-index.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'test-index',
    component: TestIndexComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
