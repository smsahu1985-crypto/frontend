import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { OperationsDashboardComponent } from './operations-dashboard.component';

const routes: Routes = [{ path: '', component: OperationsDashboardComponent }];

@NgModule({
  declarations: [OperationsDashboardComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class OperationsDashboardModule {}
