'use client';

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import { TREND_DATA } from '@/lib/data';

const chartConfig = {
  'New Cases': {
    label: 'New Cases',
    color: 'hsl(var(--primary))',
  },
} satisfies ChartConfig;

export function OutbreakTrendChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Outbreak Trends</CardTitle>
        <CardDescription>New cases reported in the last 7 days</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <BarChart accessibilityLayer data={TREND_DATA}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 6)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Bar dataKey="New Cases" fill="var(--color-New Cases)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
