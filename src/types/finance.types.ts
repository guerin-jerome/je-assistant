// Section - informations essentielles
export interface InformationsEssentielles {
  totalBudgets: number;
  totalEpargne: number;
}

// Section - budget
type BudgetType = "fixe" | "variable" | "epargne";

interface BudgetBase {
  id: string;
  idSection: string;
  titre: string;
  type: BudgetType;
  favori?: boolean;
}

interface BudgetFixe extends BudgetBase {
  base: number;
  estVide: boolean;
  type: "fixe";
}

interface BudgetVariable extends BudgetBase {
  base: number;
  valeurCourante: number;
  type: "variable";
}

export type Budget = BudgetFixe | BudgetVariable;

export interface SectionBudget {
  id: string;
  titre: string;
}

// Section - historique
export interface MouvementFinancier {
  idBudget: string;
  valeur: number;
  description?: string;
}
