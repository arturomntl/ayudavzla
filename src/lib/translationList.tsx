// lib/translationList.ts
import { TranslationsMap } from './types';  // Adjust the path if necessary

const translationsList: TranslationsMap = {
  en: {
    NAV_BAR: "HELP VZLA",
    HEADER: "[THE ORGANIZATIONS]",
    COMPONENT: "HOW TO HELP VZLA",
    OPTION: "HOME PAGE",
    FOOTER: "This website does not profit from the crisis in Venezuela, nor does it support Maduro.",
    BUTTON: "Translate to Spanish",
    L1: "USAID: Provides significant humanitarian assistance to Venezuela, including food, health, and other essential services",
    L2:"Venezuelans and Immigrants Aid (VIA): A volunteer-based non-profit organization founded by Venezuelan migrants that serves displaced people from Venezuela and other countries",
    L3: "Caritas Venezuela: Maintains active alliances with various national and international organizations to provide humanitarian aid within Venezuela.",
    L4: "International Rescue Committee (IRC): Supports partners in Venezuela to provide assistance to people affected by the economic downturn",
  },
  es: {
    NAV_BAR: "AYUDA VZLA",
    HEADER: "[LAS ORGANIZACIONES]",
    COMPONENT: "COMO AYUDAR VZLA",
    OPTION: "PAGINA INICIAL",
    FOOTER: "Este sitio web no se beneficia de la crisis en Venezuela, ni apoya a Maduro.",
    BUTTON: "Translate to English",
    L1: "USAID: Proporciona asistencia humanitaria significativa a Venezuela, incluyendo alimentos, salud y otros servicios esenciales.",
    L2:"Ayuda a Venezolanos e Inmigrantes (VIA): Una organización sin fines de lucro basada en voluntarios fundada por migrantes venezolanos que atiende a personas desplazadas de Venezuela y otros países",
    L3: "Caritas Venezuela: Mantiene alianzas activas con diversas organizaciones nacionales e internacionales para brindar ayuda humanitaria dentro de Venezuela.",
    L4: "Comité Internacional de Rescate (IRC): Apoya a los socios en Venezuela para brindar asistencia a las personas afectadas por la recesión económica.",
  }
};

export default translationsList;
