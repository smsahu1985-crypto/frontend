import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'service' },
  {
    path: 'service',
    loadChildren: () =>
      import('./features/service-dashboard/service-dashboard.module').then((m) => m.ServiceDashboardModule),
  },
  {
    path: 'business',
    loadChildren: () =>
      import('./features/business-dashboard/business-dashboard.module').then((m) => m.BusinessDashboardModule),
  },
  {
    path: 'operations',
    loadChildren: () =>
      import('./features/operations-dashboard/operations-dashboard.module').then((m) => m.OperationsDashboardModule),
  },
  { path: '**', redirectTo: 'service' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
