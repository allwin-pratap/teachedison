"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
    percentage: {
        label: "percentage",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig;

type WeeklyReport = {
    week: string; percentage: number
};

type WeeklyReportProps = {
    weeklyReport?: WeeklyReport[];
};

export function AreaWeeklyChart({ weeklyReport }: WeeklyReportProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Weekly Progress</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[200px] w-full"
                >
                    <AreaChart
                        accessibilityLayer
                        data={weeklyReport}
                        margin={{
                            left: 12,
                            right: 12,
                            top: 10,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <YAxis type="number" />
                        <XAxis
                            dataKey="week"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <Area
                            dataKey="percentage"
                            type="natural"
                            fill="var(--color-percentage)"
                            fillOpacity={0.4}
                            stroke="var(--color-percentage)"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
