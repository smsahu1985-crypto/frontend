import { Component, OnInit } from '@angular/core';

import { DashboardData, ModalDetail } from '../../core/models/dashboard.models';
import { MockDashboardService } from '../../core/services/mock-dashboard.service';

@Component({
  selector: 'app-operations-dashboard',
  standalone: false,
  templateUrl: './operations-dashboard.component.html',
})
export class OperationsDashboardComponent implements OnInit {
  dashboard?: DashboardData;
  detail?: ModalDetail;
  loading = true;

  constructor(private readonly dashboardService: MockDashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getOperationsDashboard().subscribe((dashboard) => {
      this.dashboard = dashboard;
      this.loading = false;
    });
  }

  openDetail(key: string): void {
    this.dashboardService.getDetail(key).subscribe((detail) => {
      this.detail = detail;
    });
  }
}
