import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlashboxComponent } from './flashbox/flashbox.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  { path: 'fb', component: FlashboxComponent},
  { path: 'form', component: FormsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
