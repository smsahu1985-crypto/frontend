import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

import { ModalDetail, Status } from '../../../core/models/dashboard.models';

@Component({
  selector: 'app-modal',
  standalone: false,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() detail?: ModalDetail | null;
  @Output() closed = new EventEmitter<void>();

  readonly statusLabels: Record<Status, string> = {
    open: 'Open',
    pending: 'Pending',
    progress: 'In Progress',
    done: 'Completed',
    critical: 'Critical',
  };

  @HostListener('document:keydown.escape')
  close(): void {
    if (this.detail) this.closed.emit();
  }

  isStatus(value: string): value is Status {
    return ['open', 'pending', 'progress', 'done', 'critical'].includes(value);
  }

  trendHeight(value: number): number {
    const values = this.detail?.trend?.values ?? [1];
    return Math.round((value / Math.max(...values, 1)) * 50);
  }
}
