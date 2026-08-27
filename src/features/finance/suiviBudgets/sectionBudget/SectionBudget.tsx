import { LigneBudget } from "../ligneBudget/LineBudget";
import type { SectionBudgetProps } from "../SuiviBudgets.type";

export function SectionBudget({
  sujet,
  budgets,
}: Readonly<SectionBudgetProps>) {
  const budgetsAssocies = budgets.filter(
    (budget) => budget.idSection === sujet.id,
  );

  return (
    <section className="section-budget">
      <h3>{sujet.titre}</h3>
      <ul>
        {budgetsAssocies.map((budget) => (
          <LigneBudget key={budget.id} budget={budget} />
        ))}
      </ul>
    </section>
  );
}
