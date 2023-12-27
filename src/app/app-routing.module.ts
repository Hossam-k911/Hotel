import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesGuard } from './core/Guards/roles.guard';
import { AdminGuard } from './core/Guards/admin/admin.guard';
import { UserGuard } from './core/Guards/user/user.guard';

const routes: Routes = [
  { path: '', redirectTo: 'core', pathMatch: 'full' },
  {
    path: 'core',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
  },
  // {
  //   path: 'features',
  //   canActivate: [RolesGuard],
  //   loadChildren: () =>
  //     import('./features/features.module').then((m) => m.FeaturesModule),
  // },

  {
    path: 'admin',
    canActivate: [AdminGuard, RolesGuard],
    loadChildren: () =>
      import('./features/Admin/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'landing-page',
    canActivate: [UserGuard, RolesGuard],
    loadChildren: () =>
      import('./features/landing-page/landing-page/landing-page.module').then(
        (m) => m.LandingPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
