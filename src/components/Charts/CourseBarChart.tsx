"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
  courses: {
    label: "courses",
  },
  completed: {
    label: "Finished",
    color: "hsl(var(--chart-1))",
  },
  to_do: {
    label: "To do",
    color: "hsl(var(--chart-2))",
  },
  progress: {
    label: "In Progess",
    color: "hsl(var(--chart-3))",
  },
  hold: {
    label: "Hold",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

type CourseAnalticsProps = {
  courseAnalytics?: {
    completed: number;
    toDo: number;
    progress: number;
    hold: number;
  };
};

export function CourseBarChart({ courseAnalytics }: CourseAnalticsProps) {

  const chartData = [
    { browser: "completed", courses: courseAnalytics?.completed, fill: "var(--color-completed)" },
    { browser: "to_do", courses: courseAnalytics?.toDo, fill: "var(--color-to_do)" },
    { browser: "progress", courses: courseAnalytics?.progress, fill: "var(--color-progress)" },
    { browser: "hold", courses: courseAnalytics?.hold, fill: "var(--color-hold)" }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Status</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="max-h-[200px]">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            
            <XAxis type="number" />
            <YAxis
              dataKey="browser"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="courses" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="courses" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
