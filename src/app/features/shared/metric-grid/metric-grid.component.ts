import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MetricCard } from '../../../core/models/dashboard.models';

@Component({
  selector: 'app-metric-grid',
  standalone: false,
  templateUrl: './metric-grid.component.html',
})
export class MetricGridComponent {
  @Input({ required: true }) title = '';
  @Input({ required: true }) cards: MetricCard[] = [];
  @Input() columns: 2 | 3 | 4 | 6 = 3;
  @Output() selected = new EventEmitter<string>();
}
