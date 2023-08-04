import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlashboxComponent } from './flashbox/flashbox.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  { path: 'fb', component: FlashboxComponent, data: { state: 'fb' }},
  { path: 'form', component: FormsComponent, data: { state: 'form' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
