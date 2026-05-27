import { ModeToggle } from "@/components/mode-toggle"
import { SummaryCards } from "@/components/SummaryCards"
import { SpendingTrendsChart } from "@/components/SpendingTrendsChart"
import { CategoryPieChart } from "@/components/CategoryPieChart"
import { TransactionsList } from "@/components/TransactionsList"
import {
  transactions,
  computeSummary,
  computeMonthlyTrends,
  computeCategoryBreakdown,
} from "@/data/transactions"
import { ChartBar as BarChart2, Sparkles } from "lucide-react"

const summary = computeSummary(transactions)
const monthlyTrends = computeMonthlyTrends(transactions)
const categoryBreakdown = computeCategoryBreakdown(transactions)

export function App() {
  return (
    <div className="page-gradient min-h-screen">

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
          <div className="flex items-center gap-3">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-lg shadow-sm"
              style={{ background: "linear-gradient(135deg, oklch(0.511 0.262 276.966), oklch(0.55 0.24 295))" }}
            >
              <BarChart2 className="h-4 w-4 text-white" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[15px] font-bold tracking-tight">FinanceTracker</span>
              <span className="hidden rounded-full border border-violet-200 bg-violet-50 px-2 py-0.5 text-[10px] font-semibold text-violet-600 dark:border-violet-800 dark:bg-violet-900/30 dark:text-violet-400 sm:inline-flex">
                BETA
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-xs text-muted-foreground sm:block">Dec 2025 – May 2026</span>
            <ModeToggle />
          </div>
        </div>
      </header>

      {/* Page content */}
      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10 space-y-10">

        {/* Hero heading */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Dashboard</span>
            </div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
              Financial Overview
            </h1>
            <p className="mt-2 text-base text-muted-foreground">
              Your personal finance summary from December 2025 to May 2026.
            </p>
          </div>
        </div>

        {/* Stats — 4 columns on desktop */}
        <SummaryCards
          balance={summary.balance}
          totalIncome={summary.totalIncome}
          totalExpenses={summary.totalExpenses}
          savingsRate={summary.savingsRate}
        />

        {/* Analytics */}
        <section>
          <div className="mb-5">
            <h2 className="scroll-m-20 text-xl font-bold tracking-tight">Analytics</h2>
            <p className="mt-1 text-sm text-muted-foreground">Income trends and spending distribution</p>
          </div>
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
            <SpendingTrendsChart data={monthlyTrends} />
            <CategoryPieChart data={categoryBreakdown} />
          </div>
        </section>

        {/* Transactions */}
        <section>
          <div className="mb-5">
            <h2 className="scroll-m-20 text-xl font-bold tracking-tight">Transaction History</h2>
            <p className="mt-1 text-sm text-muted-foreground">Filter and review all recorded transactions</p>
          </div>
          <TransactionsList transactions={transactions} />
        </section>
      </main>
    </div>
  )
}

export default App
