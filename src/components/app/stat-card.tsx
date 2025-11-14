import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { StatCard } from '@/lib/types';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

type StatCardProps = StatCard & {
  className?: string;
};

export function StatCard({
  icon: Icon,
  title,
  value,
  change,
  changeType,
  className,
}: StatCardProps) {
  const isIncrease = changeType === 'increase';

  return (
    <Card className={cn('shadow-sm hover:shadow-md transition-shadow', className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold font-headline">{value}</div>
        <p
          className={cn(
            'text-xs text-muted-foreground flex items-center',
            isIncrease ? 'text-destructive' : 'text-green-600'
          )}
        >
          {isIncrease ? (
            <ArrowUpRight className="h-4 w-4 mr-1" />
          ) : (
            <ArrowDownRight className="h-4 w-4 mr-1" />
          )}
          {change} vs last month
        </p>
      </CardContent>
    </Card>
  );
}
