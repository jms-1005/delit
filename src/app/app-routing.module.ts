import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlashboxComponent } from './flashbox/flashbox.component';

const routes: Routes = [
  { path: 'fb', component: FlashboxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
