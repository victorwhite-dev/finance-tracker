import { Wallet, TrendingUp, TrendingDown, PiggyBank } from "lucide-react"
import { cn } from "@/lib/utils"

interface SummaryCardsProps {
  balance: number
  totalIncome: number
  totalExpenses: number
  savingsRate: number
}

function fmt(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n)
}

interface StatCard {
  label: string
  value: string
  sub: string
  icon: React.ReactNode
  iconClass: string
  iconWrapClass: string
  valueClass: string
  borderClass: string
  delay: string
}

function StatCard({ label, value, sub, icon, iconClass, iconWrapClass, valueClass, borderClass, delay }: StatCard) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-4 rounded-xl border bg-card p-6 shadow-sm",
        "transition-all duration-200 hover:shadow-md hover:-translate-y-px",
        "border-l-4",
        borderClass,
        "animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-both",
        delay
      )}
    >
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <span className={cn("flex h-10 w-10 items-center justify-center rounded-lg", iconWrapClass)}>
          <span className={cn("h-5 w-5", iconClass)}>{icon}</span>
        </span>
      </div>
      <div>
        <p className={cn("text-3xl font-bold tracking-tight", valueClass)}>{value}</p>
        <p className="mt-1 text-xs text-muted-foreground">{sub}</p>
      </div>
    </div>
  )
}

export function SummaryCards({ balance, totalIncome, totalExpenses, savingsRate }: SummaryCardsProps) {
  const cards: StatCard[] = [
    {
      label: "Net Balance",
      value: fmt(balance),
      sub: "Across all tracked months",
      icon: <Wallet className="h-5 w-5" />,
      iconClass: "text-violet-600 dark:text-violet-400",
      iconWrapClass: "bg-violet-100 dark:bg-violet-900/40",
      valueClass: "text-violet-700 dark:text-violet-300",
      borderClass: "border-l-violet-500",
      delay: "delay-0",
    },
    {
      label: "Total Income",
      value: fmt(totalIncome),
      sub: "All income transactions",
      icon: <TrendingUp className="h-5 w-5" />,
      iconClass: "text-emerald-600 dark:text-emerald-400",
      iconWrapClass: "bg-emerald-100 dark:bg-emerald-900/40",
      valueClass: "text-emerald-700 dark:text-emerald-300",
      borderClass: "border-l-emerald-500",
      delay: "delay-75",
    },
    {
      label: "Total Expenses",
      value: fmt(totalExpenses),
      sub: "All expense transactions",
      icon: <TrendingDown className="h-5 w-5" />,
      iconClass: "text-rose-600 dark:text-rose-400",
      iconWrapClass: "bg-rose-100 dark:bg-rose-900/40",
      valueClass: "text-rose-700 dark:text-rose-400",
      borderClass: "border-l-rose-500",
      delay: "delay-150",
    },
    {
      label: "Savings Rate",
      value: `${savingsRate.toFixed(1)}%`,
      sub: "% of income saved",
      icon: <PiggyBank className="h-5 w-5" />,
      iconClass: "text-indigo-600 dark:text-indigo-400",
      iconWrapClass: "bg-indigo-100 dark:bg-indigo-900/40",
      valueClass: "text-indigo-700 dark:text-indigo-300",
      borderClass: "border-l-indigo-500",
      delay: "delay-[225ms]",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((c) => (
        <StatCard key={c.label} {...c} />
      ))}
    </div>
  )
}
