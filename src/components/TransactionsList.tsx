import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { type Transaction, type Category, CATEGORIES } from "@/data/transactions"

interface TransactionsListProps {
  transactions: Transaction[]
}

// Pill badge styling per category
const CAT_PILL: Record<Category, string> = {
  Income:        "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300",
  Food:          "bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300",
  Transport:     "bg-sky-100 text-sky-700 dark:bg-sky-900/50 dark:text-sky-300",
  Entertainment: "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300",
  Housing:       "bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300",
  Health:        "bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300",
}

// Active filter button color
const CAT_ACTIVE: Record<Category, string> = {
  Income:        "bg-emerald-500 text-white",
  Food:          "bg-orange-500 text-white",
  Transport:     "bg-sky-500 text-white",
  Entertainment: "bg-amber-500 text-white",
  Housing:       "bg-rose-500 text-white",
  Health:        "bg-teal-500 text-white",
}

function fmtAmt(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(Math.abs(n))
}

function fmtDate(s: string) {
  return new Date(s + "T00:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

function SummaryFooter({ transactions }: { transactions: Transaction[] }) {
  const income = transactions.filter(t => t.amount > 0).reduce((s, t) => s + t.amount, 0)
  const expenses = transactions.filter(t => t.amount < 0).reduce((s, t) => s + Math.abs(t.amount), 0)
  const net = income - expenses

  return (
    <div className="flex flex-wrap items-center gap-3 border-t border-border bg-muted/30 px-6 py-4 sm:gap-6 rounded-b-xl">
      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mr-auto sm:mr-0">
        Summary
      </span>
      <div className="flex items-center gap-1.5">
        <span className="text-xs text-muted-foreground">Income</span>
        <span className="text-sm font-bold tabular-nums text-emerald-600 dark:text-emerald-400">
          +{fmtAmt(income)}
        </span>
      </div>
      <div className="h-4 w-px bg-border hidden sm:block" />
      <div className="flex items-center gap-1.5">
        <span className="text-xs text-muted-foreground">Expenses</span>
        <span className="text-sm font-bold tabular-nums text-rose-600 dark:text-rose-400">
          −{fmtAmt(expenses)}
        </span>
      </div>
      <div className="h-4 w-px bg-border hidden sm:block" />
      <div className="flex items-center gap-1.5">
        <span className="text-xs text-muted-foreground">Net</span>
        <span className={cn(
          "text-sm font-bold tabular-nums",
          net >= 0
            ? "text-sky-600 dark:text-sky-400"
            : "text-rose-600 dark:text-rose-400"
        )}>
          {net >= 0 ? "+" : "−"}{fmtAmt(net)}
        </span>
      </div>
    </div>
  )
}

export function TransactionsList({ transactions }: TransactionsListProps) {
  const [filter, setFilter] = useState<Category | "All">("All")

  const visible = [...(filter === "All" ? transactions : transactions.filter(t => t.category === filter))]
    .sort((a, b) => b.date.localeCompare(a.date))

  return (
    <Card className="border shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="text-base font-semibold">Transactions</CardTitle>
            <CardDescription className="mt-0.5">
              {visible.length} of {transactions.length} entries
            </CardDescription>
          </div>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-1.5 pt-3">
          <button
            onClick={() => setFilter("All")}
            className={cn(
              "h-7 rounded-full px-3.5 text-xs font-medium transition-colors",
              filter === "All"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            All
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "h-7 rounded-full px-3.5 text-xs font-medium transition-colors",
                filter === cat
                  ? CAT_ACTIVE[cat]
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <ScrollArea className="h-[440px]">
          {visible.length === 0 ? (
            <div className="py-20 text-center text-sm text-muted-foreground">No transactions found.</div>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="px-6 py-2.5 text-left text-xs font-medium text-muted-foreground uppercase tracking-wide">Description</th>
                  <th className="px-4 py-2.5 text-left text-xs font-medium text-muted-foreground uppercase tracking-wide hidden sm:table-cell">Date</th>
                  <th className="px-4 py-2.5 text-left text-xs font-medium text-muted-foreground uppercase tracking-wide hidden sm:table-cell">Category</th>
                  <th className="px-6 py-2.5 text-right text-xs font-medium text-muted-foreground uppercase tracking-wide">Amount</th>
                </tr>
              </thead>
              <tbody>
                {visible.map((t, idx) => (
                  <tr
                    key={t.id}
                    className={cn(
                      "border-b border-border/60 transition-colors hover:bg-muted/40",
                      idx % 2 === 1 ? "bg-muted/20" : "bg-background"
                    )}
                  >
                    <td className="px-6 py-3.5">
                      <div className="flex items-center gap-3">
                        <span className={cn(
                          "flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md text-xs font-bold",
                          t.amount > 0
                            ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
                            : "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300"
                        )}>
                          {t.amount > 0 ? "↑" : "↓"}
                        </span>
                        <span className="font-medium truncate max-w-[200px]">{t.description}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 text-muted-foreground hidden sm:table-cell whitespace-nowrap">
                      {fmtDate(t.date)}
                    </td>
                    <td className="px-4 py-3.5 hidden sm:table-cell">
                      <span className={cn(
                        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                        CAT_PILL[t.category]
                      )}>
                        {t.category}
                      </span>
                    </td>
                    <td className={cn(
                      "px-6 py-3.5 text-right font-semibold tabular-nums whitespace-nowrap",
                      t.amount > 0
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-rose-600 dark:text-rose-400"
                    )}>
                      {t.amount > 0 ? "+" : "−"}{fmtAmt(t.amount)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </ScrollArea>

        <SummaryFooter transactions={visible} />
      </CardContent>
    </Card>
  )
}
