import type { LucideIcon } from 'lucide-react';

export type StatCard = {
  id: string;
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  icon: LucideIcon;
};

export type Alert = {
  id: string;
  location: string;
  disease: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  date: string;
};

export type TrendData = {
  date: string;
  'New Cases': number;
};
