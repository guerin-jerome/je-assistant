import type { Budget, SectionBudget } from "../../../types/finance.types";

export interface SuiviBudgetsProps {
  sectionsBudget: SectionBudget[];
  budgets: Budget[];
}

export interface SectionBudgetProps {
  sujet: SectionBudget;
  budgets: Budget[];
}

export interface LigneBudgetProps {
  budget: Budget;
}
