import type { HistoriqueProps } from "./Historique.type";
import { TableauHistorique } from "./tableau/TableauHistorique";

export function Historique({
  mouvementsFinancier,
  budgets,
}: Readonly<HistoriqueProps>) {
  return (
    <section id="historique">
      <h2>Historique</h2>
      <button>Modifier un mouvement</button>
      <TableauHistorique
        mouvementsFinancier={mouvementsFinancier}
        budgets={budgets}
      />
    </section>
  );
}
