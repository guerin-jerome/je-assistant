import { formatterValeurMonetaire } from "../../../../utils/finance.utils";
import type { LigneBudgetProps } from "../SuiviBudgets.type";

export function LigneBudget({ budget }: Readonly<LigneBudgetProps>) {
  const valeurCouranteSiBudgetFixe =
    budget.type === "fixe" && budget.estVide
      ? "0\u00A0€"
      : formatterValeurMonetaire(budget.base);

  const valeurCourante =
    budget.type === "fixe"
      ? valeurCouranteSiBudgetFixe
      : `${formatterValeurMonetaire(budget.valeurCourante)}`;

  return (
    <li>
      {budget.titre} : {formatterValeurMonetaire(budget.base)} |{" "}
      {valeurCourante}
    </li>
  );
}
