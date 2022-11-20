import { IInputValues } from "./types";

export const INPUT_VALUES: IInputValues = {
  "/fullname": {
    name: "fullName",
    placeholder: "Nombre completo",
    label: "Nombre completo",
    nextPath: "/email",
  },
  "/email": {
    name: "email",
    placeholder: "Correo electrónico",
    label: "Escribe tu correo electrónico",
    nextPath: "/address",
  },
  "/address": {
    name: "address",
    placeholder: "Dirección",
    label: "Escribe tu dirección",
    nextPath: "/",
  },
};
