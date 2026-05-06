import { Component, OnInit } from '@angular/core';

import { DashboardData, ModalDetail } from '../../core/models/dashboard.models';
import { MockDashboardService } from '../../core/services/mock-dashboard.service';

@Component({
  selector: 'app-business-dashboard',
  standalone: false,
  templateUrl: './business-dashboard.component.html',
  styleUrl: './business-dashboard.component.scss',
})
export class BusinessDashboardComponent implements OnInit {
  dashboard?: DashboardData;
  detail?: ModalDetail;
  loading = true;

  constructor(private readonly dashboardService: MockDashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getBusinessDashboard().subscribe((dashboard) => {
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
