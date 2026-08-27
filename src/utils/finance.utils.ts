export function formatterValeurMonetaire(value: number): string {
  const formatteur = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  });
  return formatteur.format(value);
}
