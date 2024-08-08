import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "AYUDA VZLA": "HELP VZLA",
      "AYUDAR A VENEZUELA DESDE E.E.U.U.": "HELP VENEZUELA FROM THE U.S.",
      "Qué ladilla ser testigo de las luchas en curso en Venezuela, pero solo porque estamos en Estados Unidos no significa que no podamos hacer una diferencia. Abajo, encontrarás recursos valiosos y formas de apoyar y amplificar la voz de Venezuela. Juntos, podemos ayudar a llevar esperanza y alivio a los necesitados.": "What a hassle to witness the ongoing struggles in Venezuela, but just because we are in the United States does not mean we cannot make a difference. Below, you will find valuable resources and ways to support and amplify Venezuela's voice. Together, we can help bring hope and relief to those in need.",
      "Este sitio web no se beneficia de la crisis en Venezuela, ni apoya a Maduro.": "This website does not profit from the crisis in Venezuela, nor does it support Maduro."
    }
  },
  es: {
    translation: {
      "AYUDA VZLA": "AYUDA VZLA",
      "AYUDAR A VENEZUELA DESDE E.E.U.U.": "AYUDAR A VENEZUELA DESDE E.E.U.U.",
      "Qué ladilla ser testigo de las luchas en curso en Venezuela, pero solo porque estamos en Estados Unidos no significa que no podamos hacer una diferencia. Abajo, encontrarás recursos valiosos y formas de apoyar y amplificar la voz de Venezuela. Juntos, podemos ayudar a llevar esperanza y alivio a los necesitados.": "Qué ladilla ser testigo de las luchas en curso en Venezuela, pero solo porque estamos en Estados Unidos no significa que no podamos hacer una diferencia. Abajo, encontrarás recursos valiosos y formas de apoyar y amplificar la voz de Venezuela. Juntos, podemos ayudar a llevar esperanza y alivio a los necesitados.",
      "Este sitio web no se beneficia de la crisis en Venezuela, ni apoya a Maduro.": "Este sitio web no se beneficia de la crisis en Venezuela, ni apoya a Maduro."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // default language
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
