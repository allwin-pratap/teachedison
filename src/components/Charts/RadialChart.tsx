"use client"

import {
    Label,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
} from "recharts"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartConfig = {
    percentage: {
        label: "Score",
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function RadialChart(props: { score: any }) {
    const chartData = [
        { browser: "safari", percentage: props?.score, fill: "var(--color-safari)" },
    ]
    return (
        <Card className="flex flex-col h-full">
            <CardHeader className="items-center pb-0">
                <CardTitle>Average Score</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <RadialBarChart
                        data={chartData}
                        startAngle={0}
                        endAngle={chartData[0].percentage * 3.6}
                        innerRadius={80}
                        outerRadius={110}
                    >
                        <PolarGrid
                            gridType="circle"
                            radialLines={false}
                            stroke="none"
                            className="first:fill-[#EFEFED] last:fill-white dark:last:fill-gray-900"
                            polarRadius={[86, 74]}
                        />
                        <RadialBar dataKey="percentage" background cornerRadius={10} />
                        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="text-foreground text-4xl font-bold dark:fill-white"
                                                >
                                                    {chartData[0].percentage.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="text-muted-foreground dark:fill-white"
                                                >
                                                    Percentage
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </PolarRadiusAxis>
                    </RadialBarChart>
                </ChartContainer>
            </CardContent>
            {/* <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                    Increased by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total percentage for the last 6 months
                </div>
            </CardFooter> */}
        </Card>
    )
}
