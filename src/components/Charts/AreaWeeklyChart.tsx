"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

// Weekly data with valid date ranges
const chartData = [
    { week: "Jan 1 - Jan 7", percentage: 2 },
    { week: "Jan 8 - Jan 14", percentage: 50 },
    { week: "Jan 22 - Jan 28", percentage: 100 },
    { week: "Jan 29 - Feb 4", percentage: 0 },
    { week: "Feb 5 - Feb 11", percentage: 60 },
    { week: "Feb 12 - Feb 18", percentage: 50 },
];

const chartConfig = {
    percentage: {
        label: "percentage",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig;

export function AreaWeeklyChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Weekly Progress</CardTitle>
                <CardDescription>
                    Showing overall progress of the course
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[200px] w-full"
                >
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                            top: 10,
                        }}
                    >
                        <CartesianGrid vertical={false} />
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
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 font-medium leading-none">
                            Trending up by 5.2% this week <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-2 leading-none text-muted-foreground">
                            Data from the last 6 weeks
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}
