import { Steps } from "./types";

const APARTMENT_DESCRIPTION =
  "Estas son algunas preguntas que nos permitirán conocer más de tu inmueble.";

const ABOUT_YOU_DESCRIPTION =
  "Queremos saber tus datos, o bien, de la persona que solicita la oferta.";

export const STEPS_JSON = {
  [Steps.STEP1]: {
    title: "Sobre ti",
    order: 1,
    description: ABOUT_YOU_DESCRIPTION,
  },
  [Steps.STEP2]: {
    title: "Sobre ti",
    order: 2,
    description: ABOUT_YOU_DESCRIPTION,
  },
  [Steps.STEP3]: {
    title: "Ubicación",
    order: 3,
    description: APARTMENT_DESCRIPTION,
  },
  [Steps.STEP4]: {
    title: "Características",
    order: 4,
    description: APARTMENT_DESCRIPTION,
  },
  [Steps.STEP5]: {
    title: "Características",
    order: 5,
    description: APARTMENT_DESCRIPTION,
  },
  [Steps.STEP6]: {
    title: "Detalles",
    order: 6,
    description: "Este es el resumen de los datos que nos has proporcionado.",
  },
};
