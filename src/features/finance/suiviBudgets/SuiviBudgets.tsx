import { SectionBudget } from "./sectionBudget/SectionBudget";
import type { SuiviBudgetsProps } from "./SuiviBudgets.type";

export function SuiviBudgets({
  sectionsBudget,
  budgets,
}: Readonly<SuiviBudgetsProps>) {
  return (
    <section id="suivi-budgets">
      <h2>Suivi des budgets</h2>
      <button>Réinitialiser</button>
      {sectionsBudget.map((sectionBudget) => (
        <SectionBudget
          key={sectionBudget.id}
          sujet={sectionBudget}
          budgets={budgets}
        />
      ))}
    </section>
  );
}
