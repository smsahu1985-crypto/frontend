import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: false,
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent {
  readonly tabs = [
    { label: 'Service', route: '/service', badge: '8', tone: 'red' },
    { label: 'Business', route: '/business', badge: '92%', tone: 'green' },
    { label: 'Operations', route: '/operations', badge: '14', tone: 'orange' },
  ];
}
