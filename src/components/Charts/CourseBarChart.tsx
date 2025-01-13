"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { browser: "completed", courses: 35, fill: "var(--color-completed)" },
  { browser: "to_do", courses: 10, fill: "var(--color-to_do)" },
  { browser: "progress", courses: 3, fill: "var(--color-progress)" },
  { browser: "hold", courses: 9, fill: "var(--color-hold)" }
]

const chartConfig = {
  courses: {
    label: "courses",
  },
  completed: {
    label: "Completed",
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

export function CourseBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Status</CardTitle>
        {/* <CardDescription>January - June 2024</CardDescription> */}
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
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total courses for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
