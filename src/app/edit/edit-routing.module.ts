import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit.component';
import { EditGuard } from '../edit/edit.guard'

const routes: Routes = [
  {
    path: '',
    canActivate: [EditGuard],
    component: EditComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoutingModule { }
