import type { HistoriqueProps } from "../Historique.type";
import { LigneHistorique } from "./LigneHistorique";

export function TableauHistorique({
  mouvementsFinancier,
  budgets,
}: Readonly<HistoriqueProps>) {
  return (
    <table>
      <thead>
        <tr>
          <th>Mouvement financier</th>
          <th>Description</th>
          <th>Budget impacté</th>
        </tr>
      </thead>
      <tbody>
        {mouvementsFinancier.map((mouvementFinancier) => (
          <LigneHistorique
            key={`${mouvementFinancier.idBudget}-${mouvementFinancier.valeur}`}
            mouvementFinancier={mouvementFinancier}
            budgets={budgets}
          />
        ))}
      </tbody>
    </table>
  );
}
