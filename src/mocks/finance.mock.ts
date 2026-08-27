import type {
  Budget,
  MouvementFinancier,
  SectionBudget,
} from "../types/finance.types";

export const informationsEssentielles = {
  totalBudgets: 1254.0,
  totalEpargne: 4589.0,
};

export const sectionsBudget: SectionBudget[] = [
  { id: "charges-fixes", titre: "Charges fixes" },
  { id: "charges-variables", titre: "Charges variables" },
  { id: "epargnes", titre: "Charges fixes" },
];

export const budgets: Budget[] = [
  // Charges fixes
  {
    id: "1",
    idSection: "charges-fixes",
    titre: "Loyer",
    type: "fixe",
    estVide: false,
    base: 690,
  },
  {
    id: "2",
    idSection: "charges-fixes",
    titre: "Consommations",
    type: "variable",
    valeurCourante: 50,
    base: 77,
  },
  {
    id: "3",
    idSection: "charges-fixes",
    titre: "Assurances",
    type: "variable",
    valeurCourante: 77,
    base: 100,
  },
  {
    id: "4",
    idSection: "charges-fixes",
    titre: "Abonnements",
    type: "variable",
    valeurCourante: 22.5,
    base: 80,
  },

  // Charges variables
  {
    id: "5",
    idSection: "charges-variables",
    titre: "Alimentation",
    type: "variable",
    valeurCourante: 221.17,
    base: 325,
    favori: true,
  },
  {
    id: "6",
    idSection: "charges-variables",
    titre: "Coiffeur",
    type: "variable",
    valeurCourante: 48,
    base: 48,
  },
  {
    id: "7",
    idSection: "charges-variables",
    titre: "Essences",
    type: "variable",
    valeurCourante: 52,
    base: 110,
  },
  {
    id: "8",
    idSection: "charges-variables",
    titre: "Sorties",
    type: "variable",
    valeurCourante: 116.1,
    base: 250,
    favori: true,
  },
  {
    id: "9",
    idSection: "charges-variables",
    titre: "Achats & culture",
    type: "variable",
    valeurCourante: 33.65,
    base: 180,
    favori: true,
  },
  {
    id: "10",
    idSection: "charges-variables",
    titre: "Professionnel",
    type: "variable",
    valeurCourante: 75,
    base: 75,
  },
  {
    id: "11",
    idSection: "charges-variables",
    titre: "Divers",
    type: "variable",
    valeurCourante: 140,
    base: 140,
  },

  // Épargnes
  {
    id: "12",
    idSection: "epargnes",
    titre: "Assurance vie",
    type: "fixe",
    estVide: false,
    base: 50,
  },
  {
    id: "13",
    idSection: "epargnes",
    titre: "PEA",
    type: "fixe",
    estVide: true,
    base: 200,
  },
  {
    id: "14",
    idSection: "epargnes",
    titre: "Livret A",
    type: "fixe",
    estVide: true,
    base: 500,
  },
];

export const mouvementsFinancier: MouvementFinancier[] = [
  { idBudget: "2", valeur: -27, description: "EDF" },
  { idBudget: "4", valeur: -30, description: "Chaîne L1+" },
  { idBudget: "3", valeur: -23, description: "MAIF" },
  { idBudget: "4", valeur: -27.5, description: "Orange fibre" },
  { idBudget: "5", valeur: -53.83, description: "Hyper U" },
  { idBudget: "5", valeur: -50 },
  { idBudget: "7", valeur: -58, description: "Station Total" },
  { idBudget: "8", valeur: -53.9, description: "Bar - l'auberge" },
  { idBudget: "8", valeur: 20, description: "Remboursement Pierre" },
  { idBudget: "8", valeur: -100 },
  { idBudget: "9", valeur: -146.35 },
  { idBudget: "13", valeur: -200 },
  { idBudget: "14", valeur: -500 },
];
