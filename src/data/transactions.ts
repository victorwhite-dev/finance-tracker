export type Category =
  | "Food"
  | "Transport"
  | "Entertainment"
  | "Housing"
  | "Health"
  | "Income"

export interface Transaction {
  id: string
  date: string
  description: string
  category: Category
  amount: number
}

export const transactions: Transaction[] = [
  { id: "1",  date: "2025-12-03", description: "Salary – December",       category: "Income",        amount:  4800 },
  { id: "2",  date: "2025-12-05", description: "Rent payment",            category: "Housing",       amount: -1450 },
  { id: "3",  date: "2025-12-07", description: "Grocery run – Trader Joe's", category: "Food",      amount:  -112 },
  { id: "4",  date: "2025-12-10", description: "Uber to airport",         category: "Transport",     amount:   -38 },
  { id: "5",  date: "2025-12-12", description: "Netflix subscription",    category: "Entertainment", amount:   -18 },
  { id: "6",  date: "2025-12-15", description: "Dentist appointment",     category: "Health",        amount:   -95 },
  { id: "7",  date: "2025-12-19", description: "Dinner – Osteria",        category: "Food",          amount:   -74 },
  { id: "8",  date: "2025-12-22", description: "Monthly bus pass",        category: "Transport",     amount:   -62 },
  { id: "9",  date: "2026-01-02", description: "Salary – January",        category: "Income",        amount:  4800 },
  { id: "10", date: "2026-01-03", description: "Rent payment",            category: "Housing",       amount: -1450 },
  { id: "11", date: "2026-01-06", description: "Whole Foods grocery",     category: "Food",          amount:   -98 },
  { id: "12", date: "2026-01-09", description: "Gas station",             category: "Transport",     amount:   -55 },
  { id: "13", date: "2026-01-11", description: "Spotify + Apple Music",   category: "Entertainment", amount:   -27 },
  { id: "14", date: "2026-01-14", description: "Annual gym membership",   category: "Health",        amount:  -240 },
  { id: "15", date: "2026-01-17", description: "Cinema – weekend",        category: "Entertainment", amount:   -32 },
  { id: "16", date: "2026-01-20", description: "Freelance project",       category: "Income",        amount:  1200 },
  { id: "17", date: "2026-01-23", description: "Coffee shop – daily",     category: "Food",          amount:   -45 },
  { id: "18", date: "2026-01-27", description: "Electric bill",           category: "Housing",       amount:   -88 },
  { id: "19", date: "2026-02-01", description: "Salary – February",       category: "Income",        amount:  4800 },
  { id: "20", date: "2026-02-03", description: "Rent payment",            category: "Housing",       amount: -1450 },
  { id: "21", date: "2026-02-06", description: "Takeout – sushi night",   category: "Food",          amount:   -67 },
  { id: "22", date: "2026-02-10", description: "Lyft rides",              category: "Transport",     amount:   -41 },
  { id: "23", date: "2026-02-13", description: "Concert tickets",         category: "Entertainment", amount:  -130 },
  { id: "24", date: "2026-02-17", description: "Pharmacy – vitamins",     category: "Health",        amount:   -34 },
  { id: "25", date: "2026-02-20", description: "Freelance project",       category: "Income",        amount:   900 },
  { id: "26", date: "2026-02-24", description: "Internet bill",           category: "Housing",       amount:   -60 },
  { id: "27", date: "2026-03-01", description: "Salary – March",          category: "Income",        amount:  4800 },
  { id: "28", date: "2026-03-03", description: "Rent payment",            category: "Housing",       amount: -1450 },
  { id: "29", date: "2026-03-07", description: "Farmers market",          category: "Food",          amount:   -58 },
  { id: "30", date: "2026-03-11", description: "Train pass – monthly",    category: "Transport",     amount:   -75 },
  { id: "31", date: "2026-03-15", description: "Disney+ annual plan",     category: "Entertainment", amount:   -80 },
  { id: "32", date: "2026-03-18", description: "Eye doctor visit",        category: "Health",        amount:  -150 },
  { id: "33", date: "2026-03-22", description: "Brunch – weekend outing", category: "Food",          amount:   -55 },
  { id: "34", date: "2026-03-28", description: "Side hustle income",      category: "Income",        amount:   650 },
  { id: "35", date: "2026-04-01", description: "Salary – April",          category: "Income",        amount:  4800 },
  { id: "36", date: "2026-04-02", description: "Rent payment",            category: "Housing",       amount: -1450 },
  { id: "37", date: "2026-04-08", description: "Grocery run – Costco",    category: "Food",          amount:  -145 },
  { id: "38", date: "2026-04-12", description: "Car fuel",                category: "Transport",     amount:   -60 },
  { id: "39", date: "2026-04-16", description: "Video game purchase",     category: "Entertainment", amount:   -70 },
  { id: "40", date: "2026-04-20", description: "Chiropractor",            category: "Health",        amount:   -85 },
  { id: "41", date: "2026-04-25", description: "Freelance project",       category: "Income",        amount:  1500 },
  { id: "42", date: "2026-04-28", description: "Water + gas utilities",   category: "Housing",       amount:   -92 },
  { id: "43", date: "2026-05-01", description: "Salary – May",            category: "Income",        amount:  4800 },
  { id: "44", date: "2026-05-02", description: "Rent payment",            category: "Housing",       amount: -1450 },
  { id: "45", date: "2026-05-06", description: "Meal prep groceries",     category: "Food",          amount:   -88 },
  { id: "46", date: "2026-05-09", description: "Parking fees",            category: "Transport",     amount:   -28 },
  { id: "47", date: "2026-05-14", description: "Streaming bundle",        category: "Entertainment", amount:   -25 },
  { id: "48", date: "2026-05-18", description: "Annual check-up",         category: "Health",        amount:  -120 },
]

export const CATEGORIES: Category[] = [
  "Food",
  "Transport",
  "Entertainment",
  "Housing",
  "Health",
  "Income",
]

export const CATEGORY_COLORS: Record<Category, string> = {
  Income:        "var(--chart-2)",
  Food:          "var(--chart-1)",
  Transport:     "var(--chart-3)",
  Entertainment: "var(--chart-5)",
  Housing:       "var(--chart-4)",
  Health:        "var(--chart-6)",
}

export const CATEGORY_BADGE_CLASSES: Record<Category, string> = {
  Income:        "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  Food:          "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300",
  Transport:     "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300",
  Entertainment: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
  Housing:       "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300",
  Health:        "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300",
}

export function computeSummary(txns: Transaction[]) {
  const totalIncome = txns.filter(t => t.amount > 0).reduce((s, t) => s + t.amount, 0)
  const totalExpenses = txns.filter(t => t.amount < 0).reduce((s, t) => s + Math.abs(t.amount), 0)
  const balance = totalIncome - totalExpenses
  const savingsRate = totalIncome > 0 ? ((totalIncome - totalExpenses) / totalIncome) * 100 : 0
  return { totalIncome, totalExpenses, balance, savingsRate }
}

export function computeMonthlyTrends(txns: Transaction[]) {
  const months: Record<string, { income: number; expenses: number }> = {}
  for (const t of txns) {
    const key = t.date.slice(0, 7)
    if (!months[key]) months[key] = { income: 0, expenses: 0 }
    if (t.amount > 0) months[key].income += t.amount
    else months[key].expenses += Math.abs(t.amount)
  }
  return Object.entries(months)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, v]) => ({
      month: new Date(month + "-01").toLocaleString("default", { month: "short", year: "2-digit" }),
      income: Math.round(v.income),
      expenses: Math.round(v.expenses),
    }))
}

export function computeCategoryBreakdown(txns: Transaction[]) {
  const totals: Partial<Record<Category, number>> = {}
  for (const t of txns) {
    if (t.amount < 0) {
      const cat = t.category
      totals[cat] = (totals[cat] ?? 0) + Math.abs(t.amount)
    }
  }
  return Object.entries(totals).map(([name, value]) => ({ name, value: Math.round(value as number) }))
}
