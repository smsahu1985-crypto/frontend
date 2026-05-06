import { Component, Input } from '@angular/core';

import { Sparkline } from '../../../core/models/dashboard.models';

@Component({
  selector: 'app-sparkline',
  standalone: false,
  templateUrl: './sparkline.component.html',
  styleUrl: './sparkline.component.scss',
})
export class SparklineComponent {
  @Input({ required: true }) sparkline!: Sparkline;

  height(value: number): number {
    return Math.round((value / Math.max(...this.sparkline.values, 1)) * 24);
  }
}
