import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { FormEditorComponent } from './form-editor/form-editor.component';
const routes: Routes = [
  { path: 'customers', component: DashboardComponent},
  { path: 'customerdetail/:id', component: CustomerDetailsComponent},
  { path: 'customers/customerorder/:id', component: CustomerDetailsComponent},
  { path: 'customerDetails/edit/:id', component: FormEditorComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 })
export class AppRoutingModule {}