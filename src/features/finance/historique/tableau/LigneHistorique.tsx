import { formatterValeurMonetaire } from "../../../../utils/finance.utils";
import type { LigneHistoriqueProps } from "../Historique.type";

export function LigneHistorique({
  mouvementFinancier,
  budgets,
}: Readonly<LigneHistoriqueProps>) {
  const { valeur, description } = mouvementFinancier;

  const budgetAffecte = budgets.find(
    (budget) => budget.id === mouvementFinancier.idBudget,
  );

  return (
    <tr>
      <th
        className={`mouvement-financier ${valeur < 0 ? "negatif" : "positif"}`}
      >
        {formatterValeurMonetaire(valeur)}
      </th>
      <th>{description ?? "-"}</th>
      <th>{budgetAffecte?.titre ?? "-"}</th>
    </tr>
  );
}
