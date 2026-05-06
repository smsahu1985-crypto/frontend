import { Component, EventEmitter, Input, Output } from '@angular/core';

import { KPI } from '../../../core/models/dashboard.models';

@Component({
  selector: 'app-kpi',
  standalone: false,
  templateUrl: './kpi.component.html',
  styleUrl: './kpi.component.scss',
})
export class KpiComponent {
  @Input({ required: true }) kpi!: KPI;
  @Output() selected = new EventEmitter<string>();
}
