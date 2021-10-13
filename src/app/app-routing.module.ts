import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'create', loadChildren: () => import('./create/create.module').then(m => m.CreateModule) }, { path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
