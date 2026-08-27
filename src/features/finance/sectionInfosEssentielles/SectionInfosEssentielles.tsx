import { formatterValeurMonetaire } from "../../../utils/finance.utils";
import type { SectionInfosEssentiellesProps } from "./SectionInfosEssentielles.type";

export function SectionInfosEssentielles({
  informationsEssentielles,
}: Readonly<SectionInfosEssentiellesProps>) {
  return (
    <section id="infos-essentielles">
      <h2>Informations essentielles</h2>
      <table>
        <thead>
          <tr>
            <th>Total restant</th>
            <th>Épargne sécurité</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              {formatterValeurMonetaire(informationsEssentielles.totalBudgets)}
            </th>
            <th>
              {formatterValeurMonetaire(informationsEssentielles.totalEpargne)}
            </th>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
