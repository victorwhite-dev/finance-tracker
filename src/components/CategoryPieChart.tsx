import { PieChart, Pie, Cell } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"

interface CategoryData {
  name: string
  value: number
}

interface CategoryPieChartProps {
  data: CategoryData[]
}

// Indigo/violet-led palette
const SLICE_COLORS = [
  "var(--chart-1)", // violet/indigo
  "var(--chart-2)", // purple
  "var(--chart-3)", // teal/cyan
  "var(--chart-4)", // amber
  "var(--chart-5)", // orange
  "oklch(0.68 0.14 145)", // green
]

function fmtAmount(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n)
}

export function CategoryPieChart({ data }: CategoryPieChartProps) {
  const total = data.reduce((s, d) => s + d.value, 0)

  const chartConfig = data.reduce<ChartConfig>((acc, item, i) => {
    acc[item.name] = { label: item.name, color: SLICE_COLORS[i % SLICE_COLORS.length] }
    return acc
  }, {})

  return (
    <Card className="border shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">Expenses by Category</CardTitle>
        <CardDescription className="text-sm">Breakdown of all spending</CardDescription>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">

          {/* Donut — minimum 280px */}
          <div className="relative flex-shrink-0 self-center">
            <ChartContainer config={chartConfig} className="h-[280px] w-[280px]">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={82}
                  outerRadius={124}
                  paddingAngle={2}
                  dataKey="value"
                  nameKey="name"
                  strokeWidth={0}
                >
                  {data.map((_entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={SLICE_COLORS[index % SLICE_COLORS.length]}
                    />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent nameKey="name" hideLabel />} />
              </PieChart>
            </ChartContainer>
            {/* Center label */}
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-0.5">
              <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">Total</span>
              <span className="text-[1.35rem] font-bold leading-tight tracking-tight">{fmtAmount(total)}</span>
            </div>
          </div>

          {/* Legend — RIGHT of donut */}
          <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:min-w-[180px]">
            {data.map((item, i) => {
              const pct = total > 0 ? ((item.value / total) * 100).toFixed(1) : "0"
              return (
                <div key={item.name} className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className="h-2.5 w-2.5 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: SLICE_COLORS[i % SLICE_COLORS.length] }}
                    />
                    <span className="truncate text-sm font-medium">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 text-right">
                    <span className="text-xs text-muted-foreground tabular-nums">{pct}%</span>
                    <span className="text-sm font-semibold tabular-nums">{fmtAmount(item.value)}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
