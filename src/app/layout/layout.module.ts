import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [HeaderComponent, LayoutComponent, TabsComponent],
  imports: [RouterModule, SharedModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
