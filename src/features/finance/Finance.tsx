import type { FinanceProps } from "./Finance.type";
import { Header } from "./header/Header";
import { SectionInfosEssentielles } from "./sectionInfosEssentielles/SectionInfosEssentielles";
import { SuiviBudgets } from "./suiviBudgets/SuiviBudgets";
import { Historique } from "./historique/Historique";

export function Finance({
  informationsEssentielles,
  mouvementsFinancier,
  sectionsBudget,
  budgets,
}: Readonly<FinanceProps>) {
  return (
    <main id="finance">
      <Header />
      <h1>Mes finances</h1>
      <SectionInfosEssentielles
        informationsEssentielles={informationsEssentielles}
      />
      <SuiviBudgets sectionsBudget={sectionsBudget} budgets={budgets} />
      <Historique mouvementsFinancier={mouvementsFinancier} budgets={budgets} />
    </main>
  );
}
