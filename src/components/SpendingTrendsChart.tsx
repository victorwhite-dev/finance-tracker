import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"

interface MonthlyData {
  month: string
  income: number
  expenses: number
}

interface SpendingTrendsChartProps {
  data: MonthlyData[]
}

const chartConfig = {
  income: {
    label: "Income",
    color: "var(--chart-1)",
  },
  expenses: {
    label: "Expenses",
    color: "var(--chart-5)",
  },
}

export function SpendingTrendsChart({ data }: SpendingTrendsChartProps) {
  return (
    <Card className="border shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">Spending Trends</CardTitle>
        <CardDescription className="text-sm">Income vs. expenses — monthly view</CardDescription>
      </CardHeader>
      <CardContent className="pt-2">
        <ChartContainer config={chartConfig} className="min-h-[280px] w-full">
          <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="fillIncome" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-income)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="var(--color-income)" stopOpacity={0.02} />
              </linearGradient>
              <linearGradient id="fillExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-expenses)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="var(--color-expenses)" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
              tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
              width={44}
            />
            <ChartTooltip content={<ChartTooltipContent indicator="dot" labelKey="month" />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Area
              type="monotone"
              dataKey="income"
              stroke="var(--color-income)"
              strokeWidth={2.5}
              fill="url(#fillIncome)"
              dot={{ r: 3.5, fill: "var(--color-income)", strokeWidth: 0 }}
              activeDot={{ r: 5.5, strokeWidth: 0 }}
            />
            <Area
              type="monotone"
              dataKey="expenses"
              stroke="var(--color-expenses)"
              strokeWidth={2.5}
              fill="url(#fillExpenses)"
              dot={{ r: 3.5, fill: "var(--color-expenses)", strokeWidth: 0 }}
              activeDot={{ r: 5.5, strokeWidth: 0 }}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
