import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardComponent } from './components/card/card.component';
import { SparklineComponent } from './components/chart/sparkline.component';
import { KpiComponent } from './components/kpi/kpi.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [CardComponent, KpiComponent, ModalComponent, SparklineComponent],
  imports: [CommonModule],
  exports: [CardComponent, KpiComponent, ModalComponent, SparklineComponent, CommonModule],
})
export class SharedModule {}
