import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { BusinessDashboardComponent } from './business-dashboard.component';

const routes: Routes = [{ path: '', component: BusinessDashboardComponent }];

@NgModule({
  declarations: [BusinessDashboardComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class BusinessDashboardModule {}
