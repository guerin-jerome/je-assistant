import { Finance } from "./features/finance/Finance";
import {
  informationsEssentielles,
  mouvementsFinancier,
  sectionsBudget,
  budgets,
} from "./mocks/finance.mock";

export function App() {
  return (
    <Finance
      informationsEssentielles={informationsEssentielles}
      mouvementsFinancier={mouvementsFinancier}
      sectionsBudget={sectionsBudget}
      budgets={budgets}
    />
  );
}
