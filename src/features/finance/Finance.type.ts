import type {
  Budget,
  InformationsEssentielles,
  MouvementFinancier,
  SectionBudget,
} from "../../types/finance.types";

export interface FinanceProps {
  informationsEssentielles: InformationsEssentielles;
  mouvementsFinancier: MouvementFinancier[];
  sectionsBudget: SectionBudget[];
  budgets: Budget[];
}
