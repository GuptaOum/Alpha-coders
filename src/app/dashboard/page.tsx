import { DiseaseHeatmapPlaceholder } from '@/components/app/disease-heatmap-placeholder';
import { OutbreakTrendChart } from '@/components/app/outbreak-trend-chart';
import { RecentAlerts } from '@/components/app/recent-alerts';
import { RiskLevelGauge } from '@/components/app/risk-level-gauge';
import { StatCard } from '@/components/app/stat-card';
import { STAT_CARDS } from '@/lib/data';

export default function DashboardPage() {
  return (
    <div className="grid gap-4 md:gap-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {STAT_CARDS.map((card) => (
          <StatCard key={card.id} {...card} />
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="lg:col-span-4">
          <OutbreakTrendChart />
        </div>
        <div className="lg:col-span-3">
          <RiskLevelGauge />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="lg:col-span-3">
          <DiseaseHeatmapPlaceholder />
        </div>
        <div className="lg:col-span-4">
          <RecentAlerts />
        </div>
      </div>
    </div>
  );
}
