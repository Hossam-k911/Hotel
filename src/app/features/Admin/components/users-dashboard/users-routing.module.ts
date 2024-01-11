import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersDashboardComponent } from './components/users/users-dashboard.component';
import { ViewUserComponent } from './components/view-user/view-user.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: UsersDashboardComponent },
  { path: 'view/:id', component: ViewUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
