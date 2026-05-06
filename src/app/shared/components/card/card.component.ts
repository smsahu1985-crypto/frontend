import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MetricCard } from '../../../core/models/dashboard.models';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ required: true }) card!: MetricCard;
  @Output() selected = new EventEmitter<string>();
}
