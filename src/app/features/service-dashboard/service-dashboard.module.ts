import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { DashboardShellComponent } from '../shared/dashboard-shell/dashboard-shell.component';
import { MetricGridComponent } from '../shared/metric-grid/metric-grid.component';
import { ServiceDashboardComponent } from './service-dashboard.component';

const routes: Routes = [{ path: '', component: ServiceDashboardComponent }];

@NgModule({
  declarations: [ServiceDashboardComponent, DashboardShellComponent, MetricGridComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class ServiceDashboardModule {}
