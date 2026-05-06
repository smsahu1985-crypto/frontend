export type Status = 'open' | 'pending' | 'progress' | 'done' | 'critical';
export type Tone = 'blue' | 'cyan' | 'orange' | 'yellow' | 'green' | 'red' | 'purple';

export interface Job {
  id: string;
  customer: string;
  device: string;
  stage: string;
  owner: string;
  status: Status;
}

export interface KPI {
  key: string;
  label: string;
  value: string;
  subLabel?: string;
  tone: Tone;
  modalKey?: string;
  alert?: boolean;
}

export interface Revenue {
  label: string;
  amount: string;
  percentage?: string;
  tone: Tone;
}

export interface Alert {
  id: string;
  title: string;
  severity: 'warning' | 'critical' | 'info';
  description: string;
}

export interface Sparkline {
  values: number[];
  tone: Tone;
  trend?: string;
  trendDirection?: 'up' | 'down' | 'neutral';
}

export interface MetricCard {
  key: string;
  title: string;
  value: string;
  subtitle: string;
  tone: Tone;
  badge?: string;
  critical?: boolean;
  sparkline?: Sparkline;
  highlights?: Array<{ label: string; value: string; tone: Tone; emphasis?: boolean }>;
}

export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface TrendData {
  labels: string[];
  values: number[];
  tone: Tone;
}

export interface ModalDetail {
  key: string;
  title: string;
  value: string;
  summary: string;
  tone: Tone;
  tags: string[];
  trend?: TrendData;
  table?: TableData;
  highlights?: Alert[];
}

export interface DashboardData {
  title: string;
  subtitle: string;
  heroKpis: KPI[];
  sections: Array<{
    title: string;
    columns: 2 | 3 | 4 | 6;
    cards: MetricCard[];
  }>;
}
