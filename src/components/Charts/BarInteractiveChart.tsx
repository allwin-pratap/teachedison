"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
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
  { date: "2024-04-01", student: 222, placed: 150 },
  { date: "2024-04-02", student: 97, placed: 180 },
  { date: "2024-04-03", student: 167, placed: 120 },
  { date: "2024-04-04", student: 242, placed: 260 },
  { date: "2024-04-05", student: 373, placed: 290 },
  { date: "2024-04-06", student: 301, placed: 340 },
  { date: "2024-04-07", student: 245, placed: 180 },
  { date: "2024-04-08", student: 409, placed: 320 },
  { date: "2024-04-09", student: 59, placed: 110 },
  { date: "2024-04-10", student: 261, placed: 190 },
  { date: "2024-04-11", student: 327, placed: 350 },
  { date: "2024-04-12", student: 292, placed: 210 },
  { date: "2024-04-13", student: 342, placed: 380 },
  { date: "2024-04-14", student: 137, placed: 220 },
  { date: "2024-04-15", student: 120, placed: 170 },
  { date: "2024-04-16", student: 138, placed: 190 },
  { date: "2024-04-17", student: 446, placed: 360 },
  { date: "2024-04-18", student: 364, placed: 410 },
  { date: "2024-04-19", student: 243, placed: 180 },
  { date: "2024-04-20", student: 89, placed: 150 },
  { date: "2024-04-21", student: 137, placed: 200 },
  { date: "2024-04-22", student: 224, placed: 170 },
  { date: "2024-04-23", student: 138, placed: 230 },
  { date: "2024-04-24", student: 387, placed: 290 },
  { date: "2024-04-25", student: 215, placed: 250 },
  { date: "2024-04-26", student: 75, placed: 130 },
  { date: "2024-04-27", student: 383, placed: 420 },
  { date: "2024-04-28", student: 122, placed: 180 },
  { date: "2024-04-29", student: 315, placed: 240 },
  { date: "2024-04-30", student: 454, placed: 380 },
  { date: "2024-05-01", student: 165, placed: 220 },
  { date: "2024-05-02", student: 293, placed: 310 },
  { date: "2024-05-03", student: 247, placed: 190 },
  { date: "2024-05-04", student: 385, placed: 420 },
  { date: "2024-05-05", student: 481, placed: 390 },
  { date: "2024-05-06", student: 498, placed: 520 },
  { date: "2024-05-07", student: 388, placed: 300 },
  { date: "2024-05-08", student: 149, placed: 210 },
  { date: "2024-05-09", student: 227, placed: 180 },
  { date: "2024-05-10", student: 293, placed: 330 },
  { date: "2024-05-11", student: 335, placed: 270 },
  { date: "2024-05-12", student: 197, placed: 240 },
  { date: "2024-05-13", student: 197, placed: 160 },
  { date: "2024-05-14", student: 448, placed: 490 },
  { date: "2024-05-15", student: 473, placed: 380 },
  { date: "2024-05-16", student: 338, placed: 400 },
  { date: "2024-05-17", student: 499, placed: 420 },
  { date: "2024-05-18", student: 315, placed: 350 },
  { date: "2024-05-19", student: 235, placed: 180 },
  { date: "2024-05-20", student: 177, placed: 230 },
  { date: "2024-05-21", student: 82, placed: 140 },
  { date: "2024-05-22", student: 81, placed: 120 },
  { date: "2024-05-23", student: 252, placed: 290 },
  { date: "2024-05-24", student: 294, placed: 220 },
  { date: "2024-05-25", student: 201, placed: 250 },
  { date: "2024-05-26", student: 213, placed: 170 },
  { date: "2024-05-27", student: 420, placed: 460 },
  { date: "2024-05-28", student: 233, placed: 190 },
  { date: "2024-05-29", student: 78, placed: 130 },
  { date: "2024-05-30", student: 340, placed: 280 },
  { date: "2024-05-31", student: 178, placed: 230 },
  { date: "2024-06-01", student: 178, placed: 200 },
  { date: "2024-06-02", student: 470, placed: 410 },
  { date: "2024-06-03", student: 103, placed: 160 },
  { date: "2024-06-04", student: 439, placed: 380 },
  { date: "2024-06-05", student: 88, placed: 140 },
  { date: "2024-06-06", student: 294, placed: 250 },
  { date: "2024-06-07", student: 323, placed: 370 },
  { date: "2024-06-08", student: 385, placed: 320 },
  { date: "2024-06-09", student: 438, placed: 480 },
  { date: "2024-06-10", student: 155, placed: 200 },
  { date: "2024-06-11", student: 92, placed: 150 },
  { date: "2024-06-12", student: 492, placed: 420 },
  { date: "2024-06-13", student: 81, placed: 130 },
  { date: "2024-06-14", student: 426, placed: 380 },
  { date: "2024-06-15", student: 307, placed: 350 },
  { date: "2024-06-16", student: 371, placed: 310 },
  { date: "2024-06-17", student: 475, placed: 520 },
  { date: "2024-06-18", student: 107, placed: 170 },
  { date: "2024-06-19", student: 341, placed: 290 },
  { date: "2024-06-20", student: 408, placed: 450 },
  { date: "2024-06-21", student: 169, placed: 210 },
  { date: "2024-06-22", student: 317, placed: 270 },
  { date: "2024-06-23", student: 480, placed: 530 },
  { date: "2024-06-24", student: 132, placed: 180 },
  { date: "2024-06-25", student: 141, placed: 190 },
  { date: "2024-06-26", student: 434, placed: 380 },
  { date: "2024-06-27", student: 448, placed: 490 },
  { date: "2024-06-28", student: 149, placed: 200 },
  { date: "2024-06-29", student: 103, placed: 160 },
  { date: "2024-06-30", student: 446, placed: 400 },
]

const chartConfig = {
  views: {
    label: "Onboard / Placed",
  },
  student: {
    label: "Student Onboard",
    color: "hsl(var(--chart-1))",
  },
  placed: {
    label: "Placed",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function BarInteractiveChart() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("student")

  const total = React.useMemo(
    () => ({
      student: chartData.reduce((acc, curr) => acc + curr.student, 0),
      placed: chartData.reduce((acc, curr) => acc + curr.placed, 0),
    }),
    []
  )

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Student Onboard & Got Placed</CardTitle>
          <CardDescription>
            Showing total Students for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {["student", "placed"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
