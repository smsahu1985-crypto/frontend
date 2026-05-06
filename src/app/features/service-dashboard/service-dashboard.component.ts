import { Component, OnInit } from '@angular/core';

import { DashboardData, ModalDetail } from '../../core/models/dashboard.models';
import { MockDashboardService } from '../../core/services/mock-dashboard.service';

@Component({
  selector: 'app-service-dashboard',
  standalone: false,
  templateUrl: './service-dashboard.component.html',
})
export class ServiceDashboardComponent implements OnInit {
  dashboard?: DashboardData;
  detail?: ModalDetail;
  loading = true;

  constructor(private readonly dashboardService: MockDashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getServiceDashboard().subscribe((dashboard) => {
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
