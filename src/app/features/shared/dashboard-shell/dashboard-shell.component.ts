import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DashboardData } from '../../../core/models/dashboard.models';

@Component({
  selector: 'app-dashboard-shell',
  standalone: false,
  templateUrl: './dashboard-shell.component.html',
})
export class DashboardShellComponent {
  @Input() dashboard?: DashboardData;
  @Input() loading = false;
  @Output() detailRequested = new EventEmitter<string>();

  get refreshTime(): string {
    return new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false });
  }
}
