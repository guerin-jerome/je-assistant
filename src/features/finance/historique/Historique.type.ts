import type { Budget, MouvementFinancier } from "../../../types/finance.types";

export interface HistoriqueProps {
  mouvementsFinancier: MouvementFinancier[];
  budgets: Budget[];
}

export interface LigneHistoriqueProps {
  mouvementFinancier: MouvementFinancier;
  budgets: Budget[];
}
