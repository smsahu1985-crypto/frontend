import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DashboardData, MetricCard, ModalDetail, Tone } from '../models/dashboard.models';

const trend = (values: number[], tone: Tone) => ({ labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Today'], values, tone });

const metric = (
  key: string,
  title: string,
  value: string,
  subtitle: string,
  tone: Tone,
  values: number[],
  trendText: string,
  critical = false,
): MetricCard => ({
  key,
  title,
  value,
  subtitle,
  tone,
  badge: critical ? 'Escalate' : 'Live',
  critical,
  sparkline: { values, tone, trend: trendText, trendDirection: critical ? 'down' : 'neutral' },
});

@Injectable({ providedIn: 'root' })
export class MockDashboardService {
  private readonly serviceCards = [
    metric('qr-token', 'QR Token Open > 10 Min', '6', 'Walk-in tokens awaiting job creation', 'orange', [3, 4, 5, 4, 6], '+2 vs avg', true),
    metric('carry-in', 'Carry In Jobs', '18', 'Today by device type', 'blue', [12, 14, 15, 15, 18], '+3 vs avg'),
    metric('mail-in', 'Mail In Jobs', '7', 'Shipments pending receipt', 'blue', [5, 6, 7, 7, 7], 'stable'),
    metric('tech-assign', 'Technician Assignment Pending', '4', 'Jobs waiting for owner', 'orange', [2, 3, 3, 4, 4], '+1 vs avg'),
    metric('estimate', 'Estimate Pending', '9', 'Diagnosed jobs awaiting estimate', 'orange', [4, 5, 7, 8, 9], '+4 vs avg'),
    metric('cust-approval', 'Customer Approval Pending', '11', 'Estimates awaiting approval', 'orange', [7, 8, 10, 9, 11], '+3 vs avg'),
    metric('repair-pending', 'Repair Creation Pending', '6', 'Approved jobs awaiting repair order', 'orange', [5, 6, 6, 5, 6], 'on avg'),
    metric('cd-approval', 'CD Approval Pending > 2 hrs', '5', 'Finance approvals breached', 'red', [2, 2, 3, 4, 5], '+2 critical', true),
    {
      ...metric('repair-process', 'Repair in Process', '14', '4 jobs over 24 hrs, 8 over 8 hrs', 'blue', [10, 12, 13, 14, 14], 'monitor'),
      highlights: [
        { label: '>24 hrs', value: '4', tone: 'red' as Tone, emphasis: true },
        { label: '>8 hrs', value: '8', tone: 'orange' as Tone },
      ],
    },
    metric('job-open-2d', 'Job Open > 2 Days', '8', 'Overdue jobs requiring attention', 'red', [4, 5, 5, 7, 8], '+3 vs avg', true),
    metric('closed', 'Jobs Closed Today', '16', 'Completed and closed', 'green', [10, 12, 13, 12, 16], '+4 vs avg'),
    metric('pickup', 'Ready for Pickup', '12', 'Devices awaiting collection', 'blue', [11, 12, 11, 12, 12], 'stable'),
    {
      ...metric('handover', 'Pending Handover', '6', '2 devices exceed 45 days', 'orange', [3, 4, 4, 5, 6], 'legal review'),
      highlights: [
        { label: '>45 days', value: '2', tone: 'red' as Tone, emphasis: true },
        { label: '>15 days', value: '4', tone: 'orange' as Tone },
      ],
    },
    metric('kbb', 'KBB in Hand', '7', 'Buyback devices held', 'yellow', [4, 5, 6, 7, 7], 'watch age'),
    metric('invoice', 'Invoice Pending', '7', 'Completed jobs awaiting invoice', 'orange', [4, 5, 5, 6, 7], '+2 vs avg'),
    metric('insurance', 'AC+ & Insurance Pending', '6', 'Claims in progress', 'orange', [5, 6, 6, 6, 6], 'on avg'),
    metric('unclaimed', 'Unclaimed Devices', '9', 'Legal disposal risk', 'red', [5, 6, 7, 8, 9], 'rising', true),
    metric('seed-stock', 'Seed Stock', '46 Units', 'Available repair parts', 'blue', [32, 36, 38, 42, 46], '+8 restocked'),
    metric('consignment', 'Consignment Stock', '128 Units', 'Apple-owned inventory', 'purple', [120, 124, 126, 128, 128], 'stable'),
  ];

  private readonly businessCards = [
    metric('revenue', 'Revenue Today', 'Rs. 72,450', 'Accessories, service and repair', 'yellow', [58200, 65000, 71000, 68500, 72450], '+6% vs avg'),
    metric('monthly-walkin', 'Monthly Walk-ins', '158', 'Month-to-date store traffic', 'blue', [42, 84, 124, 158, 158], 'on plan'),
    metric('today-walkin', 'Today Walk-ins', '58', 'Hourly traffic and conversion', 'yellow', [8, 20, 30, 36, 58], '+9 vs avg'),
    metric('csat', 'CSAT', '92%', 'Customer satisfaction', 'green', [88, 90, 91, 91, 92], '+2 pts'),
    metric('happy-calling', 'Happy Calling Pending', '18', 'Post-service follow-up queue', 'orange', [11, 12, 14, 15, 18], '+5 vs avg'),
    metric('walkin-trend', 'Walk-in Trend Analysis', '58 today', 'Jobs created from visits', 'cyan', [41, 45, 49, 52, 58], 'strong'),
  ];

  private readonly operationCards = [
    metric('open-po', 'Open Purchase Orders', '14', 'Pending delivery or confirmation', 'orange', [9, 10, 12, 13, 14], '+3 vs avg'),
    metric('open-sto', 'Open Stock Transfer Orders', '9', 'Inter-store stock movement', 'blue', [8, 9, 9, 9, 9], 'stable'),
    metric('open-stn', 'Open Stock Transfer Notes', '6', 'Awaiting acknowledgement', 'cyan', [7, 7, 6, 7, 6], '1 cleared'),
    metric('rtv-aging', 'RTV Aging > 90 Days', '22 Units', '11 SKUs require vendor action', 'red', [8, 10, 15, 19, 22], 'urgent', true),
    metric('audit', 'Audit Rollover / Pending', '7', 'Compliance checks pending', 'yellow', [4, 5, 5, 6, 7], '+2 vs target'),
    metric('escalations', 'Apple Escalations', '4', 'Direct escalations in progress', 'red', [2, 2, 3, 3, 4], '+1 new', true),
    metric('health-score', 'Apple Health Dashboard Score', '87%', 'Performance and compliance', 'blue', [82, 84, 86, 86, 87], 'improving'),
    metric('reorder', 'Seed Stock Below Min Level', '8 SKUs', 'Reorder required', 'orange', [5, 6, 7, 7, 8], '+2 SKUs low'),
    metric('b2b', 'B2B Appointments Pending', '5', 'Corporate service appointments', 'blue', [4, 5, 5, 5, 5], 'scheduled'),
    metric('announcements', "Today's Announcements", '3 Updates', 'Staff updates and protocol notes', 'purple', [1, 2, 2, 3, 3], 'new'),
  ];

  getServiceDashboard(): Observable<DashboardData> {
    return of({
      title: 'Service Dashboard',
      subtitle: 'Live repair pipeline and SLA risk',
      heroKpis: [
        { key: 'open-jobs', label: 'Total Open Jobs', value: '43', subLabel: 'Active pipeline', tone: 'orange', modalKey: 'open-jobs' },
        { key: 'critical-alerts', label: 'Critical Alerts', value: '8', subLabel: '>24 hrs', tone: 'red', modalKey: 'critical-alerts', alert: true },
        { key: 'closed', label: 'Closed Today', value: '16', subLabel: 'Completed', tone: 'green', modalKey: 'closed' },
        { key: 'pickup', label: 'Ready for Pickup', value: '12', subLabel: 'Awaiting collection', tone: 'yellow', modalKey: 'pickup' },
      ],
      sections: [
        { title: 'Intake and Assignment', columns: 3, cards: this.serviceCards.slice(0, 6) },
        { title: 'Repair Pipeline', columns: 3, cards: this.serviceCards.slice(6, 13) },
        { title: 'Commercial and Stock', columns: 4, cards: this.serviceCards.slice(13) },
      ],
    });
  }

  getBusinessDashboard(): Observable<DashboardData> {
    return of({
      title: 'Business Dashboard',
      subtitle: 'Revenue, footfall, customer health',
      heroKpis: [
        { key: 'monthly-walkin', label: 'Monthly Walk-ins', value: '158', subLabel: 'MTD', tone: 'blue', modalKey: 'monthly-walkin' },
        { key: 'today-walkin', label: 'Today Walk-ins', value: '58', subLabel: 'Current day', tone: 'yellow', modalKey: 'today-walkin' },
        { key: 'csat', label: 'CSAT', value: '92%', subLabel: 'Month', tone: 'green', modalKey: 'csat' },
        { key: 'happy-calling', label: 'Happy Calling', value: '18', subLabel: 'Pending', tone: 'orange', modalKey: 'happy-calling' },
      ],
      sections: [{ title: 'Business Performance', columns: 3, cards: this.businessCards }],
    });
  }

  getOperationsDashboard(): Observable<DashboardData> {
    return of({
      title: 'Operations Dashboard',
      subtitle: 'Inventory, compliance, escalations',
      heroKpis: [
        { key: 'open-po', label: 'Open PO', value: '14', subLabel: 'Pending', tone: 'orange', modalKey: 'open-po' },
        { key: 'rtv-aging', label: 'RTV Aging', value: '22', subLabel: '>90 days', tone: 'red', modalKey: 'rtv-aging', alert: true },
        { key: 'health-score', label: 'Health Score', value: '87%', subLabel: 'Apple dashboard', tone: 'blue', modalKey: 'health-score' },
        { key: 'announcements', label: 'Announcements', value: '3', subLabel: 'Today', tone: 'purple', modalKey: 'announcements' },
      ],
      sections: [{ title: 'Operational Control', columns: 3, cards: this.operationCards }],
    });
  }

  getDetail(key: string): Observable<ModalDetail | undefined> {
    const allCards = [...this.serviceCards, ...this.businessCards, ...this.operationCards];
    const selected = allCards.find((item) => item.key === key);
    if (!selected) {
      return of(this.heroDetail(key));
    }
    return of(this.toDetail(selected));
  }

  private heroDetail(key: string): ModalDetail {
    const critical = key === 'critical-alerts';
    return {
      key,
      title: critical ? 'Critical Alerts >24 hrs' : 'Total Open Jobs',
      value: critical ? '8' : '43',
      summary: critical ? 'Jobs overdue more than 24 hours requiring immediate escalation.' : 'All currently open jobs across the repair pipeline.',
      tone: critical ? 'red' : 'orange',
      tags: critical ? ['Critical', 'Overdue', '>24 hrs'] : ['Active', 'In Pipeline'],
      trend: critical ? trend([4, 5, 5, 7, 8], 'red') : trend([31, 34, 38, 41, 43], 'orange'),
      table: {
        headers: ['Job ID', 'Customer', 'Device', 'Stage', 'Owner', 'Status'],
        rows: [
          ['#JB-2301', 'Anbu R.', 'iPhone 14 PM', 'Repair in Process', 'Siva K.', critical ? 'critical' : 'progress'],
          ['#JB-2302', 'Nivetha S.', 'MacBook Pro 14"', 'Estimate Pending', 'Karthik M.', 'pending'],
          ['#JB-2303', 'Bharath T.', 'iPhone 15', 'Tech Assign Pending', 'Unassigned', 'pending'],
          ['#JB-2304', 'Lakshmi P.', 'iPad Air 5', 'Repair in Process', 'Arun V.', 'progress'],
        ],
      },
    };
  }

  private toDetail(card: MetricCard): ModalDetail {
    return {
      key: card.key,
      title: card.title,
      value: card.value,
      summary: card.subtitle,
      tone: card.tone,
      tags: [card.badge ?? 'Live', card.tone, 'Mock data'],
      trend: trend(card.sparkline?.values ?? [1], card.tone),
      highlights: card.critical
        ? [{ id: card.key, title: 'Priority action', severity: 'critical', description: 'This queue is outside target and should be reviewed immediately.' }]
        : undefined,
      table: {
        headers: ['Reference', 'Owner', 'Category', 'Age', 'Status'],
        rows: [
          [`${card.key.toUpperCase()}-001`, 'Siva K.', card.title, '28h 30m', card.critical ? 'critical' : 'progress'],
          [`${card.key.toUpperCase()}-002`, 'Karthik M.', card.title, '16h 10m', 'pending'],
          [`${card.key.toUpperCase()}-003`, 'Arun V.', card.title, '8h 45m', 'open'],
          [`${card.key.toUpperCase()}-004`, 'Deepak R.', card.title, '2h 05m', 'done'],
        ],
      },
    };
  }
}
