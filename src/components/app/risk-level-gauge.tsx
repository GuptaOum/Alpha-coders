'use client';

import { Label, PolarGrid, RadialBar, RadialBarChart } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const chartData = [{ name: 'risk', value: 72, fill: 'hsl(var(--destructive))' }];
const chartConfig = {
  value: {
    label: 'Risk',
  },
};

export function RiskLevelGauge() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle className="font-headline">AI Risk Assessment</CardTitle>
        <CardDescription>Current Outbreak Probability</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-full max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={-90}
            endAngle={270}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
            />
            <RadialBar dataKey="value" background cornerRadius={10} />
            <Label
              content={({ viewBox }) => {
                if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                  return (
                    <>
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {chartData[0].value.toLocaleString()}%
                        </tspan>
                      </text>
                      <text
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 20}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-destructive text-lg font-medium"
                          >
                            High
                          </tspan>
                      </text>
                    </>
                  );
                }
                return null;
              }}
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
