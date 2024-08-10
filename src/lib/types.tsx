// lib/types.ts
export interface Translations {
  NAV_BAR: string;
  HEADER: string;
  PARAGRAPH?: string;  // Add the PARAGRAPH property
  Num1HEADER?: string;  // Optional properties
  Num1PARAGRAPH?: string;
  Num1CTA?: string;
  Num2HEADER?: string;
  Num2PARAGRAPH?: string;
  Num2CTA?: string;
  Num3HEADER?: string;
  Num3PARAGRAPH?: string;
  Num3CTA?: string;
  L1?: string;
  L2?: string;
  L3?: string;
  L4?: string;
  COMPONENT: string;
  OPTION: string;
  BUTTON: string;
  PAGETITLE: string;
  RES1_TITLE: string;
  RES1_CONTENT: string;
  RES2_TITLE: string;
  RES2_CONTENT: string;
  RES3_TITLE: string;
  RES3_CONTENT: string;
  RES4_TITLE: string;
  RES4_CONTENT: string;
  RES5_TITLE: string;
  RES5_CONTENT: string;
  RES6_TITLE: string;
  RES6_CONTENT: string;
  RES7_TITLE: string;
  RES7_CONTENT: string;
  RES8_TITLE: string;
  RES8_CONTENT: string;
  FOOTER: string;
}

export interface TranslationsMap {
  en: Translations;
  es: Translations;
}
